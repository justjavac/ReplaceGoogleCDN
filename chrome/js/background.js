/**
 * @type {Map<string, boolean>}
 */
const tabinfo = new Map();

/**
 * 扫描响应头，是否含有 Content-Security-Policy
 * @param {object[]} headers
 * @returns {boolen}
 */
function hasCSP(headers) {
    return headers.some(x => x.name.toLowerCase() === 'content-security-policy')
};

chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
        tabinfo.set(details.tabId, hasCSP(details.responseHeaders))
    },
    {
        urls: ['<all_urls>'],
        types: ['main_frame'],
    },
    ['responseHeaders']
);

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        if (tabinfo.get(details.tabId)) {
            return details.url;
        }
        let url = details.url.replace('http://', 'https://')
        url = url.replace('ajax.googleapis.com', 'ajax.loli.net');
        url = url.replace('fonts.googleapis.com', 'fonts.loli.net');
        url = url.replace('themes.googleusercontent.com', 'themes.loli.net');
        url = url.replace('fonts.gstatic.com', 'gstatic.loli.net');
        url = url.replace('www.google.com/recaptcha/', 'www.recaptcha.net/recaptcha/');
        url = url.replace('secure.gravatar.com', 'gravatar.loli.net');
        url = url.replace('maxcdn.bootstrapcdn.com/bootstrap/','cdn.bootcdn.net/ajax/libs/twitter-bootstrap/');
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
        ]
    },
    ["blocking"]
);

chrome.tabs.onRemoved.addListener(function (tabId) {
    tabinfo.delete(tabId);
});
