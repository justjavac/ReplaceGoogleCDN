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

let updateRule = () => {
  let id = 1;
  let domain = "example.com";
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: id,
        priority: 1,
        action: { type: "block" },
        condition: { urlFilter: domain, resourceTypes: ["main_frame"] },
      },
    ],
    removeRuleIds: [id],
  });
};

let getRuleList = () => {
  chrome.declarativeNetRequest.getAvailableStaticRuleCount((count) => {
    console.log(count);
  });

  chrome.declarativeNetRequest.getEnabledRulesets((rulesetIds) => {
    console.log(rulesetIds);
    let list_box = document.querySelector(".rule_set_list");
    let list = "";
    rulesetIds.map((value, index) => {
      list += `<li data-rule="${value}">${value}</li>`;
    });
    list_box.innerHTML = list;
  });

  document
    .querySelector(".rule_set_list")
    .addEventListener("click", (event) => {
      console.log(event.target);
      console.log(event.target.nodeType);
      console.log(event.target.nodeName);
      if (event.target.nodeName === "LI") {
        showRuleJSON(event.target.getAttribute("data-rule"));
      }
    });

  return;
  chrome.declarativeNetRequest.getDynamicRules((rules) => {
    console.log(rules);
  });
  chrome.declarativeNetRequest.getMatchedRules({}, (RulesMatchedDetails) => {
    console.log(RulesMatchedDetails);
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
  } = await import("/third_party/frontend-utils/utils.js");
  getRuleList();
})();
