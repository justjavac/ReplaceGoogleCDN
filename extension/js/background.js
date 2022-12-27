chrome.runtime.onInstalled.addListener((details) => {});

chrome.action.onClicked.addListener((tab) => {
  //通过action 打开选项页
  //也可以打开指定网站，自动同步规则

  // 注释的原因：减少误打开选项页
  // 默认侯选项切换已完成，现在可以打开了
  chrome.runtime.openOptionsPage((w) => {
    console.log(w);
  });
});
