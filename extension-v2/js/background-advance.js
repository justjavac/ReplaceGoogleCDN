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

/*
==================================================

                功能一： 移除内容安全策略 （content-security-policy)
                        可以修改响应头
                            1. 响应头添加键值对
                            2. 响应头移除键值对

==================================================
*/

/**
 * 响应头里CSP相关的选项
 * @type {string[]}
 */

const remove_csp_item = [
  "content-security-policy",
  "content-security-policy-report-only",
  "expect-ct",
  "report-to",
  "x-content-security-policy",
  "x-webkit-csp",
  "x-xss-protection",
  "x-permitted-cross-domain-policies",
  "x-content-type-options",
  "x-frame-options",
  "permissions-policy",
  "timing-allow-origin",
  "cross-origin-embedder-policy",
  "cross-origin-opener-policy",
  "cross-origin-opener-policy-report-only",
  "cross-origin-embedder-policy-report-only",
];

/**
 * 需要移除CSP的URL
 * @type {string[]}
 */
const remove_csp_urls = [
  "*://ajax.googleapis.com/*",
  "*://fonts.googleapis.com/*",
  "*://themes.googleusercontent.com/*",
  "*://fonts.gstatic.com/*",
  "*://*.google.com/*",
  "*://secure.gravatar.com/*",
  "*://www.gravatar.com/*",
  "*://maxcdn.bootstrapcdn.com/*",
  "*://api.github.com/*",
  "*://www.gstatic.com/*",
  "*://stackoverflow.com/*",
  "*://translate.googleapis.com/*",
  "*://developers.redhat.com/*",
  "*://*.githubusercontent.com/*",
  "*://pub.dev/*",
  "*://stackoverflow.com/*",
];

//console.log(chrome.app.getDetails().version);
//console.log(navigator.userAgent);
let chrome_ersion = (/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 59])[1];
//console.log(chrome_ersion);

//  浏览器各版本支持的ResourceType
//   https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/ResourceType

let web_request_resource_types = [
  "main_frame",
  "sub_frame",
  "stylesheet",
  "script",
  "image",
  "font",
  "object",
  "xmlhttprequest",
  "ping",
  "other",
  "csp_report",
  "media",
  "websocket",
];

if (chrome_ersion < 58) {
  //  "csp_report",  "media",  "websocket"  chromium 内核版本58以上才完全支持
  web_request_resource_types = [
    "main_frame",
    "sub_frame",
    "stylesheet",
    "script",
    "image",
    "font",
    "object",
    "xmlhttprequest",
    "ping",
    "other",
  ];
}

/**
 * 移除 Content-Security-Policy
 * 参考文档：
 *   1、 https://developer.chrome.com/docs/extensions/reference/webRequest/#event-onHeadersReceived
 *   2、  https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/trusted_types_on_webui.md
 *   3、 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types
 *   4、 Arrow_Function 箭头函数
 *   5、 返回新的新的响应头： return {responseHeaders: details.responseHeaders};
 *   6、Chrome 新增的可信类型（Trusted types），暂时不知道怎么解决
 *   7、https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onHeadersReceived
 *   8、https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/ResourceType
 *
 */

chrome.webRequest.onHeadersReceived.addListener(
  (details) => {
    tabinfo.set(details.tabId, hasCSP(details.responseHeaders)); //暂时不知道什么地方用到

    //移除响应头 Content-Security-Policy
    details.responseHeaders = details.responseHeaders.filter(
      (response_header) =>
        !remove_csp_item.includes(response_header.name.toLowerCase())
    );

    /*
    for (let [index, header] of details.responseHeaders.entries()) {
      console.log(index, header);
    }
    */

    return {
      responseHeaders: details.responseHeaders,
    };
  },
  {
    //    urls: ["<all_urls>"],
    urls: [
      ...remove_csp_urls, //需要移除CSP自己添加url
    ],
    types: web_request_resource_types,
  },
  ["blocking", "responseHeaders"]
);

/*
==================================================

                功能二： 请求地址重定向 （ url redirect)
                           支持高级玩法（支持2种玩法）
==================================================
*/

// 高级玩法使用的泛解析的域名
let suffix_domain = ".proxy.domain.com"; //请把这个换成你自己的域名
// suffix_domain = ".proxy.xiaoshuogeng.com";

/**
 *  高级玩法一：
 *            特定域名替换
 *
 *   使用自建CDN，进行地址替换
 *
 *   备注： domain.com   请更换为自己的域名
 *
 *   测试例子：  打开 https://github.com (仅用于学习技术)
 *   替换以后得的地址： https://github-com.proxy.xiaoshuogeng.com/
 */

