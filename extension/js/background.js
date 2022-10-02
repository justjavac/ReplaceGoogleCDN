chrome.runtime.onInstalled.addListener((details) => {});

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({ url: "https://www.jingjingxyk.com" });
  chrome.runtime.openOptionsPage((w) => {
    console.log(w);
  });
  /*
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content.js']
    });

     */
});
