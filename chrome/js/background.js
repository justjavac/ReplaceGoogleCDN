chrome.webRequest.onBeforeRequest.addListener(
    function(request) {
        var url = request.url.replace('googleapis.com', 'lug.ustc.edu.cn');
        url = url.replace('themes.googleusercontent.com', 'google-themes.lug.ustc.edu.cn');
        return {redirectUrl: url};
    },
    {
        urls: [
            "*://ajax.googleapis.com/*",
            "*://themes.googleusercontent.com/*"
        ]
    },
    ["blocking"]
);
