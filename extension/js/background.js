/*
browser.runtime.onInstalled.addListener(async ({ reason, temporary }) => {
  if (temporary) return; // skip during development
  switch (reason) {
    case "install":
    {
      const url = browser.runtime.getURL("views/installed.html");
      await browser.tabs.create({ url });
      // or: await browser.windows.create({ url, type: "popup", height: 600, width: 600, });
    }
      break;
      // see below
  }
});
*/


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
