let showRuleJSON = (rule) => {
  let file = rules[rule] ? rules[rule] : "";
  if (file) {
    let url = chrome.runtime.getURL(file);
    fetch(url)
      .then((x) => x.json())
      .then((x) => {
        console.log(x);
        document.querySelector("#rule-content-container").value =
          JSON.stringify(x);
      });
  } else {
    console.log("rule:" + rule + "no found!");
  }
};

/**
 * 规则名称 与 规则文件目录映射
 */

let rules = {
  ruleset_redirect_main: "/rules/rules_redirect_main.json",
  ruleset_redirect_main_extra: "/rules/rules_redirect_main_extra.json",
  ruleset_remove_content_security_policy_header:
    "/rules/rules_remove_content_security_policy_header.json",
};



let getRuleList = () => {
  chrome.declarativeNetRequest.getAvailableStaticRuleCount((count) => {
    console.log(count);
  });

  chrome.declarativeNetRequest.getDynamicRules((rules) => {
    console.log(rules);
    let list_box = document.querySelector(".rule_dynamic_set_list");
    let list = "";
    rules.forEach((value, key, array) => {
      console.log(value.id, value);
      list += `<li data-rule="${value.id}" data-origin="${encodeURIComponent(JSON.stringify(value))}">${value.id}</li>`;
    });
    list_box.innerHTML = list;
  });

  chrome.declarativeNetRequest.getEnabledRulesets((rulesetIds) => {
    console.log(rulesetIds);
    let list_box = document.querySelector(".rule_static_set_list");
    let list = "";
    rulesetIds.map((value, index) => {
      list += `<li data-rule="${value}">${value}</li>`;
    });
    list_box.innerHTML = list;
  });

  document
    .querySelector(".rule_static_set_list")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      console.log(event.target);
      console.log(event.target.nodeType);
      console.log(event.target.nodeName);
      if (event.target.nodeName === "LI") {
        showRuleJSON(event.target.getAttribute("data-rule"));
      }
    });

  document
      .querySelector(".rule_dynamic_set_list")
      .addEventListener("click", (event) => {
        event.stopPropagation();
        event.preventDefault();
        console.log(event.target);
        console.log(event.target.nodeType);
        console.log(event.target.nodeName);
        if (event.target.nodeName === "LI") {
          console.log(event.target.getAttribute("data-origin"))
           document.querySelector("#rule-content-container").value =decodeURIComponent(event.target.getAttribute("data-origin"));
        }
      });


  /*
      if (location.href.indexOf("problematic/url") !== -1) {
        chrome.declarativeNetRequest.updateEnabledRulesets({"disableRulesetIds": ["rules"]});
      } else {
        chrome.declarativeNetRequest.updateEnabledRulesets({"enableRulesetIds": ["rules"]});
      }

     */

  return;
  chrome.declarativeNetRequest.getDynamicRules((rules) => {
    console.log(rules);
  });
  chrome.declarativeNetRequest.getMatchedRules({}, (RulesMatchedDetails) => {
    console.log(RulesMatchedDetails);
  });
};

let deleteDynamicRules = () => {
  chrome.declarativeNetRequest.getDynamicRules((rules) => {
    console.log(rules);
    let del_ids = [];
    rules.forEach((value, key, array) => {
      console.log(value, value.id);
      del_ids.push(value.id);
    });
    if (del_ids) {
      chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [],
        removeRuleIds: del_ids,
      });
    }
  });
};

(async () => {
  let {
    encodeBase64,
    decodeBase64,
    hasClass,
    addClass,
    removeClass,
    createJSONFile,
    fetchAll,
    getContent,
  } = await import("/third_party/frontend-utils/utils.js");
  getRuleList();

  document
    .querySelector(".delete-sync-remote-rule")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      deleteDynamicRules();
    });

  document
    .querySelector(".goto-sync-remote-rule")
    .addEventListener("click", async (event) => {
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
      let default_rules_urls = [
        "https://github.com/jingjingxyk/extension-v3-test/blob/main/rules/auth.json?raw=true",
        "https://github.com/jingjingxyk/extension-v3-test/blob/main/rules/rules_advance_redirect_1.json?raw=true",
        "https://github.com/jingjingxyk/extension-v3-test/blob/main/rules/rules_advance_redirect_2.json?raw=true",
        "https://github.com/jingjingxyk/extension-v3-test/blob/main/rules/rules_block_request.json?raw=true",
        "https://github.com/jingjingxyk/extension-v3-test/blob/main/rules/rules_redirect_extra.json?raw=true",
        "https://github.com/jingjingxyk/extension-v3-test/blob/main/rules/rules_remove_content_security_policy_header.json?raw=true",
      ];
      default_rules_urls = [
        "https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/auth.json?raw=true",
        "https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/rules_advance_redirect_1.json?raw=true",
        "https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/rules_advance_redirect_2.json?raw=true",
        "https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/rules_block_request.json?raw=true",
        "https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/rules_redirect_extra.json?raw=true",
        "https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/rules_remove_content_security_policy_header.json?raw=true",
      ];
      default_rules_urls = [];
      rules_urls = new_rules_urls ? new_rules_urls : default_rules_urls;

      let result = await fetchAll(rules_urls, getContent);
      console.log(result);
      if (result.length > 1) {
        deleteDynamicRules();

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
          }
        );
      }
    });
  document.querySelector(".add-rule").addEventListener("click", (event) => {
    let rule_str = document.querySelector(".new-add-rule-pannel").value;
    rule_str = rule_str.trim();
    if (rule_str.length) {
      rule_str = JSON.parse(rule_str);
      if (rule_str) {
        let need_rules = [];
        let dynamic_id_index = parseInt(new Date().getTime() / 1000);
        rule_str.forEach((value, key, array) => {
          value.id = ++dynamic_id_index;
          need_rules.push(value);
        });
        console.log(need_rules);
        chrome.declarativeNetRequest.updateDynamicRules(
          {
            addRules: need_rules,
            removeRuleIds: [],
          },
          (info) => {
            console.log(info);
          }
        );
      }
    }
  });

    document.querySelector(".back-new-rule-to-json").addEventListener("click", (event) => {
    let rule_str = document.querySelector(".new-add-rule-pannel").value;
    rule_str = rule_str.trim();
    if (rule_str.length) {
      rule_str = JSON.parse(rule_str);
      if (rule_str) {
          createJSONFile(rule_str,'ReplaceGoogleCDN-backup-'+parseInt(new Date().getTime() / 1000).toString()+'.json')
      }
    }
  });

  /*
    let url = chrome.runtime.getURL("sandbox/index.html");
        chrome.tabs.create({url}, (callback) => {
        console.log(callback)
    });
    let iframe_src = document.querySelector("#external_page").getAttribute('src')
    */
  window.addEventListener(
    "message",
    (event) => {
      console.log(event, event.source);
      event.source.postMessage("hi there yourself!  the secret response ", "*");
      //event.source.postMessage("hi there yourself!  the secret response ",event.origin);
      //event.source.postMessage("hi there yourself!  the secret response ",location.origin+iframe_src);
      console.log(event.data);
      if (event.origin === "null") {
        let data = JSON.parse(event.data);
        console.log(data);

        if (data.url) {
          let url = data.url;
          chrome.tabs.create({ url }, (callback) => {
            console.log(callback);
          });
        }
      }
    },
    false
  );
})();
