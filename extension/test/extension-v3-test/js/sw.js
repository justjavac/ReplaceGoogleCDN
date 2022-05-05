async function getCurrentTab() {
    let queryOptions = {active: true, currentWindow: true};
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

function handleStartup() {
    browser.tabs.create({
        url: "https://giphy.com/explore/cat"
    });
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
    */

});
chrome.runtime.onStartup.addListener(handleStartup);
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {

    }
})

chrome.tabs.onCreated.addListener((tab) => {
    console.log(tab)
})
chrome.tabs.onActivated.addListener((activeInfo) => {
    console.log("chrome.tabs.onActivated do nothing ")
    console.log(activeInfo)

    //  注入JS 或者CSS 解决 PJAX 不可用问题等问题
    console.log(chrome.runtime.getURL("js/tools/myscript-tools.js"))

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


});