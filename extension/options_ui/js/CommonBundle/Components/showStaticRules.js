let showStaticRules = () => {
  //静态规则集，也就是manifest.json 配置信息
  chrome.declarativeNetRequest.getEnabledRulesets((rulesetIds) => {
    //console.log(rulesetIds);
    /*
          let mainifest=chrome.runtime.getManifest()
          console.log(mainifest.declarative_net_request.rule_resources)
         */
    let list_box = document.querySelector(".rule_static_set_list");
    let list = "";
    rulesetIds.map((value, index) => {
      list += `<li data-rule-id="${value}">${value}</li>`;
    });
    list_box.innerHTML = list;
  });
};

let showManifestRuleJSON = (rule) => {
  let local_manifest = chrome.runtime.getManifest();
  let local_declarative_net_request =
    local_manifest.declarative_net_request.rule_resources;
  let default_static_rules = {};
  local_declarative_net_request.forEach((value) => {
    default_static_rules[value.id] = value.path;
  });

  let file = default_static_rules[rule] ? default_static_rules[rule] : "";
  if (file) {
    let url = chrome.runtime.getURL(file);
    fetch(url)
      .then((x) => x.json())
      .then((x) => {
        //console.log(JSON.stringify(x));
        editor.set({
          json: x,
          text: undefined,
        });
        let content_box = document.querySelector("#rule-content-container");
        content_box.value = JSON.stringify(x);
        content_box.setAttribute("rule-type", "static");
      });
  } else {
    console.log("rule:" + rule + "no found!");
  }
};

let bindStaticRuleEventListener = () => {
  document
    .querySelector(".rule_static_set_list")
    .addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      //console.log(event.target);
      //console.log(event.target.nodeType);
      //console.log(event.target.nodeName);
      if (event.target.nodeName === "LI") {
        showManifestRuleJSON(event.target.getAttribute("data-rule-id"));
      }
    });
};

export { showStaticRules, bindStaticRuleEventListener };
