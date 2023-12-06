import * as utils from "/third_party/jingjingxyk/frontend-utils/utils.js";

// rule_id 区间段
let id_ranges = {
  single_rule: [1, 9999],
  self_define_special_rule: [10000, 19999],
  self_define_rule: [20000, 29999],
  sync_remote_static_rule: [30000, 39999],
  sync_remote_rule: [40000, 320000],
  all_dynamic_rule: [0, Infinity]
};

//区间段名称
let id_range_name_map = {
  single_rule: "默认候选项规则",
  self_define_special_rule: "自定义特制规则",
  self_define_rule: "自定义普通规则",
  sync_remote_static_rule: "同步远端静态规则",
  sync_remote_rule: "同步远端动态规则",
  all_dynamic_rule: "所有动态规则"
};

//规则作用
let rule_action_type_map = {
  redirect: "URI重定向",
  modifyHeaders: "修改请求头或者响应头",
  block: "阻止请求"
};

let updateDynamicRules = (
  addRules = [],
  removeRuleIds = [],
  callback = () => {},
  ...args
) => {
  chrome.declarativeNetRequest.updateDynamicRules(
    {
      addRules: addRules,
      removeRuleIds: removeRuleIds
    },
    () => {
      callback(args);
    }
  );
};

let deleteDynamicRules = (type, id = 0, callback = () => {}, ...args) => {
  let del_ids = [];
  let id_range = [0, 0];
  chrome.declarativeNetRequest.getDynamicRules((rules) => {
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
      chrome.declarativeNetRequest.updateDynamicRules(
        {
          addRules: [],
          removeRuleIds: del_ids
        },
        () => {
          callback(args);
        }
      );
    }
  });
};

/**
 * 备份自定义规则
 */
let backupSelfDefinedDynamicRules = () => {
  chrome.declarativeNetRequest.getDynamicRules((rules) => {
    if (1 || rules.length > 0) {
      let time = new Date().toISOString();
      console.log(time);
      //time=parseInt(new Date().getTime() / 1000).toString()
      let filename =
        "replace-google-cdn-backup-self-defined-dynamic-rule-" + time + ".json";

      let need_rules = [];
      rules.map((rule, index, array) => {
        if (
          rule.id >= id_ranges["self_define_rule"][0] &&
          rule.id <= id_ranges["self_define_rule"][1]
        ) {
          need_rules.push(rule);
        }

        if (
          rule.id >= id_ranges["self_define_special_rule"][0] &&
          rule.id <= id_ranges["self_define_special_rule"][1]
        ) {
          need_rules.push(rule);
        }
      });
      utils.createJSONFile(need_rules, filename);
    }
  });
};

/**
 * 启用本地默认静态规则
 */
let enableStaticRules = (callback, ...args) => {
  let local_manifest = chrome.runtime.getManifest();
  //console.log(local_manifest);
  let local_declarative_net_request =
    local_manifest.declarative_net_request.rule_resources;

  let updateRulesetOptions = {
    disableRulesetIds: [],
    enableRulesetIds: []
  };

  local_declarative_net_request.forEach((value) => {
    //console.log(value);
    if (value.enabled === true) {
      updateRulesetOptions.enableRulesetIds.push(value.id);
    }
  });

  chrome.declarativeNetRequest.updateEnabledRulesets(
    updateRulesetOptions,
    () => {
      deleteDynamicRules("sync_remote_static_rule", 0, () => {
        callback();
      });
    }
  );
};

export {
  utils,
  updateDynamicRules,
  deleteDynamicRules,
  backupSelfDefinedDynamicRules,
  id_ranges,
  id_range_name_map,
  rule_action_type_map,
  enableStaticRules
};
