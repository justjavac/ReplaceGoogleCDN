import {
  deleteDynamicRules,
  updateDynamicRules,
  backupAllDynamicRules,
  utils,
  enableStaticRules,
  id_ranges,
} from "../../CommonBundle/Components/common.js";
import { remote_repository_static_urls } from "../Config/rule_example_conf.js";
import showRuleList from "../../CommonBundle/Components/showRuleList.js";
import { showDynamicRules } from "../../CommonBundle/Components/showDynamicRules.js";

//备份所有动态规则
let bindBackupAllDynamicRuleEventListener = () => {
  document
    .querySelector(".backup-all-dynamic-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      backupAllDynamicRules();
    });
};

//同步主仓库静态规则到本地，并停用本地静态规则，实现规则与主仓库保持一致
let bindSyncRemoteStaticRuleEventListener = () => {
  document
    .querySelector(".goto-sync-remote-repository-static-rule")
    .addEventListener("click", async (event) => {
      event.stopPropagation();
      event.preventDefault();
      //获得远端主仓库规则集
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
              //console.log(value);
              need_delete_rules.push(value.id);
            }
          });

          console.log("dynamic_id_index:", dynamic_id_index);
          result.forEach((rules) => {
            rules.forEach((rule, index, array) => {
              rule.id = dynamic_id_index++;
              rule.priority = 300;
              console.log(rule);
              need_rules.push(rule);
            });
          });
          updateDynamicRules(need_rules, need_delete_rules);

          //停用本地静态规则
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
              showRuleList();
            }
          );
        });
      }
    });
};

//启用本地静态规则
let bindEnableDefaultStaticRuleEventListener = () => {
  document
    .querySelector(".enable-static-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      enableStaticRules(showRuleList);
    });
};

//删除所有动态规则
let bindDeleteAllDynamicRuleEventListener = () => {
  document
    .querySelector(".delete-all-dynamic-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      deleteDynamicRules("all_dynamic_rule", 0, () => {
        showRuleList();
      });
    });
};

//删除来自远端同步的所有规则
let bindDeleteSyncRemoteDynamicRuleEventListener = () => {
  document
    .querySelector(".delete-sync-remote-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      deleteDynamicRules("sync_remote_rule", 0, () => {
        showDynamicRules();
      });
    });
};

//删除自定义普通规则
let bindDeleteSelfDefinedDynamicRuleEventListener = () => {
  document
    .querySelector(".delete-self-define-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      deleteDynamicRules("self_define_rule", 0, () => {
        showDynamicRules();
      });
    });
};

//删除自定义特制规则
let bindDeleteSelfSpecialDefinedDynamicRuleEventListener = () => {
  document
    .querySelector(".delete-self-define-special-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      deleteDynamicRules("self_define_special_rule", 0, () => {
        showDynamicRules();
      });
    });
};

//展示演示例子
let bindShowExampleControllerEventListener = () => {
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

export default () => {
  //备份所有动态规则
  bindBackupAllDynamicRuleEventListener();
  //删除所有动态规则
  bindDeleteAllDynamicRuleEventListener();

  //同步远端仓库最新静态规则到本地，并停用本地默认静态规则，实现不更新扩展，保持规则与主仓库一致
  bindSyncRemoteStaticRuleEventListener();
  //启用本地默认静态规则，取消同步远端仓库最新静态规则到本地
  bindEnableDefaultStaticRuleEventListener();

  //删除  选项二：同步远端配置规则
  bindDeleteSyncRemoteDynamicRuleEventListener();

  //删除  选项三：自定义普通规则
  bindDeleteSelfDefinedDynamicRuleEventListener();
  //删除  选项三：自定义特制规则
  bindDeleteSelfSpecialDefinedDynamicRuleEventListener();

  //显示演示例子
  bindShowExampleControllerEventListener();
};
