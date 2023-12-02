let { JSONEditor } = await import(
  "/third_party/josdejong/svelte-jsoneditor/main/index.js"
);
let editor = {
  init: () => {
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
          /*
          console.log("onChange", {
            updatedContent,
            previousContent,
            contentErrors,
            patchResult,
          });

           */
          //console.log(updatedContent);
          let content_box = document.querySelector("#rule-content-container");
          content_box.value = updatedContent.text;
        },
      },
    });
  },
};

export default editor;
