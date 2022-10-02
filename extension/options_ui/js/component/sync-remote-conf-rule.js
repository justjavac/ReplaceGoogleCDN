import {
  fetchAll,
  getContent,
} from "/third_party/jingjingxyk/frontend-utils/utils.js";
import { deleteDynamicRules } from "./common.js";
import { showRuleList } from "./show-rule.js";

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
          console.log(value);
          new_rules_urls.push(value);
        }
      });
      console.log(new_rules_urls);
      if (!new_rules_urls) {
        return;
      }
      let result = await fetchAll(new_rules_urls, getContent);
      console.log(result);
      if (result.length > 1) {
        deleteDynamicRules("remote_server_rule");

        let dynamic_id_index = parseInt(new Date().getTime() / 1000);
        let need_rules = [];
        result.forEach((rules) => {
          rules.forEach((rule, index, array) => {
            console.log(rule);
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
      }
    });

  document
    .querySelector(".delete-sync-remote-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      deleteDynamicRules("remote_server_rule");
    });
  document
    .querySelector(".autofill-default-remote-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      document.querySelector(".remote-rule-urls").value = `
            
https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/auth.json?raw=true
https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/rules_advance_redirect_1.json?raw=true
https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/rules_advance_redirect_2.json?raw=true
https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/rules_block_request.json?raw=true
https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/rules_redirect_extra.json?raw=true
https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/rules_remove_content_security_policy_header.json?raw=true

                `;
      let iframe = `
                <iframe src="/sandbox/index.html" id="external_page" width="100%"></iframe>
            `;
      document.querySelector(".external-page-box").innerHTML = iframe;
    });
};
export { sync_remote_conf };
