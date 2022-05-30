async function getCurrentTab() {
    let queryOptions = {active: true, currentWindow: true};
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

// * chrome      - the global namespace for Chrome's extension APIs
// * runtime     – the namespace of the specific API we want to use
// * onInstalled - the event we want to subscribe to
// * addListener - what we want to do with this event

chrome.runtime.onInstalled.addListener(async () => {

    console.log("chrome.runtime.onInstalled do nothing ")
    console.log(chrome.runtime.OnInstalledReason)
    /*
    console.log(chrome.runtime.getURL("js/sw.js"))
    console.log(chrome.runtime.getURL("js/myscript.js"))
    console.log(chrome.runtime.getURL("js/tools/self-define-browser-editor.js"))
    console.log(chrome.runtime.getURL("js/tools/myscript-tools.js"))

    chrome.tabs.create({
        url: chrome.runtime.getURL("index.html")
    });
    */
});
chrome.runtime.onStartup.addListener(async()=>{
    /*
       const src = chrome.runtime.getURL("js/tools/tools.js");
        const {app}=await import(src);
        app();
        */
    /*
    chrome.scripting.executeScript(
        {
            target: {tabId: tab.tabId},
            files: ["js/tools/tools.js"]
        },
        (injectionResults = null) => {

        }
    )

     */
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {

    }
})

chrome.tabs.onCreated.addListener((tab) => {
    console.log("chrome.tab created  ")
    console.log(tab)


})
chrome.tabs.onActivated.addListener((activeInfo) => {
    console.log("chrome.tabs.onActivated do nothing ")
    console.log(activeInfo)

    //  注入JS 或者CSS 解决 PJAX 不可用问题等问题
    console.log(chrome.runtime.getURL("js/tools/myscript-tools.js"))
/*
    try {
        chrome.scripting.executeScript(
            {
                target: {tabId: activeInfo.tabId},
                files: ["js/myscript.js"]
            },
            (injectionResults = null) => {

            }
        )
        chrome.scripting.insertCSS(
            {
                target: {tabId: activeInfo.tabId},
                files: ["css/my.css"]
            },
            (injectionResults = null) => {

            }
        )
    } catch (error) {
        console.log(error)
    } finally {
        if (chrome.runtime.lastError) {
            message.innerText = 'There was an error : \n' + chrome.runtime.lastError.message;
        }
    }

    */
});


/*
接收消息
 */
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        /*
        console.log(sender)
        console.log(sender.tab)
        console.log(request)

         */
        console.log(request)
        let response={
            "msg":'no change',
            "code":500,
            "data":{}
        };

        {
            // 和服务器交付
            console.log(request)
            let url='https://control-plane.xiaoshuogeng.com/rule/list';
            console.log(url)
            fetch(url,{}).then(x=>console.log(x)).then(x=>console.log(x))
            response["msg"]="register and get rule list ok ";
            response["code"]=200;
        }
        sendResponse(response);
    }
);

chrome.action.onClicked.addListener(tab => {
    console.log(tag)
    document.querySelector(".goSetRule").addEventListener("click",()=>{
        let url=chrome.runtime.getURL("index.html")
        console.log(url)
        alert(url)
    })
});
