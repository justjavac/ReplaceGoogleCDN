import { createJSONFile } from "/third_party/jingjingxyk/frontend-utils/utils.js";
import { showRuleList } from "./show-rule.js";

let deleteDynamicRules = (type, id = 0) => {
  chrome.declarativeNetRequest.getDynamicRules((rules) => {
    console.log(rules);
    let del_ids = [];
    let id_range = [0, 0];
    switch (type) {
      case "self_define_rule":
        id_range = [10000, 100000];
        break;
      case "remote_server_rule":
        id_range = [1664467200, Infinity];
        break;
      case "all_dynamic_rule":
        id_range = [0, Infinity];
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
    if (rules) {
      let time = new Date().toISOString();
      console.log(time);
      //time=parseInt(new Date().getTime() / 1000).toString()
      let filename =
        "ReplaceGoogleCDN-backup-all-dynamic-rule-" + time + ".json";
      console.log(filename);
      createJSONFile(rules, filename);
    }
  });
};

export { deleteDynamicRules, backupDynamicRules };
