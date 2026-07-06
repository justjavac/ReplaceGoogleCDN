import GlobalDynamicRuleMain from "../Components/globalDynamicRuleMain.js";
import editor from "../../CommonBundle/Components/editor.js";

import SyncRemoteRules from "../Components/syncRemoteRules.js";
import SelfDefineRule from "../Components/selfDefineRule.js";

import showRuleList from "../../CommonBundle/Components/showRuleList.js";

let getSandboxWindow = () => {
  let iframe = document.querySelector("#external_page");
  return iframe ? iframe.contentWindow : null;
};

let parseSandboxMessage = (message) => {
  if (typeof message !== "string") {
    return null;
  }

  try {
    return JSON.parse(message);
  } catch (error) {
    console.error("Invalid sandbox message", error);
    return null;
  }
};

let isOpenableSandboxUrl = (url) => {
  try {
    let parsedUrl = new URL(url);
    return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
  } catch (error) {
    console.error("Invalid sandbox url", error);
    return false;
  }
};

let messageReciver = () => {
  window.addEventListener(
    "message",
    (event) => {
      if (event.origin !== "null" || event.source !== getSandboxWindow()) {
        return;
      }

      let data = parseSandboxMessage(event.data);
      if (!data || !data.url || !isOpenableSandboxUrl(data.url)) {
        return;
      }

      chrome.tabs.create({ url: data.url }, (callback) => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
          return;
        }

        console.log(callback);
      });
    },
    false
  );
};

export default () => {
  //选项一：全局动态规则处理
  GlobalDynamicRuleMain();
  //选项二：同步远端配置规则
  SyncRemoteRules();
  //选项三：自定义规则 （普通规则和特制规则）
  SelfDefineRule();

  showRuleList();
  editor.init();

  //接收 sanbox 发过来的消息
  messageReciver();
};
