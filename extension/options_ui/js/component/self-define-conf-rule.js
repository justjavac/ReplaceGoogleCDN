import { deleteDynamicRules } from "./common.js";
import { showRuleList } from "./show-rule.js";
// 两种引入模块写法体验
let { rule_example } = await import("/options_ui/js/component/rule-example.js");

let self_define_conf = () => {
  document.querySelector(".add-rule").addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    let rule_str = document.querySelector(".new-add-rule-pannel").value;
    rule_str = rule_str.trim();
    if (rule_str.length) {
      rule_str = JSON.parse(rule_str);
      if (rule_str) {
        let need_rules = [];
        let dynamic_id_index = 10000;
        chrome.declarativeNetRequest.getDynamicRules((rules) => {
          rules.forEach((value, index, array) => {
            if (value.id >= 10000 && value.id <= 100000) {
              if (value.id > dynamic_id_index) {
                dynamic_id_index = value.id;
              }
            }
          });
          if (rule_str.id) {
            rule_str.id = ++dynamic_id_index;
            need_rules = [rule_str];
          } else {
            rule_str.forEach((value, key, array) => {
              if (value.id) {
                value.id = ++dynamic_id_index;
                need_rules.push(value);
              }
            });
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
    }
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
    .querySelector(".delete-self-define-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      deleteDynamicRules("self_define_rule");
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
