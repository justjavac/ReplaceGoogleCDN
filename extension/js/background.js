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

chrome.webRequest.onHeadersReceived.addListener(
  function (details) {
    tabinfo.set(details.tabId, hasCSP(details.responseHeaders));
  },
  {
    urls: ["<all_urls>"],
    types: ["main_frame"],
  },
  ["responseHeaders"]
);

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
      "maxcdn.bootstrapcdn.com/bootstrap/",
      "cdn.bootcdn.net/ajax/libs/twitter-bootstrap/"
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
      "*://maxcdn.bootstrapcdn.com/bootstrap/*",
    ],
  },
  ["blocking"]
);

chrome.tabs.onRemoved.addListener(function (tabId) {
  tabinfo.delete(tabId);
});
