import {
  deleteDynamicRules,
  backupDynamicRules,
  utils,
  enableStaticRules,
  id_ranges,
} from "./common.js";
import { remote_repository_static_urls } from "./rule-example.js";
import { showRuleList } from "./show-rule.js";
let main = () => {
  document
    .querySelector(".backup-all-dynamic-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      backupDynamicRules();
    });
  document
    .querySelector(".enable-static-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      enableStaticRules();
    });

  document
    .querySelector(".goto-sync-remote-repository-static-rule")
    .addEventListener("click", async (event) => {
      event.stopPropagation();
      event.preventDefault();
      let latest_manifest = await get_remote_repository_static_rule();
      //console.log(latest_manifest.declarative_net_request)
      let declarative_net_request =
        latest_manifest.declarative_net_request.rule_resources;

      let new_rules_urls = [];
      let url = remote_repository_static_urls.mainfiest_url_base;
      declarative_net_request.forEach((value) => {
        if (value.enabled === true) {
          new_rules_urls.push(url + value.path + "?raw=true");
        }
      });

      console.log(new_rules_urls);
      if (!new_rules_urls) {
        return;
      }
      let result = await utils.fetchAll(new_rules_urls, utils.getContent);

      if (result.length > 1) {
        //let dynamic_id_index = parseInt(new Date().getTime() / 1000);
        let dynamic_id_index = id_ranges["sync_remote_static_rule"][0];
        let need_rules = [];
        let need_delete_rules = [];
        chrome.declarativeNetRequest.getDynamicRules((rules) => {
          rules.forEach((value, index, array) => {
            if (
              value.id >= id_ranges["sync_remote_static_rule"][0] &&
              value.id <= id_ranges["sync_remote_static_rule"][1]
            ) {
              console.log(value);
              need_delete_rules.push(value.id);
              if (value.id >= dynamic_id_index) {
                dynamic_id_index = value.id;
              }
            }
          });
          console.log("dynamic_id_index:", dynamic_id_index);
          result.forEach((rules) => {
            rules.forEach((rule, index, array) => {
              rule.id = ++dynamic_id_index;
              rule.priority = 3;
              console.log(rule);
              need_rules.push(rule);
            });
          });
          chrome.declarativeNetRequest.updateDynamicRules(
            {
              addRules: need_rules,
              removeRuleIds: need_delete_rules,
            },
            (info) => {
              console.log(info);
            }
          );

          let local_manifest = chrome.runtime.getManifest();
          console.log(local_manifest);
          let local_declarative_net_request =
            local_manifest.declarative_net_request.rule_resources;

          let UpdateRulesetOptions = {
            disableRulesetIds: [],
            enableRulesetIds: [],
          };
          local_declarative_net_request.forEach((value) => {
            console.log(value);
            if (value.enabled === true) {
              console.log(value);
              UpdateRulesetOptions.disableRulesetIds.push(value.id);
            }
          });

          chrome.declarativeNetRequest.updateEnabledRulesets(
            UpdateRulesetOptions,
            (callback) => {
              console.log(callback);
              showRuleList();
            }
          );
        });
      }
    });

  document
    .querySelector(".delete-all-dynamic-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      deleteDynamicRules("all_dynamic_rule");
    });

  document
    .querySelector(".delete-sync-remote-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      deleteDynamicRules("sync_remote_rule");
    });

  document
    .querySelector(".delete-self-define-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      deleteDynamicRules("self_define_rule");
    });

  document
    .querySelector(".delete-self-define-special-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      deleteDynamicRules("self_define_special_rule");
    });

  document
    .querySelector(".example-show-controller")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      let button = event.target;
      let show_state = button.getAttribute("data-state");
      let example_group = document.querySelectorAll(".example-item");
      if (show_state === "hidden-example") {
        button.innerText = "隐藏演示例子";
        button.setAttribute("data-state", "show-example");
        example_group.forEach((value) => {
          utils.removeClass(value, "example-hidden");
        });
      } else {
        button.innerText = "显示演示例子";
        button.setAttribute("data-state", "hidden-example");
        example_group.forEach((value) => {
          utils.addClass(value, "example-hidden");
        });
      }
    });
};

let get_remote_repository_static_rule = async () => {
  let url = remote_repository_static_urls.manifest_url;
  let response = await fetch(url);
  return await response.json();
};

export { main };
