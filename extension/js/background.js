chrome.runtime.onInstalled.addListener((details) => {});

chrome.action.onClicked.addListener((tab) => {
  //通过action 打开选项页
  //也可以打开指定网站，自动同步规则
  chrome.runtime.openOptionsPage((w) => {
    console.log(w);
  });
});
