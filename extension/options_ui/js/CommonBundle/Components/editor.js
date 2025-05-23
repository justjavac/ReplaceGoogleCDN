import {createJSONEditor} from "/third_party/josdejong/svelte-jsoneditor/main/standalone.js"

let editor = {
  init: () => {
    window.editor = new createJSONEditor({
      target: document.getElementById("jsoneditor"),
      props: {
        mode: "text",
        onChange: (
          updatedContent,
          previousContent,
          {contentErrors, patchResult}
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
        }
      }
    });
  }
};

export default editor;
