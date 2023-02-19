(async () => {
  let { JSONEditor } = await import(
    "/third_party/josdejong/svelte-jsoneditor/main/index.js"
  );
  let { default_domains_app } = await import(
    "/options_ui/js/component/default-domains.js"
  );
  let { showRuleList } = await import("/options_ui/js/component/show-rule.js");
  default_domains_app();
  showRuleList("single_rule");
  window.editor = new JSONEditor({
    target: document.getElementById("jsoneditor"),
    props: {
      mode: "text",
      onChange: (
        updatedContent,
        previousContent,
        { contentErrors, patchResult }
      ) => {
        // content is an object { json: JSONData } | { text: string }
        console.log("onChange", {
          updatedContent,
          previousContent,
          contentErrors,
          patchResult,
        });
        console.log(updatedContent);
        let content_box = document.querySelector("#rule-content-container");
        content_box.value = updatedContent.text;
      },
    },
  });
})();
