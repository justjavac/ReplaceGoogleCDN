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


chrome.runtime.onInstalled.addListener(async (details) => {
    /*
      cosnole.log(details)
      switch (details) {
        case "install":
        {
          let permissions = {
            "origins": ['<all_urls>'],  //匹配模式  https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns
            "permissions":[  //权限 https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/permissions/Permissions
                "declarativeNetRequest" ,
                "declarativeNetRequestFeedback" ,
                "declarativeNetRequestWithHostAccess"
            ]
          }
          let requesting = await browser.permissions.request(permissions)
          console.log(requesting)
        }
          break;
          // see below
      }

     */
});

chrome.action.onClicked.addListener((tab) => {
    //通过action 打开选项页
    //也可以打开指定网站，自动同步规则

    // 注释的原因：减少误打开选项页
    // 默认侯选项切换已完成，现在可以打开了
    chrome.runtime.openOptionsPage((w) => {
        console.log(w);
    });
});
