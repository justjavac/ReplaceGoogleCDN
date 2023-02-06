(async () => {
  let { default_domains_app } = await import(
    "/options_ui/js/component/default-domains.js"
  );
  let { showRuleList } = await import("/options_ui/js/component/show-rule.js");
  default_domains_app();
  showRuleList("single_rule");
})();
