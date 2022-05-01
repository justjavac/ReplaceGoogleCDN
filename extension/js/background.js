/**
 * 记录每个 tab 页的信息
 * @type {Map<number, boolean>}
 */
const tabinfo = new Map();

/**
 * 扫描响应头，是否含有 Content-Security-Policy
 * @param {chrome.webRequest.HttpHeader[]} headers
 * @returns {boolean}
 */
function hasCSP(headers = []) {
    return headers.some(
        (x) => x.name.toLowerCase() === "content-security-policy"
    );
}


/**
 * 响应头里CSP相关的选项
 * @type {string[]}
 */
const remove_csp_item=[
    'content-security-policy',
    'content-security-policy-report-only',
    'expect-ct',
    'report-to',
    'x-content-security-policy',
    'x-webkit-csp',
    'x-xss-protection',
    'x-permitted-cross-domain-policies',
    'x-content-type-options',
    'x-frame-options',
    'permissions-policy',
    'timing-allow-origin'
];
/**
 * 需要移除CSP的URL
 * @type {string[]}
 */
const remove_cps_urls=[
    "*://ajax.googleapis.com/*",
    "*://fonts.googleapis.com/*",
    "*://themes.googleusercontent.com/*",
    "*://fonts.gstatic.com/*",
    "*://*.google.com/*",
    "*://secure.gravatar.com/*",
    "*://www.gravatar.com/*",
    "*://maxcdn.bootstrapcdn.com/*",
    '*://api.github.com/*',
    '*://www.gstatic.com/*',
    '*://stackoverflow.com/*',
    '*://translate.googleapis.com/*',
    "*://developers.redhat.com/*",
//    "*://cloud-soft.xieyaokun.com/*"
]
/**
 * 移除CSP
 * 参考文档：
 *   1、 https://developer.chrome.com/docs/extensions/reference/webRequest/#event-onHeadersReceived
 *   2、  https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/trusted_types_on_webui.md
 *   3、 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types
 *   4、 Arrow_Function 箭头函数
 *   5、 返回新的新的响应头： return {responseHeaders: details.responseHeaders};
 *   6、Chrome 新增的可信类型（Trusted types），暂时不知道怎么解决
 *
 */

chrome.webRequest.onHeadersReceived.addListener(
    (details)=>{
        tabinfo.set(details.tabId, hasCSP(details.responseHeaders)); //暂时不知道什么地方用到
        return {
            responseHeaders:details.responseHeaders.filter(
                header =>!remove_csp_item.includes(header.name.toLowerCase())
            )
        };
  },
  {
//    urls: ["<all_urls>"],
    //需要移除CSP自己添加url
    urls: [
        ...remove_cps_urls
    ],
    types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "other"]
  },
  ["blocking", 'responseHeaders']
);

//Open Source urls
let opensource_goole_urls=[
    "*://*.chromium.org/*", //Chromium ChromiumOS GN
    "*://*.googlesource.com/*", //Chromium
    "*://summerofcode.withgoogle.com/*",
    "https://cs.opensource.google/*", //Google Open Source
    "https://opensource.googleblog.com/*",
    "https://opensource.google/*",
]

// 测试域名组
let test_urls=[
    ...opensource_goole_urls, //数组
    "*://*.google.com/*",  //测试域名
    "*://github.com/*",    //测试域名
]
/**
 *   使用自己架设的 nginx服务，替换CDN地址
 *
 *   容器运行 nginx 脚本位于 server 目录
 *   备注： domain.com   请更换为自己的域名
 *
 *   测试案例 查看chromium 源码
 *   https://gerrit.googlesource.com/gerrit
 *   https://www.chromium.org
 *   https://chromium.googlesource.com/
 *   https://source.chromium.org/chromium
 *   https://cs.opensource.google/
 * @param details
 * @param proxy_provider  # 请更换为自己的域名
 * @returns {string}
 *
 */
