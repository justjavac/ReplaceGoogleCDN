chrome.runtime.onInstalled.addListener((details) => {});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        /*
        console.log(sender)
        console.log(sender.tab)
        console.log(request)

         */
        console.log(request)
        let namespace = request["namespace"] ? request["namespace"] : null;
        let extension_id=chrome.runtime.id
        let response = {
            "msg": 'ok',
            "code": 200,
            "data": {
                "extenions_id" : chrome.runtime.id
            }
        }
        sendResponse(response);
    }
)

chrome.runtime.onMessageExternal.addListener(
    function (request, sender, sendResponse) {
        let namespace = request["namespace"] ? request["namespace"] : null;
        let action = request["action"] ? request["action"] : '';
        let content = request["content"] ? request["content"] : '';
        console.log(namespace,action,content)
        let response = {
            "msg": 'received external message',
            "code": 200,
            "data": []
        };
        sendResponse(response)
    }
)
