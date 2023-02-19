(async () => {
  let { JSONEditor } = await import(
    "/third_party/josdejong/svelte-jsoneditor/main/index.js"
  );
  let { main } = await import("/options_ui/js/component/main.js");
  let { sync_remote_conf } = await import(
    "/options_ui/js/component/sync-remote-conf-rule.js"
  );
  let { self_define_conf } = await import(
    "/options_ui/js/component/self-define-conf-rule.js"
  );
  let { showRuleList } = await import("/options_ui/js/component/show-rule.js");

  main();
  sync_remote_conf();
  self_define_conf();
  showRuleList();
  chrome.declarativeNetRequest.getAvailableStaticRuleCount((count) => {
    console.log(count);
  });

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
