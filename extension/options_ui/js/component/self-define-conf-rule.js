import { id_ranges } from "./common.js";
import { showRuleList } from "./show-rule.js";
// 两种引入模块写法体验
let { rule_example } = await import("/options_ui/js/component/rule-example.js");

let add_self_define_rule = (type = "self_define_rule") => {
  let rule_str = document.querySelector(".new-add-rule-pannel").value;
  rule_str = rule_str.trim();
  console.log(rule_str);
  if (rule_str.length > 2) {
    let rules_arr = JSON.parse(rule_str);
    console.log("add rule origin content", rules_arr);

    let need_rules = [];
    let dynamic_id_index = 0;
    switch (type) {
      case "self_define_rule":
        dynamic_id_index = id_ranges[type][0];
        break;
      case "self_define_special_rule":
        dynamic_id_index = id_ranges[type][0];
        break;
      default:
        break;
    }

    chrome.declarativeNetRequest.getDynamicRules((rules) => {
      rules.forEach((value, index, array) => {
        if (
          type === "self_define_special_rule" ||
          type === "self_define_rule"
        ) {
          if (
            value.id >= id_ranges[type][0] &&
            value.id <= id_ranges[type][1]
          ) {
            if (value.id >= dynamic_id_index) {
              dynamic_id_index = value.id;
            }
          }
        }
      });

      console.log("dynamic_id_index:", dynamic_id_index);
      if (rules_arr.id) {
        rules_arr.id = ++dynamic_id_index;
        need_rules = [rules_arr];
      } else {
        if (rules_arr.length > 0 && rules_arr[0] && rules_arr[0].id) {
          rules_arr.forEach((value, key, array) => {
            if (value.id) {
              value.id = ++dynamic_id_index;
              need_rules.push(value);
            }
          });
        }
      }
      console.log(need_rules);
      if (need_rules) {
        chrome.declarativeNetRequest.updateDynamicRules(
          {
            addRules: need_rules,
            removeRuleIds: [],
          },
          (info) => {
            console.log(info);
            showRuleList();
          }
        );
      }
    });
  }
};
let self_define_conf = () => {
  document.querySelector(".add-rule").addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    add_self_define_rule("self_define_rule");
  });
  document
    .querySelector(".add-special-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      add_self_define_rule("self_define_special_rule");
    });
  document
    .querySelector(".add-rule-from-file")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      document.querySelector("#upload-file-to-rule").click();
    });

  document
    .querySelector("#upload-file-to-rule")
    .addEventListener("change", (event) => {
      const files = event.target.files;
      if (files && files[0]) {
        const file = files[0];
        console.log(file);
        let reader = new FileReader();
        reader.onload = function () {
          document.querySelector(".new-add-rule-pannel").value = this.result;
        };
        reader.readAsText(file);
      }
    });

  document
    .querySelector(".autofill-self-define-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      console.log(event.target.nodeType, event.target.nodeName);
      if (event.target.nodeName === "BUTTON") {
        let data_rule = event.target.getAttribute("data-rule");
        console.log(data_rule);
        if (rule_example[data_rule]) {
          fetch("/options_ui/rule_example/" + rule_example[data_rule])
            .then((response) => response.text())
            .then((response) => {
              document.querySelector(".new-add-rule-pannel").value = response;
            });
        }
      }
    });
};

export { self_define_conf };
