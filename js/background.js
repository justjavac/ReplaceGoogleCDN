chrome.webRequest.onBeforeRequest.addListener(
    function(request) {
        var url = request.url.replace('googleapis', 'useso');
        return {redirectUrl: url};
    },
    {
        urls: [
            "*://ajax.googleapis.com/*",
            "*://fonts.googleapis.com/*"
        ]
    },
    ["blocking"]
);
