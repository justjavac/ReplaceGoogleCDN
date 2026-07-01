chrome.runtime.onInstalled.addListener(async (details) => {});

chrome.action.onClicked.addListener((tab) => {
  //通过action 打开选项页
  //也可以打开指定网站，自动同步规则

  // 注释的原因：减少误打开选项页
  // 默认候选项切换已完成，现在可以打开了
  if (!chrome.runtime.getManifest().options_ui) {
    return;
  }
  chrome.runtime.openOptionsPage((w) => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
      return;
    }

    console.log(w);
  });
});
