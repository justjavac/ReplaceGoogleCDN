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

/**
 * 移除 Content-Security-Policy
 */

chrome.webRequest.onHeadersReceived.addListener(
  (details) => {
    //移除响应头 Content-Security-Policy
    details.responseHeaders = details.responseHeaders.filter(
      (response_header) =>
        !remove_csp_item.includes(response_header.name.toLowerCase())
    );
    return {
      responseHeaders: details.responseHeaders,
    };
  },
  {
    //    urls: ["<all_urls>"],
    urls: [
      ...remove_csp_urls, //需要移除 Content-Security-Policy 的URL地址
    ],
    types: [
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
    ],
  },
  ["blocking", "responseHeaders"]
);

/*
  请求地址重定向
  1. https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
*/
chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
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
    ],
  },
  ["blocking"]
);