let use_nginx_proxy = (details, proxy_provider) => {
    // 主要是和 nginx 配合使用
    let url = details.url.replace('http://', 'https://')
    // 代理服务提供者 需要支持泛域名
    // let proxy_provider = '.proxy.domain.com'
    let middle_builder = new URL(url);
    // 中文域名编码转换 punycode标准编码: punycode('点')= 'xn--3px'
    //替换点. 为了正则表达式好区分 _xn--3px_仅仅是分隔符号，可以自己定义分隔符号
    let host = middle_builder.host.replace(/\./g, '_xn--3px_');
    //计算符号点的个数
    let dot_nums = middle_builder.host.match(/\./g).length
    let query_string = middle_builder.pathname + middle_builder.search
    return "https://" + dot_nums + '_' + host + proxy_provider + query_string;
}

// 你的支持泛解析的域名
let suffix_domain = '.proxy.domain.com'
// 指定匹配域名
let need_replace_cdn_urls = [
    'ajax.googleapis.com',
    'fonts.googleapis.com',
    'themes.googleusercontent.com',
    'fonts.gstatic.com',
    'ssl.gstatic.com',
    'www.gstatic.com',
    'secure.gravatar.com',
    'maxcdn.bootstrapcdn.com',
    'github.com',
    'www.google.com'
]
let cdn_urls = need_replace_cdn_urls.map((currentValue, index, arr) => {
    return "https://" + currentValue.replace(/\./g, '-') + suffix_domain
})
let replace_cdn_urls = (details) => {
    let url_obj = new URL(details.url);
    let query_string = url_obj.pathname + url_obj.search
    let element_postion = need_replace_cdn_urls.indexOf(url_obj.hostname);
    if (element_postion !== -1) {
        return cdn_urls[element_postion] + query_string;
    }
    return null;
}

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    // Comment out these lines
    // The returned data is NOT a webRequest.BlockingResponse type data, will cause error on Chrome Version 87 88 90
    // see https://github.com/justjavac/ReplaceGoogleCDN/issues/64#issuecomment-839610913
    // see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest

    // If we need to deal with the CSP, we must return the right data type but not simple a url string.

    // if (tabinfo.get(details.tabId)) {
    //     return details.url;
    // }

    // 方法一： 支持特定域名替换
    // 测试例子：打开 https://github.com (仅用于学习技术)
    // https://github-com.proxy.xiaoshuogeng.com/
     /*

     let des_url;
     if ((des_url = replace_cdn_urls(details))) {
        return {redirectUrl: des_url};
     }


      */


     // 方法二： 使用nginx架设的服务动态地址替换
     // 测试例子：打开 https://ww.google.com (仅用于学习技术)
     // https://2_www_xn--3px_google_xn--3px_com.proxy.xiaoshuogeng.com/
      /*

      return {redirectUrl: use_nginx_proxy(details,suffix_domain)};

      */

    let url = details.url.replace("http://", "https://");
    url = url.replace("ajax.googleapis.com", "ajax.loli.net");
    url = url.replace("fonts.googleapis.com", "fonts.loli.net");
    url = url.replace("themes.googleusercontent.com", "themes.loli.net");
    url = url.replace("fonts.gstatic.com", "gstatic.loli.net");
    url = url.replace(
      "www.google.com/recaptcha/",
      "www.recaptcha.net/recaptcha/"
    );
    url = url.replace("secure.gravatar.com", "gravatar.loli.net");
    url = url.replace("www.gravatar.com", "gravatar.loli.net");
    url = url.replace(
      /maxcdn\.bootstrapcdn\.com\/bootstrap\/(\d{1,4}\.\d{1,4}\.\d{1,4})\/(.*?)/g,
      "cdn.jsdelivr.net/npm/bootstrap@$1/dist/$2"
    );
    return { redirectUrl: url };
  },
  {
    urls: [
        "*://ajax.googleapis.com/*",
        "*://fonts.googleapis.com/*",
        "*://themes.googleusercontent.com/*",
        "*://fonts.gstatic.com/*",
        "*://www.google.com/recaptcha/*",
        "*://secure.gravatar.com/*",
        "*://www.gravatar.com/*",
        "*://maxcdn.bootstrapcdn.com/bootstrap/*",
        // ...test_urls // 测试用例

    ],
  },
  ["blocking"]
);

chrome.tabs.onRemoved.addListener(function (tabId) {
  tabinfo.delete(tabId);
});
