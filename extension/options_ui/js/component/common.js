import * as utils from "/third_party/jingjingxyk/frontend-utils/utils.js";
import { showRuleList } from "./show-rule.js";
let id_ranges = {
  self_define_special_rule: [10000, 19999],
  self_define_rule: [20000, 29999],
  sync_remote_rule: [30000, 320000],
  all_dynamic_rule: [0, Infinity],
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
      console.log(value, value.id);
      if (value.id >= id_range[0] && value.id <= id_range[1]) {
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

export { utils, deleteDynamicRules, backupDynamicRules, id_ranges };