// 高级玩法一：需要匹配的域名
let need_replace_cdn_urls = [
  "ajax.googleapis.com",
  "fonts.googleapis.com",
  "themes.googleusercontent.com",
  "fonts.gstatic.com",
  "ssl.gstatic.com",
  "www.gstatic.com",
  "secure.gravatar.com",
  "www.gravatar.com",
  "maxcdn.bootstrapcdn.com",
  "github.com",
  "www.google.com",
];

let cdn_urls = need_replace_cdn_urls.map((currentValue, index, arr) => {
  return "https://" + currentValue.replace(/\./g, "-") + suffix_domain;
});

// 高级玩法一：执行域名替换
let replace_cdn_urls = (details) => {
  let url_obj = new URL(details.url);
  let query_string = url_obj.pathname + url_obj.search;
  let element_postion = need_replace_cdn_urls.indexOf(url_obj.hostname);
  if (element_postion !== -1) {
    return cdn_urls[element_postion] + query_string;
  }
  return null;
};

//Open Source urls 高级玩法测试域名
let opensource_google_urls = [
  "*://*.chromium.org/*", //Chromium ChromiumOS GN
  "*://*.googlesource.com/*", //Chromium
  "*://summerofcode.withgoogle.com/*",
  "*://cs.opensource.google/*", //Google Open Source
  "*://opensource.googleblog.com/*",
  "*://opensource.google/*",
];

// 高级玩法测试域名组
let test_urls = [
  ...opensource_google_urls,
  "*://*.google.com/*",
  "*://github.com/*",
];

/**
 *  高级玩法二：
 *            泛域名替换（不限定域名）
 *
 *   中文域名编码转换 punycode标准编码: punycode('点') = 'xn--3px'
 *   替换点. 为了正则表达式好区分 _xn--3px_仅仅是分隔符号，可以自己定义分隔符号
 *
 *   测试例子：打开 https://www.google.com (仅用于学习技术)
 *   替换以后地址：https://2_www_xn--3px_google_xn--3px_com.proxy.xiaoshuogeng.com/
 *
 */

// 高级玩法二：执行域名替换
let use_nginx_proxy = (details, proxy_provider) => {
  let url = details.url.replace("http://", "https://");
  let middle_builder = new URL(url);
  let host = middle_builder.host.replace(/\./g, "_xn--3px_");
  //计算符号点的个数
  let dot_nums = middle_builder.host.match(/\./g).length;
  let query_string = middle_builder.pathname + middle_builder.search;

  return "https://" + dot_nums + "_" + host + proxy_provider + query_string;
};

// 被阻止请求的域名列表
let block_domains = [
  "example-example.com",
  "test1-example.com",
  "test2-example.com",
  "test3-example.com",
];
let block_domain_urls = [];
block_domains.forEach((value, index, array) => {
  block_domain_urls.push("*://" + value + "/*");
  block_domain_urls.push("*://*." + value + "/*");
});

/*
  请求地址重定向
  参考文档：
  1. https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest

*/
chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    /*
      Comment out these lines
      The returned data is NOT a webRequest.BlockingResponse type data, will cause error on Chrome Version 87 88 90
      see https://github.com/justjavac/ReplaceGoogleCDN/issues/64#issuecomment-839610913
      If we need to deal with the CSP, we must return the right data type but not simple a url string.
    */

    /*
      if (tabinfo.get(details.tabId)) {
          return details.url;
      }
    */

    /*
          //拦截请求域名(也就是广告拦截器原理)：
          let prevent_domins = block_domains.filter(
            (domain) => details.url.indexOf(domain) !== -1
          );
          if (prevent_domins.length > 0) {
            return { cancel: true };
          }

          //高级玩法一：
          let des_url;
          if ((des_url = replace_cdn_urls(details))) {
            return { redirectUrl: des_url };
          }

          //高级玩法二：
          return { redirectUrl: use_nginx_proxy(details, suffix_domain) };

    */

    let url = details.url.replace("http://", "https://");
    url = url.replace("ajax.googleapis.com", "ajax.loli.net");
    //url = url.replace("fonts.googleapis.com", "fonts.loli.net");
    url = url.replace("fonts.googleapis.com", "fonts.googleapis.cn");
    url = url.replace("themes.googleusercontent.com", "themes.loli.net");
    //url = url.replace("fonts.gstatic.com", "gstatic.loli.net");
    url = url.replace("fonts.gstatic.com", "fonts.gstatic.cn");
    url = url.replace(
      "www.google.com/recaptcha/",
      "www.recaptcha.net/recaptcha/"
    );
    url = url.replace("secure.gravatar.com", "gravatar.loli.net");
    url = url.replace("www.gravatar.com", "gravatar.loli.net");
    url = url.replace("en.gravatar.com", "gravatar.loli.net");
    url = url.replace("cn.gravatar.com", "gravatar.loli.net");

    url = url.replace("cdn.jsdelivr.net", "fastly.jsdelivr.net");

    //"cdn.bootcdn.net/ajax/libs/twitter-bootstrap/"
    //"cdn.jsdelivr.net/npm/bootstrap@$1/dist/$2"
    url = url.replace(
      /maxcdn\.bootstrapcdn\.com\/bootstrap\/(\d{1,4}\.\d{1,4}\.\d{1,4})\/(.*?)/g,
      "lib.baomitu.com/twitter-bootstrap/$1/$2"
    );
    url = url.replace(
      /code\.jquery\.com\/jquery-(\d{1,4}\.\d{1,4}\.\d{1,4})(.*?)/g,
      "lib.baomitu.com/jquery/$1/jquery$2"
    );
    url = url.replace(
      /code\.jquery\.com\/ui\/(\d{1,4}\.\d{1,4}\.\d{1,4})\/(.*?)/g,
      "ajax.aspnetcdn.com/ajax/jquery.ui/$1/$2"
    );
    url = url.replace("developers.google.com", "developers.google.cn");
    url = url.replace("developer.android.com", "developer.android.google.cn");
    url = url.replace("source.android.com", "source.android.google.cn");
    url = url.replace("www.gstatic.com", "www.gstatic.cn");
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
      "*://en.gravatar.com/*",
      "*://cn.gravatar.com/*",
      "*://www.gravatar.com/*",
      "*://maxcdn.bootstrapcdn.com/bootstrap/*",
      "*://cdn.jsdelivr.net/*",
      "*://code.jquery.com/jquery-*",
      "*://code.jquery.com/ui/*",
      "*://developers.google.com/*",
      "*://developer.android.com/*",
      "*://source.android.com/*",
      "*://www.gstatic.com/*",
      //...test_urls, // 高级玩法的测试用例
      ...block_domain_urls, //阻止域名请求
    ],
  },
  ["blocking"]
);

