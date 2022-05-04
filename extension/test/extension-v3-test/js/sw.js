
// * chrome      - the global namespace for Chrome's extension APIs
// * runtime     – the namespace of the specific API we want to use
// * onInstalled - the event we want to subscribe to
// * addListener - what we want to do with this event

chrome.runtime.onInstalled.addListener(async () => {
    console.log( "onInstalled do nothing ")
    console.log(chrome.runtime.getURL("js/sw.js"))
    console.log(chrome.runtime.getURL("js/myscript.js"))
    console.log(chrome.runtime.getURL("js/tools/self-define-browser-editor.js"))
    console.log(chrome.runtime.getURL("js/tools/myscript-tools.js"))

});

chrome.tabs.onUpdated.addListener( (tabId, changeInfo, tab) => {
    console.log( "oonUpdated do nothing ")

    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {

        //  注入JS 或者CSS 解决 PJAX 不可用问题等问题
        console.log(tab.url)
        try{
            chrome.scripting.executeScript(
                                {
                                    target: {tabId: tabId},
                                    files: ["js/myscript.js"]
                                },
                                (injectionResults=null) => {

                                }
                            )
            chrome.scripting.insertCSS(
                                {
                                    target: {tabId: tabId},
                                    files: ["css/my.css"]
                                },
                                (injectionResults=null) => {

                                }
                            )
        }catch(error){
            console.log(error)
        }finally {
            if (chrome.runtime.lastError) {
                message.innerText = 'There was an error : \n' + chrome.runtime.lastError.message;
            }
        }
    }

});