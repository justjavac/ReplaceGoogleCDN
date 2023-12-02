import {
  deleteDynamicRules,
  id_ranges,
  id_range_name_map,
  rule_action_type_map,
} from "./common.js";

let getRuleRangeType = (rule_id) => {
  rule_id = parseInt(rule_id);
  let rule_id_range_type = "";
  for (rule_id_range_type in id_ranges) {
    if (
      id_ranges[rule_id_range_type][0] <= rule_id &&
      rule_id <= id_ranges[rule_id_range_type][1]
    ) {
      break;
    }
  }
  //console.log(id,id_range_type, id_ranges[id_range_type]);
  return rule_id_range_type;
};

let showDynamicRules = (type = "all_dynamic_rule") => {
  let dynamic_rule_list_box = document.querySelector(".rule_dynamic_set_list");
  chrome.declarativeNetRequest.getDynamicRules((rules) => {
    //console.log(rules);
    let list = "";
    rules.forEach((value, key, array) => {
      //console.log(value.id, value);
      let rule_id_range_type = getRuleRangeType(value.id);
      //console.log(value.id, rule_id_range_type, type);
      //显示指定区间的数据

      if (type !== "all_dynamic_rule" && type !== rule_id_range_type) {
        return;
      }
      let show_rule_id_range_name = id_range_name_map[rule_id_range_type];
      let rule_action_name = rule_action_type_map[value.action.type];
      list += `<li class="${rule_id_range_type}" data-rule-id="${
        value.id
      }" data-origin="${encodeURIComponent(
        JSON.stringify(value),
      )}" title="规则来源：${show_rule_id_range_name}">规则来源：${show_rule_id_range_name}；编号为:&nbsp;&nbsp;${
        value.id
      }&nbsp;&nbsp;；规则作用：${rule_action_name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="del-flag" data-rule-id="${
        value.id
      }" title="删除本条规则">&nbsp;&nbsp;&nbsp;&nbsp;❌</span></li>`;
    });
    dynamic_rule_list_box.innerHTML = list;
  });
};

let bindDynamicRuleEventListener = () => {
  document
    .querySelector(".rule_dynamic_set_list")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      //console.log(event.target);
      //console.log(event.target.nodeType);
      //console.log(event.target.nodeName);
      if (event.target.nodeName === "LI") {
        let content_box = document.querySelector("#rule-content-container");
        let content = decodeURIComponent(
          event.target.getAttribute("data-origin"),
        );
        //console.log(content);

        editor.set({
          json: JSON.parse(content),
          text: undefined,
        });
        content_box.value = decodeURIComponent(
          event.target.getAttribute("data-origin"),
        );
        content_box.setAttribute("rule-type", "dynamic");
        content_box.setAttribute(
          "rule-id",
          event.target.getAttribute("data-rule-id"),
        );
      }
      if (event.target.nodeName === "SPAN") {
        event.target.parentNode.remove();
        deleteDynamicRules(
          "single_rule",
          event.target.getAttribute("data-rule-id"),
        );
      }
    });
};
export { showDynamicRules, bindDynamicRuleEventListener };