/*
==================================================

                功能三： 修改请求头 （ modify header)

==================================================
*/

/*
  请求头添加、移除参数
  参考文档：
   1. https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest

  例子1：请求头修改 User-Agent
  例子2：请求头添加参数
  例子3：请求头移除参数 移除携带的cookie信息
*/
chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    //console.log(details)
    let urlObj = new URL(details.url);
    //console.log(urlObj)

    let ua_index = -1;
    let referer_index = -1;
    let cookie_index = -1;

    for (const [index, header] of details.requestHeaders.entries()) {
      if (header.name.toLowerCase() === "user-agent") {
        ua_index = index;
      }
      if (header.name.toLowerCase() === "referer") {
        referer_index = index;
      }
      if (header.name.toLowerCase() === "cookie") {
        cookie_index = index;
      }
    }

    if (urlObj.host.indexOf("baidu.com") !== -1) {
      //请求头修改User Agent
      let custom_user_agent =
        "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1";
      /*
      for (const header of details.requestHeaders) {
        if (header.name.toLowerCase() === "user-agent") {
          header.value =custom_user_agent
        }
      }
       */
      if (ua_index !== -1) {
        details.requestHeaders[ua_index]["value"] = custom_user_agent;
      }

      //请求头移除参数（例子: 删除携带的 cookie)
      /*
      //删除携带的cookie 方式一
      details.requestHeaders = details.requestHeaders.filter((header) => {
        if (header.name.toLowerCase() === "cookie") {
          return false;
        } else {
          return header;
        }
      });
       */
      //删除携带的cookie 方式二
      //参考文档： https://www.runoob.com/jsref/jsref-splice.html
      if (cookie_index !== -1) {
        details.requestHeaders.splice(cookie_index, 1);
      }
      //查看删除后结果
      //console.log(cookie_index, details.requestHeaders);
    }

    //请求头添加参数
    //(例子：请求添加额外参数)
    if (urlObj.host.indexOf("proxy.xiaoshuogeng.com") !== -1) {
      details.requestHeaders.push({
        name: "x-user-id",
        value: "8feed7c8-fe26-11ec-acc8-d34ecdbd4e54",
      });
      details.requestHeaders.push({
        name: "x-auth-token",
        value: "89b71a78-fe26-11ec-a410-9f2dc97caf21",
      });
      details.requestHeaders.push({
        name: "x-permissions-id",
        value: "b5c7d018-fe2a-11ec-9cc1-ab39db39504a",
      });
    }
    //console.log(details.requestHeaders)
    return { requestHeaders: details.requestHeaders };
  },
  {
    urls: [
      //"*://*.baidu.com/*", //例子 移除请求头携带的cookie和修改User-Agent
      //"*://*.proxy.xiaoshuogeng.com/*", // 高级玩法的测试用例
      "*://example-example.com/*",
    ],
  },
  ["blocking", "requestHeaders"]
  //["blocking", "requestHeaders", "extraHeaders"]
);

chrome.tabs.onRemoved.addListener(function (tabId) {
  tabinfo.delete(tabId);
});
