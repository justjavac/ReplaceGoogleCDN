import * as utils from "/third_party/jingjingxyk/frontend-utils/utils.js";
import { showRuleList } from "./show-rule.js";
let id_ranges = {
  single_rule: [1, 9999],
  self_define_special_rule: [10000, 19999],
  self_define_rule: [20000, 29999],
  sync_remote_static_rule: [30000, 39999],
  sync_remote_rule: [40000, 320000],
  all_dynamic_rule: [0, Infinity],
};
let id_ranges_name = {
  single_rule: "默认侯选项规则",
  self_define_special_rule: "自定义特制规则",
  self_define_rule: "自定义普通规则",
  sync_remote_static_rule: "同步远端静态规则",
  sync_remote_rule: "同步远端动态规则",
  all_dynamic_rule: "所有动态规则",
};
let deleteDynamicRules = (type, id = 0) => {
  chrome.declarativeNetRequest.getDynamicRules((rules) => {
    let del_ids = [];
    let id_range = [0, 0];
    switch (type) {
      case "self_define_special_rule":
        id_range = id_ranges[type];
        break;
      case "self_define_rule":
        id_range = id_ranges[type];
        break;
      case "sync_remote_static_rule":
        id_range = id_ranges[type];
        break;
      case "sync_remote_rule":
        id_range = id_ranges[type];
        break;
      case "all_dynamic_rule":
        id_range = id_ranges[type];
        break;
      case "single_rule":
        id_range = [id, id];
        break;
      default:
        break;
    }
    rules.forEach((value, key, array) => {
      if (value.id >= id_range[0] && value.id <= id_range[1]) {
        // console.log(value, value.id);
        del_ids.push(value.id);
      }
    });
    if (del_ids) {
      chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [],
        removeRuleIds: del_ids,
      });
      showRuleList();
    }
  });
};

let backupDynamicRules = () => {
  chrome.declarativeNetRequest.getDynamicRules((rules) => {
    if (rules.length > 0) {
      let time = new Date().toISOString();
      console.log(time);
      //time=parseInt(new Date().getTime() / 1000).toString()
      let filename =
        "ReplaceGoogleCDN-backup-all-dynamic-rule-" + time + ".json";
      console.log(filename);
      utils.createJSONFile(rules, filename);
    }
  });
};
/**
 * 启用本地默认静态规则
 */
let enableStaticRules = () => {
  let local_manifest = chrome.runtime.getManifest();
  //console.log(local_manifest);
  let local_declarative_net_request =
    local_manifest.declarative_net_request.rule_resources;

  let UpdateRulesetOptions = {
    disableRulesetIds: [],
    enableRulesetIds: [],
  };
  local_declarative_net_request.forEach((value) => {
    //console.log(value);
    if (value.enabled === true) {
      UpdateRulesetOptions.enableRulesetIds.push(value.id);
    }
  });

  chrome.declarativeNetRequest.updateEnabledRulesets(
    UpdateRulesetOptions,
    (callback) => {
      //console.log(callback);
      deleteDynamicRules("sync_remote_static_rule");
    }
  );
};

export {
  utils,
  deleteDynamicRules,
  backupDynamicRules,
  id_ranges,
  id_ranges_name,
  enableStaticRules,
};
