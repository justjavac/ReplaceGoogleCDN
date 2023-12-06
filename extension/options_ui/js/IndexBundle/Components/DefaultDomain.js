import { defaultDomains } from "../Config/defaultDomains.js";
import { updateDynamicRules } from "../../CommonBundle/Components/common.js";
import { showDynamicRules } from "../../CommonBundle/Components/showDynamicRules.js";

let defaultDomainList = document.querySelector(".default-redirect-domains");
let defaultDomainOptions = document.querySelector(
  ".default-redirect-domians-options",
);
let showDefaultDomainList = () => {
  let list = "";
  for (let i in defaultDomains) {
    //console.log(i, defaultDomains[i]);
    list += `<li data-id="${defaultDomains[i].id}" data-domain="${defaultDomains[i].domain}">编号：${defaultDomains[i].id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${i}</li>`;
  }
  defaultDomainList.innerHTML = list;
};

let bindDefaultDomainListEventListener = () => {
  defaultDomainList.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.target.nodeName === "LI") {
      let id = event.target.getAttribute("data-id");
      let domain = event.target.getAttribute("data-domain");
      let url = chrome.runtime.getURL("/rules/mirrors/" + domain + ".json");
      defaultDomainOptions.innerHTML =
        "<option selected='selected' value='0'>请选择</option>";

      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          for (let i in response) {
            console.log(response[i]);
            let option = document.createElement("option");
            option.text =
              "规则候选项" +
              response[i]["id"] +
              ": " +
              JSON.stringify(response[i]["action"]["redirect"]);
            option.value = response[i]["id"];
            option.setAttribute("data-rule-info", JSON.stringify(response[i]));
            defaultDomainOptions.add(option);
          }
          defaultDomainOptions.setAttribute("data-id", id);
        });
    }
  });
};

let bindSetDefaultDomainOptionEventListener = () => {
  defaultDomainOptions.addEventListener("change", (event) => {
    //console.log(event.target);
    //console.log(event.target.selectedIndex);
    let value = event.target.options[event.target.selectedIndex].value;
    //console.log(value);
    if (event.target.selectedIndex === 0 || parseInt(value) === 0) {
      return;
    }

    //console.log(event.target.options[event.target.selectedIndex]);

    let rule_info =
      event.target.options[event.target.selectedIndex].getAttribute(
        "data-rule-info",
      );
    let rule = JSON.parse(rule_info);

    let rule_id = parseInt(event.target.getAttribute("data-id"));

    rule["id"] = rule_id;
    rule["priority"] = 2;
    //特殊定制规则ID=9999
    if (rule_id === 9999) {
      rule["priority"] = 9999;
    }
    console.log(rule, rule_id);
    //updateDynamicRules(rule, rule_id,showRuleList("single_rule"))
    let addRules = [rule];
    let removeRuleIds = [rule_id];
    updateDynamicRules(addRules, removeRuleIds, () => {
      showDynamicRules("single_rule");
    });
  });
};

let bindResetDefaultDomanOptions = () => {
  document
    .querySelector(".reset_default_domain")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      let addRules = [];
      let removeRuleIds = [
        9999, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
      ];
      updateDynamicRules(addRules, removeRuleIds, () => {
        location.reload();
      });
    });
};

export default () => {
  showDefaultDomainList();
  bindDefaultDomainListEventListener();
  bindSetDefaultDomainOptionEventListener();
  bindResetDefaultDomanOptions();
};
