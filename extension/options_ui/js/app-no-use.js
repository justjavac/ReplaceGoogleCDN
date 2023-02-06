(async () => {
  let { encodeBase64, decodeBase64, hasClass, addClass } = await import(
    "/third_party/jingjingxyk/frontend-utils/utils.js"
  );

  let { default_domains_app } = await import(
    "/options_ui/js/component/default-domains.js"
  );

  let { main } = await import("/options_ui/js/component/main.js");
  let { sync_remote_conf } = await import(
    "/options_ui/js/component/sync-remote-conf-rule.js"
  );
  let { self_define_conf } = await import(
    "/options_ui/js/component/self-define-conf-rule.js"
  );
  let { showRuleList } = await import("/options_ui/js/component/show-rule.js");
  default_domains_app();
  main();
  sync_remote_conf();
  self_define_conf();
  showRuleList();
  chrome.declarativeNetRequest.getAvailableStaticRuleCount((count) => {
    console.log(count);
  });
  /*
  chrome.declarativeNetRequest.getMatchedRules({}, (RulesMatchedDetails) => {
    console.log(RulesMatchedDetails);
  });
  */
  //https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/#type-HeaderOperation
  //静态规则处理
  /*
        if (location.href.indexOf("problematic/url") !== -1) {
          chrome.declarativeNetRequest.updateEnabledRulesets({"disableRulesetIds": ["rules"]});
        } else {
          chrome.declarativeNetRequest.updateEnabledRulesets({"enableRulesetIds": ["rules"]});
        }

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
