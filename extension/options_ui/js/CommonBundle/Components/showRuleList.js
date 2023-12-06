import { updateDynamicRules, utils } from "./common.js";

import {
  showDynamicRules,
  bindDynamicRuleEventListener
} from "./showDynamicRules.js";
import {
  showStaticRules,
  bindStaticRuleEventListener
} from "./showStaticRules.js";

let timeoutHandler = null;

let bindButtonEventListener = () => {
  //备份单条规则
  document
    .querySelector(".back-new-rule-to-json")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      let rule_str = document.querySelector("#rule-content-container").value;
      rule_str = rule_str.trim();
      if (rule_str.length) {
        rule_str = JSON.parse(rule_str);
        let time = new Date().toISOString();
        console.log(time);
        //time=parseInt(new Date().getTime() / 1000).toString()
        if (rule_str) {
          utils.createJSONFile(
            rule_str,
            "ReplaceGoogleCDN-backup-rule-" + time + ".json"
          );
        }
      }
    });

  //更新单条规则
  document.querySelector(".update-rule").addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    let content_box = document.querySelector("#rule-content-container");
    let rule_str = content_box.value;
    let rule_type = content_box.getAttribute("rule-type");

    document.querySelector(".notice").innerText = "";
    if (rule_type === "dynamic") {
      let rule_id = content_box.getAttribute("rule-id");
      rule_str = rule_str.trim();
      if (rule_str.length) {
        let rule = JSON.parse(rule_str);
        /*
        let time = new Date().toISOString();
        console.log(time);
        time=parseInt(new Date().getTime() / 1000).toString()
         */
        if (rule) {
          rule_id = parseInt(rule_id);
          rule.id = rule_id;
          console.log(rule);
          let addRules = [rule],
            removeRuleIds = [rule_id];
          updateDynamicRules(addRules, removeRuleIds, () => {
            document.querySelector(".notice").innerText = "规则修改成功";
          });
        }
      }
    } else {
      document.querySelector(".notice").innerText = "静态规则不允许修改";
    }

    if (timeoutHandler) {
      clearTimeout(timeoutHandler);
    }
    timeoutHandler = setTimeout(() => {
      document.querySelector(".notice").innerText = "";
    }, 6000);
  });

  /*
   * 格式化 规则
   */
  document
    .querySelector(".format-rule-code")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      let content_box = document.querySelector("#rule-content-container");
      let content = content_box.value;
      if (content) {
        let button = document.querySelector(
          "#jsoneditor .jse-button.jse-format"
        );
        if (button) {
          button.click();
        }
      }
    });
};

let showRuleList = (type) => {
  //选项四：已启用规则列表：

  //显示静态规则
  showStaticRules();
  bindStaticRuleEventListener();

  //显示动态规则
  showDynamicRules(type);
  bindDynamicRuleEventListener();

  //选项四：已启用规则列表： 绑定按钮
  bindButtonEventListener();
};

export default showRuleList;
