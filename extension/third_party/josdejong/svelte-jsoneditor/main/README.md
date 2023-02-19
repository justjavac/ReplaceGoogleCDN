# vanilla-jsoneditor

A web-based tool to view, edit, format, transform, and validate JSON.

Try it out: https://jsoneditoronline.org

This is the vanilla variant of `svelte-jsoneditor`, which can be used in vanilla JavaScript or frameworks like SolidJS, React, Vue, Angular.

![JSONEditor tree mode screenshot](https://raw.githubusercontent.com/josdejong/svelte-jsoneditor/main/misc/jsoneditor_tree_mode_screenshot.png)
![JSONEditor text mode screenshot](https://raw.githubusercontent.com/josdejong/svelte-jsoneditor/main/misc/jsoneditor_text_mode_screenshot.png)
![JSONEditor table mode screenshot](https://raw.githubusercontent.com/josdejong/svelte-jsoneditor/main/misc/jsoneditor_table_mode_screenshot.png)

## Features

- View and edit JSON
- Has a low level text editor and high level tree view and table view
- Format (beautify) and compact JSON
- Sort, query, filter, and transform JSON
- Repair JSON
- JSON schema validation and pluggable custom validation
- Color highlighting, undo/redo, search and replace
- Utilities like a color picker and timestamp tag
- Handles large JSON documents up to 512 MB

## Install

Install using npm:

```
npm install vanilla-jsoneditor
```

Remark: for usage in a Svelte project, install `svelte-jsoneditor` instead.

## Use

Browser example loading the ES module:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JSONEditor</title>
  </head>
  <body>
    <div id="jsoneditor"></div>

    <script type="module">
      import { JSONEditor } from 'vanilla-jsoneditor'

      let content = {
        text: undefined,
        json: {
          greeting: 'Hello World'
        }
      }

      const editor = new JSONEditor({
        target: document.getElementById('jsoneditor'),
        props: {
          content,
          onChange: (updatedContent, previousContent, { contentErrors, patchResult }) => {
            // content is an object { json: JSONData } | { text: string }
            console.log('onChange', { updatedContent, previousContent, contentErrors, patchResult })
            content = updatedContent
          }
        }
      })

      // use methods get, set, update, and onChange to get data in or out of the editor.
      // Use updateProps to update properties.
    </script>
  </body>
</html>
```

## Documentation

For documentation, see: https://github.com/josdejong/svelte-jsoneditor
