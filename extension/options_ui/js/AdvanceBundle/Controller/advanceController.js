import GlobalDynamicRuleMain from "../Components/globalDynamicRuleMain.js";
import editor from "../../CommonBundle/Components/editor.js";

import SyncRemoteRules from "../Components/syncRemoteRules.js";
import SelfDefineRule from "../Components/selfDefineRule.js";

import showRuleList from "../../CommonBundle/Components/showRuleList.js";

let messageReciver = () => {
  window.addEventListener(
    "message",
    (event) => {
      console.log(event, event.source);
      event.source.postMessage("hi there yourself!  the secret response ", "*");
      //event.source.postMessage("hi there yourself!  the secret response ",event.origin);
      //event.source.postMessage("hi there yourself!  the secret response ",location.origin+iframe_src);
      console.log(event.data);
      if (event.origin === "null") {
        let data = JSON.parse(event.data);
        console.log(data);

        if (data.url) {
          let url = data.url;
          chrome.tabs.create({ url }, (callback) => {
            console.log(callback);
          });
        }
      }
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
