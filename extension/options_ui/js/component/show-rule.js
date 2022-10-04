import { deleteDynamicRules, id_ranges, utils } from "./common.js";

/**
 * 规则名称 与 规则文件目录映射
 */

let rules = {
  ruleset_redirect_main: "/rules/rules_redirect_main.json",
  ruleset_redirect_main_extra: "/rules/rules_redirect_main_extra.json",
  ruleset_remove_content_security_policy_header:
    "/rules/rules_remove_content_security_policy_header.json",
};

let showRuleJSON = (rule) => {
  let file = rules[rule] ? rules[rule] : "";
  if (file) {
    let url = chrome.runtime.getURL(file);
    fetch(url)
      .then((x) => x.json())
      .then((x) => {
        console.log(JSON.stringify(x));
        document.querySelector("#rule-content-container").value =
          JSON.stringify(x);
      });
  } else {
    console.log("rule:" + rule + "no found!");
  }
};

let showRuleList = () => {
  chrome.declarativeNetRequest.getDynamicRules((rules) => {
    //console.log(rules);
    let list_box = document.querySelector(".rule_dynamic_set_list");
    let list = "";
    rules.forEach((value, key, array) => {
      //console.log(value.id, value);
      list += `<li data-rule-id="${value.id}" data-origin="${encodeURIComponent(
        JSON.stringify(value)
      )}">${value.id}<span class="del-flag" data-rule-id="${
        value.id
      }" >&nbsp;&nbsp;&nbsp;&nbsp;✖︎</span></li>`;
    });
    list_box.innerHTML = list;
  });

  chrome.declarativeNetRequest.getEnabledRulesets((rulesetIds) => {
    console.log(rulesetIds);
    /*
      let mainifest=chrome.runtime.getManifest()
      console.log(mainifest.declarative_net_request.rule_resources)
     */
    let list_box = document.querySelector(".rule_static_set_list");
    let list = "";
    rulesetIds.map((value, index) => {
      list += `<li data-rule-id="${value}">${value}</li>`;
    });
    list_box.innerHTML = list;
  });

  document
    .querySelector(".rule_static_set_list")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      //console.log(event.target);
      //console.log(event.target.nodeType);
      //console.log(event.target.nodeName);
      if (event.target.nodeName === "LI") {
        showRuleJSON(event.target.getAttribute("data-rule-id"));
      }
    });

  document
    .querySelector(".rule_dynamic_set_list")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      //console.log(event.target);
      //console.log(event.target.nodeType);
      console.log(event.target.nodeName);
      if (event.target.nodeName === "LI") {
        console.log(
          decodeURIComponent(event.target.getAttribute("data-origin"))
        );
        document.querySelector("#rule-content-container").value =
          decodeURIComponent(event.target.getAttribute("data-origin"));
      }
      if (event.target.nodeName === "SPAN") {
        deleteDynamicRules(
          "single_rule",
          event.target.getAttribute("data-rule-id")
        );
        event.target.parentNode.remove();
      }
    });

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
};

export { showRuleList };
