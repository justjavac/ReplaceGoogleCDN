chrome.runtime.onInstalled.addListener((details) => {});

chrome.action.onClicked.addListener((tab) => {
  //通过action 打开选项页
  chrome.runtime.openOptionsPage((w) => {
    console.log(w);
  });
});
