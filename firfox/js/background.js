chrome.webRequest.onBeforeRequest.addListener(
    function(request) {
        var url = request.url.replace('http://', 'https://')
        url = url.replace('googleapis.com', 'proxy.ustclug.org');
        url = url.replace('themes.googleusercontent.com', 'google-themes.lug.ustc.edu.cn');
        url = url.replace('www.google.com/recaptcha/','www.recaptcha.net/recaptcha/');
        url = url.replace('maxcdn.bootstrapcdn.com/bootstrap/','cdn.bootcdn.net/ajax/libs/twitter-bootstrap/');
        return {redirectUrl: url};
    },
    {
        urls: [
            "*://ajax.googleapis.com/*",
            "*://themes.googleusercontent.com/*",
            "*://maxcdn.bootstrapcdn.com/bootstrap/*"
        ]
    },
    ["blocking"]
);
