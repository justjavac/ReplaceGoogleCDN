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
let isRuleListEventBound = false;

let showNotice = (message) => {
  document.querySelector(".notice").innerText = message;
};

let clearNoticeLater = () => {
  if (timeoutHandler) {
    clearTimeout(timeoutHandler);
  }

  timeoutHandler = setTimeout(() => {
    showNotice("");
  }, 6000);
};

let parseRuleJSON = (rule_str) => {
  try {
    return JSON.parse(rule_str);
  } catch (error) {
    console.error("Invalid rule JSON", error);
    showNotice("规则 JSON 格式错误：" + error.message);
    clearNoticeLater();
    return undefined;
  }
};

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
        rule_str = parseRuleJSON(rule_str);
        if (rule_str === undefined) {
          return;
        }

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

    showNotice("");
    if (rule_type === "dynamic") {
      let rule_id = content_box.getAttribute("rule-id");
      rule_str = rule_str.trim();
      if (rule_str.length) {
        let rule = parseRuleJSON(rule_str);
        if (rule === undefined) {
          return;
        }

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
            showNotice("规则修改成功");
          });
        }
      }
    } else {
      showNotice("静态规则不允许修改");
    }

    clearNoticeLater();
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

  //显示动态规则
  showDynamicRules(type);

  if (!isRuleListEventBound) {
    bindStaticRuleEventListener();
    bindDynamicRuleEventListener();

    //选项四：已启用规则列表： 绑定按钮
    bindButtonEventListener();
    isRuleListEventBound = true;
  }
};

export default showRuleList;
