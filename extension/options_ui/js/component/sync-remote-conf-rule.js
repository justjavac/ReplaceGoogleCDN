import { id_ranges, utils } from "./common.js";
import { showRuleList } from "./show-rule.js";
import { rule_example_urls } from "./rule-example.js";

let sync_remote_conf = () => {
  document
    .querySelector(".goto-sync-remote-rule")
    .addEventListener("click", async (event) => {
      event.stopPropagation();
      event.preventDefault();
      let rule_server_urls = document
        .querySelector(".remote-rule-urls")
        .value.trim();
      let rules_urls = rule_server_urls.split("\n");
      let new_rules_urls = [];
      rules_urls.forEach((value, index, array) => {
        value = value.trim();
        value = value.replace(/^\s|\s$|'|,|，|。|"/g, "");
        if (value.length > 1) {
          new_rules_urls.push(value);
        }
      });
      console.log(new_rules_urls);
      if (!new_rules_urls) {
        return;
      }
      let result = await utils.fetchAll(new_rules_urls, utils.getContent);
      console.log(result);
      if (result.length > 0) {
        //let dynamic_id_index = parseInt(new Date().getTime() / 1000);
        let dynamic_id_index = id_ranges["sync_remote_rule"][0];
        let need_rules = [];
        chrome.declarativeNetRequest.getDynamicRules((rules) => {
          rules.forEach((value, index, array) => {
            if (
              value.id >= id_ranges["sync_remote_rule"][0] &&
              value.id <= id_ranges["sync_remote_rule"][1]
            ) {
              if (value.id >= dynamic_id_index) {
                dynamic_id_index = value.id;
              }
            }
          });
          console.log("dynamic_id_index:", dynamic_id_index);
          result.forEach((rules) => {
            rules.forEach((rule, index, array) => {
              rule.id = ++dynamic_id_index;
              console.log(rule);
              need_rules.push(rule);
            });
          });
          console.log(need_rules);
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
        });
      }
    });

  document
    .querySelector(".autofill-default-remote-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      document.querySelector(".remote-rule-urls").value =
        rule_example_urls.trim();
      let iframe = `
                <iframe src="/sandbox/index.html" id="external_page" width="100%"></iframe>
            `;
      document.querySelector(".external-page-box").innerHTML = iframe;
    });
};
export { sync_remote_conf };
