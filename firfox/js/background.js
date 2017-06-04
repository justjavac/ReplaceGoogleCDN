var block = {
    ajax: {
        slow: "ajax.googleapis.com",
        good: "ajax.proxy.ustclug.org"
    },
    themes: {
        slow: "themes.googleusercontent.com",
        good: "google-themes.proxy.ustclug.org"
    }
};

var filter = function() {
    var result = [];
    for (var i in block) {
        result.push("*://" + block[i].slow + "/*");
    }
    return {
        urls: result
    }
};
chrome.webRequest.onBeforeRequest.addListener(function(request) {
    for (var i in block) {
        if (request.url.match(block[i].slow)) {
            //console.log("slow: " + block[i].slow + "\ngood: " + block[i].good);
            return {
                redirectUrl: request.url.replace(block[i].slow, block[i].good)
            }
        }
    }
}, filter(), ["blocking"]);
