# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

> WARNING: This changelog is no longer updated since `v3.3.0`. Please use the [GitHub Releases](https://github.com/josdejong/svelte-jsoneditor/releases) overview instead.

## [3.2.0](https://github.com/josdejong/svelte-jsoneditor/compare/v3.1.1...v3.2.0) (2025-03-26)


### Features

* [#529](https://github.com/josdejong/svelte-jsoneditor/issues/529) extract nested arrays in table mode ([592c6bc](https://github.com/josdejong/svelte-jsoneditor/commit/592c6bc3617fd30f98cc411f207c3308c7bf753a))
* [#537](https://github.com/josdejong/svelte-jsoneditor/issues/537) truncate large strings ([#538](https://github.com/josdejong/svelte-jsoneditor/issues/538)) ([160a940](https://github.com/josdejong/svelte-jsoneditor/commit/160a94079b6bea2f5697902f927cd9a4c0fa1c64))


### Bug Fixes

* show the file sizes in KB (see [#537](https://github.com/josdejong/svelte-jsoneditor/issues/537)) ([216b709](https://github.com/josdejong/svelte-jsoneditor/commit/216b7091c583bcb0209d891a395db5e53707a29f))

### [3.1.1](https://github.com/josdejong/svelte-jsoneditor/compare/v3.1.0...v3.1.1) (2025-03-19)


### Bug Fixes

* document that v3 requires Svelte 5 (see [#499](https://github.com/josdejong/svelte-jsoneditor/issues/499)) ([9158dbf](https://github.com/josdejong/svelte-jsoneditor/commit/9158dbf3bc1ff8fb6aa6c02a1a54bbbeb1c6acbe))

## [3.1.0](https://github.com/josdejong/svelte-jsoneditor/compare/v3.0.0...v3.1.0) (2025-03-12)


### Features

* implement `createAjvValidatorAsync` ([#522](https://github.com/josdejong/svelte-jsoneditor/issues/522)) ([24cea1a](https://github.com/josdejong/svelte-jsoneditor/commit/24cea1ad98c0943f69ba144f389235783c64397b))
* update dependencies ([b267409](https://github.com/josdejong/svelte-jsoneditor/commit/b2674095672dda27baf00decbb785bb6aab55016))

## [3.0.0](https://github.com/josdejong/svelte-jsoneditor/compare/v2.4.0...v3.0.0) (2025-02-28)


### ⚠ BREAKING CHANGES

* Dropped support for Svelte 3 and 4, the library requires Svelte 5 now.
* Dropped support for `jsonpath-plus` v9.
* most public methods changed from asynchronous to synchronous.

### Features

* Change methods `set`, `update`, `patch`, `select`, `expand`, `collapse`, `acceptAutoRepair`, `focus`, `updateProps` from asynchronous to synchronous, fixing [#499](https://github.com/josdejong/svelte-jsoneditor/issues/499) ([#524](https://github.com/josdejong/svelte-jsoneditor/issues/524)) ([6dd69cd](https://github.com/josdejong/svelte-jsoneditor/commit/6dd69cdd5e2d7e4b6591d8cd032f50cf89e83693))


### Bug Fixes

* [#512](https://github.com/josdejong/svelte-jsoneditor/issues/512) prevent browser addons from reacting to keydown events like shift+arrow down ([eef40ad](https://github.com/josdejong/svelte-jsoneditor/commit/eef40add45f58ac30641863891a82349d07ec600))
* [#518](https://github.com/josdejong/svelte-jsoneditor/issues/518) convert all Svelte examples to Svelte 5 ([0c3f3ae](https://github.com/josdejong/svelte-jsoneditor/commit/0c3f3ae09a7744ede3e5d999ceb36fc92d56d934))
* upgrade to the latest version of `jsonpath-plus`, fixing a security vulnerability ([#523](https://github.com/josdejong/svelte-jsoneditor/issues/523)) ([393c76b](https://github.com/josdejong/svelte-jsoneditor/commit/393c76b1dc96cfcc801a8f470a863bed7d866d54))

## [2.4.0](https://github.com/josdejong/svelte-jsoneditor/compare/v2.3.3...v2.4.0) (2025-02-13)


### Features

* enable pasting via the context menu in `tree` and `table` mode ([6c12e3b](https://github.com/josdejong/svelte-jsoneditor/commit/6c12e3beee568bf7091c1d31e024f68a17a078d6))

### [2.3.3](https://github.com/josdejong/svelte-jsoneditor/compare/v2.3.2...v2.3.3) (2024-12-11)


### Bug Fixes

* esm-env warning in vanilla-jsoneditor bundle ([#507](https://github.com/josdejong/svelte-jsoneditor/issues/507)) ([11daf16](https://github.com/josdejong/svelte-jsoneditor/commit/11daf16b63715e068b7aad430f6c17a086608e06))
* suppress `[svelte] reactive_declaration_non_reactive_property` warnings during development ([5e05768](https://github.com/josdejong/svelte-jsoneditor/commit/5e0576890fa7fd0b5b4c38e33c128a3c4a23ad8b))

### [2.3.2](https://github.com/josdejong/svelte-jsoneditor/compare/v2.3.1...v2.3.2) (2024-12-05)


### Bug Fixes

* [#506](https://github.com/josdejong/svelte-jsoneditor/issues/506) modal closing when the mouse ends outside it after selecting text in Chrome ([bbb7d83](https://github.com/josdejong/svelte-jsoneditor/commit/bbb7d833e1a31dc7dbb16ea6ce33b0bc4f6439d6))
* update dependencies ([1df771f](https://github.com/josdejong/svelte-jsoneditor/commit/1df771fddabcbdc5b68e335d1115ea00a6ad725a))

### [2.3.1](https://github.com/josdejong/svelte-jsoneditor/compare/v2.3.0...v2.3.1) (2024-11-27)


### Bug Fixes

* no history being created when clicking action buttons such as format and compact ([a8c329c](https://github.com/josdejong/svelte-jsoneditor/commit/a8c329c95e59d8be1b3847ad4d65a46d99e6422a))

## [2.3.0](https://github.com/josdejong/svelte-jsoneditor/compare/v2.2.1...v2.3.0) (2024-11-27)


### Features

* update dependencies (most notably `jsonrepair`) ([d84c394](https://github.com/josdejong/svelte-jsoneditor/commit/d84c394d4851cc5ab0a6fecba4bcc502aba6b60e))

### [2.2.1](https://github.com/josdejong/svelte-jsoneditor/compare/v2.2.0...v2.2.1) (2024-11-27)


### Bug Fixes

* flush any pending changes before undo/redo ([81783f4](https://github.com/josdejong/svelte-jsoneditor/commit/81783f493f84271f8d924ec64f7e9a012c0d6ac6))

## [2.2.0](https://github.com/josdejong/svelte-jsoneditor/compare/v2.1.0...v2.2.0) (2024-11-26)


### Features

* keep history when switching mode ([#504](https://github.com/josdejong/svelte-jsoneditor/issues/504)) ([b5f11ca](https://github.com/josdejong/svelte-jsoneditor/commit/b5f11ca25bd027eeda5f1147afa528f66fc41077))

## [2.1.0](https://github.com/josdejong/svelte-jsoneditor/compare/v2.0.2...v2.1.0) (2024-11-20)


### Features

* implement quick key Ctrl+D to duplicate the current row in table mode ([deef105](https://github.com/josdejong/svelte-jsoneditor/commit/deef10559ccea536f8b4f0b3931d4a29b315181d))


### Bug Fixes

* exclude the `sass` dependency from the vanilla package ([e3bcddb](https://github.com/josdejong/svelte-jsoneditor/commit/e3bcddb16c6c6a16e3d0f1484f74404a41176429))
* update dependencies (`jsonpath-plus`, `@jsonquerylang/jsonquery` and others) ([b69e9bf](https://github.com/josdejong/svelte-jsoneditor/commit/b69e9bf1c96af8473b0806f406f46dac73f975fc))

### [2.0.2](https://github.com/josdejong/svelte-jsoneditor/compare/v2.0.1...v2.0.2) (2024-11-05)


### Bug Fixes

* cannot sort a nested object inside an array ([5ebe9fc](https://github.com/josdejong/svelte-jsoneditor/commit/5ebe9fc827e4d83f5694e9799bc71902f8ef0a39))
* more efficient patch operation for the undo action of moving an item inside an object ([187e994](https://github.com/josdejong/svelte-jsoneditor/commit/187e994ba2eddf869a85b3bd2f6db70aed7e16ae))
* only expand JSON after sort, transform and expand when isn't expanded already ([5d84af0](https://github.com/josdejong/svelte-jsoneditor/commit/5d84af035b8981cf51f1b4d7e66b5d90621f5692))
* performance issue of sorting the keys of large objects ([3708998](https://github.com/josdejong/svelte-jsoneditor/commit/370899889b4bbf046aa765f25f428377eae36819))

### [2.0.1](https://github.com/josdejong/svelte-jsoneditor/compare/v2.0.0...v2.0.1) (2024-11-01)


### Bug Fixes

* [#498](https://github.com/josdejong/svelte-jsoneditor/issues/498) pressing enter when editing a value submits form ([e8c814f](https://github.com/josdejong/svelte-jsoneditor/commit/e8c814f4f36ca15dc50004ca2927edd5723312c2))

## [2.0.0](https://github.com/josdejong/svelte-jsoneditor/compare/v1.1.2...v2.0.0) (2024-10-28)


### ⚠ BREAKING CHANGES

* The library is upgraded to Svelte 5. Everything is backward compatible and works in Svelte 3, 4, and 5. There may be subtle breaking changes in specific edge cases though, hence the release as a new major version.

### Features

* upgrade to Svelte 5 ([#490](https://github.com/josdejong/svelte-jsoneditor/issues/490)) ([588caa5](https://github.com/josdejong/svelte-jsoneditor/commit/588caa564e26e71a645dcec01f42e189feddd50f))

### [1.1.2](https://github.com/josdejong/svelte-jsoneditor/compare/v1.1.1...v1.1.2) (2024-10-25)


### Bug Fixes

* method `patch` not working in `tree`  and table mode when the content is text ([5f1c8a5](https://github.com/josdejong/svelte-jsoneditor/commit/5f1c8a5170e8998e798f40d812a8dbcd464186f1))

### [1.1.1](https://github.com/josdejong/svelte-jsoneditor/compare/v1.1.0...v1.1.1) (2024-10-22)


### Bug Fixes

* list svelte `^3.54.0` as compatible peerDependency alongside `4.0.0` ([ba2aee5](https://github.com/josdejong/svelte-jsoneditor/commit/ba2aee5d6dfe65d8e7d35e5fb69a89355e0fee67))
* upgrade to svelte-awesome@3.3.5 ([5fe2588](https://github.com/josdejong/svelte-jsoneditor/commit/5fe2588ee1be275cc43d521c126eb78837158089))

## [1.1.0](https://github.com/josdejong/svelte-jsoneditor/compare/v1.0.8...v1.1.0) (2024-10-22)


### Features

* upgrade to `jsonrepair@3.9.0` ([acb6976](https://github.com/josdejong/svelte-jsoneditor/commit/acb6976253e207f3b89e497cdae9a9ee3b1ccc29))

### [1.0.8](https://github.com/josdejong/svelte-jsoneditor/compare/v1.0.7...v1.0.8) (2024-10-14)


### Bug Fixes

* upgrade dependencies ([13e7cef](https://github.com/josdejong/svelte-jsoneditor/commit/13e7cef89701b880578c1ef57acdcd0f0698983e))

### [1.0.7](https://github.com/josdejong/svelte-jsoneditor/compare/v1.0.6...v1.0.7) (2024-10-09)


### Bug Fixes

* [#488](https://github.com/josdejong/svelte-jsoneditor/issues/488) types `JsonEditor` and `CreateJSONEditorProps` not exported in `vanilla-jsoneditor` ([337c33b](https://github.com/josdejong/svelte-jsoneditor/commit/337c33b3dcf05a30b9a10815a19e49687ebb291a))
* [#489](https://github.com/josdejong/svelte-jsoneditor/issues/489) anchor styling defined in the TransformModal affecting the global style ([a213583](https://github.com/josdejong/svelte-jsoneditor/commit/a213583c6473d70d4a2fcc1b6802762a5b11c934))

### [1.0.6](https://github.com/josdejong/svelte-jsoneditor/compare/v1.0.5...v1.0.6) (2024-09-30)


### Bug Fixes

* type definition of `createJSONEditor` not exported in the `vanilla-jsoneditor` library ([e0aee3e](https://github.com/josdejong/svelte-jsoneditor/commit/e0aee3e66f06f0ff208912f11ed888aa16adcaed))

### [1.0.5](https://github.com/josdejong/svelte-jsoneditor/compare/v1.0.4...v1.0.5) (2024-09-30)


### Bug Fixes

* key not rendered when the value contains search results and vice versa ([0c41c79](https://github.com/josdejong/svelte-jsoneditor/commit/0c41c7964d9cd04d147944d6d2afa84d60c85280))

### [1.0.4](https://github.com/josdejong/svelte-jsoneditor/compare/v1.0.3...v1.0.4) (2024-09-27)


### Bug Fixes

* [#486](https://github.com/josdejong/svelte-jsoneditor/issues/486) naming conflict for argument `isMac` in the type definitions ([9fac7a3](https://github.com/josdejong/svelte-jsoneditor/commit/9fac7a3e021c7d96c4914211e5faa86de083d9db))

### [1.0.3](https://github.com/josdejong/svelte-jsoneditor/compare/v1.0.2...v1.0.3) (2024-09-26)


### Bug Fixes

* invalid JSONPath query options could crash the Transform Modal ([c90a54c](https://github.com/josdejong/svelte-jsoneditor/commit/c90a54c07006a30a404f522592419128135a1431))

### [1.0.2](https://github.com/josdejong/svelte-jsoneditor/compare/v1.0.1...v1.0.2) (2024-09-26)


### Bug Fixes

* more robust positioning of the modal by adding `margin: auto`, see [#384](https://github.com/josdejong/svelte-jsoneditor/issues/384) ([2302436](https://github.com/josdejong/svelte-jsoneditor/commit/2302436fbc8d65fe89b79646995c5e7e02bf38fe))

### [1.0.1](https://github.com/josdejong/svelte-jsoneditor/compare/v1.0.0...v1.0.1) (2024-09-25)


### Bug Fixes

* handle `createQuery` throwing an exception in the TransformModal ([4b1f3f6](https://github.com/josdejong/svelte-jsoneditor/commit/4b1f3f6d08352002db62ddeaf6fc37207a7b7707))

## [1.0.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.23.8...v1.0.0) (2024-09-24)


### ⚠ BREAKING CHANGES

* The internal state is refactored. This should not give any issues except when 
  relying on some internal or undocumented features.
* Changed the API to consistently use `undefined` instead of `null`. This involves 
  properties `selection`, `onChange` (properties `contentErrors and `patchResult`), 
  `onRenderContextMenu` (property `selection`), `onSelect`, and methods `validate`,
  and `select`.
*  Old deprecation messages are removed. 
*  The API of the `expand` function is changed from `expand(callback)` to 
  `expand(path, callback)`, and can't be used anymore for collapsing nodes. Instead, 
  se the `collapse(path)` method for that.
* The property `edit` is removed from the types `KeySelection` and `ValueSelection`, 
  and two new types `EditKeySelection` and `EditValueSelection` are added.
* The helper functions  `createKeySelection` and `createValueSelection` are changed,
  argument `edit` is removed, and two new helper functions `createEditKeySelection` 
  and `createEditValueSelection` are added.
* The API of the component `EditableValue` requires an additional property `selection`.
* Some of the class names related to selection highlighting are moved/changed.
* The default query language is changed to `jsonquery`.
* The vanilla editor needs to be instantiated using `createJSONEditor(...)` instead
  of `new JSONEditor(...)` in preparation for the upgrade to Svelte 5.

### Features

* change the constructor of the vanilla library from `new JSONEditor(...)` into `createJSONEditor(...)` in preparation 
  for an upgrade to Svelte 5.
* implemented a powerful API for `expand` and `collapse` ([#458](https://github.com/josdejong/svelte-jsoneditor/pull/458))
* replace the default query language with a new query language [jsonquery](https://jsonquerylang.org/) ([#469](https://github.com/josdejong/svelte-jsoneditor/pull/469))
* implement support for the query language JSONPath ([#470](https://github.com/josdejong/svelte-jsoneditor/pull/470))
* export more utility functions ([#461](https://github.com/josdejong/svelte-jsoneditor/pull/461))
* change the API to consistently use `undefined` instead of `null` ([#453](https://github.com/josdejong/svelte-jsoneditor/pull/453)).
* replaced `svelte-simple-modal` with native HTML `<dialog />` ([#462](https://github.com/josdejong/svelte-jsoneditor/pull/462))
* the property `edit` is removed from the types `KeySelection` and `ValueSelection`,
  and two new types `EditKeySelection` and `EditValueSelection` are added.
* internal refactor of the data structure holding state like expanded nodes and search results.

### Bug Fixes

* shortcut keys `Ctrl+F` and `Ctrl+H` not working in table mode whilst editing a value
* the do you want to format message popped up after clicking the "Compact" button
* define `svelte@4` as a peer dependency
* a lot of small bugfixes.

### [0.23.8](https://github.com/josdejong/svelte-jsoneditor/compare/v0.23.7...v0.23.8) (2024-07-26)


### Bug Fixes

* revert the "text mode loads partially scrolled down" fix ([#471](https://github.com/josdejong/svelte-jsoneditor/issues/471)) ([38e7dd9](https://github.com/josdejong/svelte-jsoneditor/commit/38e7dd937ef182635b4f2ecbd796e0a2784889d6))

### [0.23.7](https://github.com/josdejong/svelte-jsoneditor/compare/v0.23.6...v0.23.7) (2024-06-06)


### Bug Fixes

* search and replace in table mode not working ([3f8a398](https://github.com/josdejong/svelte-jsoneditor/commit/3f8a3989108a6629cd46810e02da919c9bd1dfc5))

### [0.23.6](https://github.com/josdejong/svelte-jsoneditor/compare/v0.23.5...v0.23.6) (2024-06-05)


### Features

* update dependencies `codemirror`, `codemirror-indentation-markers`, `ajv`, `sass` ([1eb5c0b](https://github.com/josdejong/svelte-jsoneditor/commit/1eb5c0bc582b2bad4a233e90e5c75d2304009a6a))


### Bug Fixes

* [#436](https://github.com/josdejong/svelte-jsoneditor/issues/436) Ctrl+Click (Cmd+Click) not working on Mac ([7142783](https://github.com/josdejong/svelte-jsoneditor/commit/714278381fde46ac5abc828c744316291babbab5))

### [0.23.5](https://github.com/josdejong/svelte-jsoneditor/compare/v0.23.4...v0.23.5) (2024-05-30)


### Features

* upgrade dependencies `codemirror`, `ajv`, `jsonrepair`, and update dev dependencies ([999acfc](https://github.com/josdejong/svelte-jsoneditor/commit/999acfc28b4c3bbb3475052373925bd3432ffc52))


### Bug Fixes

* cleanup wrong classname `jse-readonly-password` attached to all values ([eabbeb2](https://github.com/josdejong/svelte-jsoneditor/commit/eabbeb299c82513c8fec141db64dc61b55083359))
* make platform detection more robust and future proof ([#435](https://github.com/josdejong/svelte-jsoneditor/issues/435)) ([776ff70](https://github.com/josdejong/svelte-jsoneditor/commit/776ff709c3588b6705795062bcc4933fe02360e3))

### [0.23.4](https://github.com/josdejong/svelte-jsoneditor/compare/v0.23.3...v0.23.4) (2024-05-09)


### Bug Fixes

* cannot use middle mouse button to scroll ([d0e7f4c](https://github.com/josdejong/svelte-jsoneditor/commit/d0e7f4cce8046c1c0101127556378aa6da770122))
* update `jsonrepair` and other dependencies ([7b9063f](https://github.com/josdejong/svelte-jsoneditor/commit/7b9063fb65c8703e654cf6489e09f4d6d6898f4e))

### [0.23.3](https://github.com/josdejong/svelte-jsoneditor/compare/v0.23.2...v0.23.3) (2024-05-06)


### Features

* update `codemirror`, `ajv`, `fontawesome`, `jsonrepair`, and dev dependencies ([7bd08e7](https://github.com/josdejong/svelte-jsoneditor/commit/7bd08e7021b2a8c5067ab346859f613457edcd44))


### Bug Fixes

* text mode loads partially scrolled down ([56e18ee](https://github.com/josdejong/svelte-jsoneditor/commit/56e18ee0573e4af7731a725133e93dc179e2857e))

### [0.23.2](https://github.com/josdejong/svelte-jsoneditor/compare/v0.23.1...v0.23.2) (2024-04-17)


### Bug Fixes

* [#423](https://github.com/josdejong/svelte-jsoneditor/issues/423) error about an invalid selection in text mode when clearing the contents ([5ed8a86](https://github.com/josdejong/svelte-jsoneditor/commit/5ed8a86a6166064d8bd27af6299db18cdf762885))
* change text "fullscreen" to "full screen" ([a56415f](https://github.com/josdejong/svelte-jsoneditor/commit/a56415f5ed79890ec2a3ee885ac2df40cf7cef40))
* editor not getting focus when clicking in an empty area in table mode ([0e74043](https://github.com/josdejong/svelte-jsoneditor/commit/0e740432d55faf32929cac572be7a59465466ab5))

### [0.23.1](https://github.com/josdejong/svelte-jsoneditor/compare/v0.23.0...v0.23.1) (2024-03-28)


### Features

* fullscreen support for modals ([#420](https://github.com/josdejong/svelte-jsoneditor/issues/420)) ([160a739](https://github.com/josdejong/svelte-jsoneditor/commit/160a739f7deecc0544cd630e9a0a582b0403eb76))
* pass validation severity into UI ([#416](https://github.com/josdejong/svelte-jsoneditor/issues/416)) ([6cd6af9](https://github.com/josdejong/svelte-jsoneditor/commit/6cd6af9bedbbf564f0463dbbb383a9cd2f8b84c4)), closes [#369](https://github.com/josdejong/svelte-jsoneditor/issues/369) [#148](https://github.com/josdejong/svelte-jsoneditor/issues/148) [#150](https://github.com/josdejong/svelte-jsoneditor/issues/150)
* update dependencies (`codemirror`, `sass`, and dev dependencies) ([abf0468](https://github.com/josdejong/svelte-jsoneditor/commit/abf0468991bb7cfcbe9f81b68605e8b842ed64c6))


### Bug Fixes

* support pressing Esc to close the CopyPasteModal ([fb77efe](https://github.com/josdejong/svelte-jsoneditor/commit/fb77efef5f4a36ae4ff28694e836521fd8170101))
* update dependency `vanilla-picker` and update devDependencies ([b0ba13f](https://github.com/josdejong/svelte-jsoneditor/commit/b0ba13fb866aa2565a4bfd135dc8305ef51cf43d))

## [0.23.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.22.0...v0.23.0) (2024-03-13)


### ⚠ BREAKING CHANGES

* The `onRenderContextMenu` callback now also triggers when the editor is `readOnly`,
so you now have to handle that case in the callback.

### Features

* [#399](https://github.com/josdejong/svelte-jsoneditor/issues/399) enable onRenderContextMenu when the editor is readOnly ([#411](https://github.com/josdejong/svelte-jsoneditor/issues/411)) ([db3fb57](https://github.com/josdejong/svelte-jsoneditor/commit/db3fb57dc62210b906628cfba1287808bf5bd304))
* extend the contexts of `onRenderMenu` and `onRenderContextMenu` with a prop `readOnly` ([#411](https://github.com/josdejong/svelte-jsoneditor/issues/411)) ([4df5548](https://github.com/josdejong/svelte-jsoneditor/commit/4df55481a17c22211538df1cd289faec3af25177))
* search and replace in table mode ([#415](https://github.com/josdejong/svelte-jsoneditor/issues/415)) ([0860f3e](https://github.com/josdejong/svelte-jsoneditor/commit/0860f3ea422a09eb21e84a345a9bccada7866c6b))


### Bug Fixes

* cannot convert an Array into an Object ([4b3af48](https://github.com/josdejong/svelte-jsoneditor/commit/4b3af488faa29704f3e74d451b8af9d0434f1273))
* context menu not closing when clicking a button in a dropdown menu ([e2c419a](https://github.com/josdejong/svelte-jsoneditor/commit/e2c419acb31d23257e37911117d50ae0d26697d2))
* disable all relevant context menu buttons when readOnly (see [#411](https://github.com/josdejong/svelte-jsoneditor/issues/411)) ([c66ee09](https://github.com/josdejong/svelte-jsoneditor/commit/c66ee09165587800c3c734af6af683026ac2f8c1))
* disable wrapped line indent when using tabs because that doesn't work well ([2a067e1](https://github.com/josdejong/svelte-jsoneditor/commit/2a067e1551d2881b2977726a1dcfb6ed6d045504))
* editor not getting focus when clicking inside the welcome screen of table mode ([919a31e](https://github.com/josdejong/svelte-jsoneditor/commit/919a31ecd5912a43eb964197c23f0811d7c202ea))
* insert an object or array in tree mode in an empty document not working ([5382e1c](https://github.com/josdejong/svelte-jsoneditor/commit/5382e1ce75b46b5b84fd8fc76764a7a5e9b03a62))
* status bar not visible when caret is at the start of the document ([dca87f0](https://github.com/josdejong/svelte-jsoneditor/commit/dca87f02800f2b16c311a013581d2ba4db31518f))
* table row actions not disabled in the table mode context menu when having an empty document ([7123249](https://github.com/josdejong/svelte-jsoneditor/commit/7123249d28eecae4e9a6875760d63fb47fabbcdd))

## [0.22.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.21.6...v0.22.0) (2024-03-01)


### ⚠ BREAKING CHANGES

* The `onChange` callback is no longer triggered on programmatic changes via a
two-way binded `content` or via methods `.update()`, `.set()`, and `.patch()`.

### Features

* do not trigger onChange on programmatic changes ([#410](https://github.com/josdejong/svelte-jsoneditor/issues/410)) ([201f602](https://github.com/josdejong/svelte-jsoneditor/commit/201f6020c4022001b41b7c459e2d809808828543))
* document the requirement for immutable changes in `content` (see [#318](https://github.com/josdejong/svelte-jsoneditor/issues/318)) ([0545e64](https://github.com/josdejong/svelte-jsoneditor/commit/0545e647b9c0e68edecbaf7c8f65d51d64de99a4))
* update dependencies (a.o. fixing an issue with wrapping tab indented lines) ([1bd92e7](https://github.com/josdejong/svelte-jsoneditor/commit/1bd92e73fb95bb2cd0ded15d1fa0fd02b5959303))


### Bug Fixes

* add missing property `onSelect` to interface `JSONEditorPropsOptional` ([4087e3f](https://github.com/josdejong/svelte-jsoneditor/commit/4087e3fa9e2f9243c95e8ff6fb7c46c4c67fb61f))
* improve the logic to determine whether a JSON document needs formatting ([bb15bd1](https://github.com/josdejong/svelte-jsoneditor/commit/bb15bd1d30998d7490a53cf58a03cfc7b95f8935))
* onCreateMenu and onCreateContextMenu possibly applying mutated changes without returning ([da8fd60](https://github.com/josdejong/svelte-jsoneditor/commit/da8fd6093de81daff47847cb1c50992b3f23fdbd))

### [0.21.6](https://github.com/josdejong/svelte-jsoneditor/compare/v0.21.5...v0.21.6) (2024-02-15)


### Features

* upgrade `codemirror`, `jsonrepair`, `svelte`, `svelte-simple-modal`, and dev dependencies ([3255741](https://github.com/josdejong/svelte-jsoneditor/commit/32557411017739e9f92a1550d2b7a75113ca9692))


### Bug Fixes

* improve the logic to determine whether a JSON document needs formatting ([0ca8a49](https://github.com/josdejong/svelte-jsoneditor/commit/0ca8a493e42a3dbaa2d9560ba772dc12c9ef50ab))
* type definition of `JSONEditorPropsOptional.flattenColumns` ([3a28757](https://github.com/josdejong/svelte-jsoneditor/commit/3a28757a08abc4b1805c1c22e3245fce696ef31c))
* type definition of RenderMenuContext.mode ([51a7133](https://github.com/josdejong/svelte-jsoneditor/commit/51a7133778f542a5d634165cf7772fee17332647))

### [0.21.5](https://github.com/josdejong/svelte-jsoneditor/compare/v0.21.4...v0.21.5) (2024-02-05)


### Features

* implement support for vanilla JS components in `onRenderValue` using Svelte Action ([#398](https://github.com/josdejong/svelte-jsoneditor/issues/398)) ([db482ea](https://github.com/josdejong/svelte-jsoneditor/commit/db482eae3cfe3d902ee66ae1f094ae30d12f1e5b))


### Bug Fixes

* [#392](https://github.com/josdejong/svelte-jsoneditor/issues/392) property `onRenderContextMenu` missing in `JSONEditorPropsOptional` ([ee9b4c9](https://github.com/josdejong/svelte-jsoneditor/commit/ee9b4c9199c11f535b94eab145ccac4d83312afa))
* [#401](https://github.com/josdejong/svelte-jsoneditor/issues/401) original data can be mutated by the TransformModal previews ([337f812](https://github.com/josdejong/svelte-jsoneditor/commit/337f81234b1f72bbd2ab5c89338689ddacdb825a))
* consistently use selectedJson in the TransformModal ([ac31a79](https://github.com/josdejong/svelte-jsoneditor/commit/ac31a7980d77eae3c5ff3eef0d932f4b3362bdca))
* use `flex-start` instead of `start` for `align-items` ([#395](https://github.com/josdejong/svelte-jsoneditor/issues/395)) ([b8be1a5](https://github.com/josdejong/svelte-jsoneditor/commit/b8be1a57f3a6e35673033e1fbb879997f5533e7c))

### [0.21.4](https://github.com/josdejong/svelte-jsoneditor/compare/v0.21.3...v0.21.4) (2024-01-24)


### Bug Fixes

* [#381](https://github.com/josdejong/svelte-jsoneditor/issues/381) method `.update()` throwing an exception when calling directly after creating the editor ([75c3b5e](https://github.com/josdejong/svelte-jsoneditor/commit/75c3b5e1c19347e98d86c367bebe5e688c4f3ea1))
* update `@codemirror/view` and dev dependencies ([3f2afef](https://github.com/josdejong/svelte-jsoneditor/commit/3f2afef38bb420bc4f21629ff5cb16e494b6d025))

### [0.21.3](https://github.com/josdejong/svelte-jsoneditor/compare/v0.21.2...v0.21.3) (2024-01-19)


### Bug Fixes

* [#381](https://github.com/josdejong/svelte-jsoneditor/issues/381) method `set()` sometimes throwing an error in `text` mode ([2dc62f0](https://github.com/josdejong/svelte-jsoneditor/commit/2dc62f04056ec352fe548323dda5819e423a25d5))
* [#391](https://github.com/josdejong/svelte-jsoneditor/issues/391) editor not supporting `Object.create(null)` as object ([918a126](https://github.com/josdejong/svelte-jsoneditor/commit/918a126789c61b8846505072642023a179418e90))
* update dependencies and devDependencies ([0d49b66](https://github.com/josdejong/svelte-jsoneditor/commit/0d49b66810fa76c4b2fe82021e9dc7b760150407))

### [0.21.2](https://github.com/josdejong/svelte-jsoneditor/compare/v0.21.1...v0.21.2) (2024-01-10)


### Features

* provide the current `selection` in `onRenderContextMenu` ([#376](https://github.com/josdejong/svelte-jsoneditor/issues/376)) ([2068823](https://github.com/josdejong/svelte-jsoneditor/commit/2068823bc302b7be47bfdc6e977cbe65b92e2794))
* update deps `codemirror`, `jsonrepair`, `sass`, `svelte-awesome`, `svelte-select`, and more ([63ac195](https://github.com/josdejong/svelte-jsoneditor/commit/63ac1950db57523d57446d43daecac69cb84d5a2))


### Bug Fixes

* [#379](https://github.com/josdejong/svelte-jsoneditor/issues/379) ContextMenu not closing after using a custom button via onRenderContextMenu ([2a83137](https://github.com/josdejong/svelte-jsoneditor/commit/2a8313759a9c6125369697bbe8cf335214399df5))
* [#386](https://github.com/josdejong/svelte-jsoneditor/issues/386) add a `standalone.d.ts` file to the `vanilla-jsoneditor` package ([4f8fa55](https://github.com/josdejong/svelte-jsoneditor/commit/4f8fa55fb4ed09ef112ddee3aab03429bf0a5ca9))
* improve performance of `isColor` detection (see [#378](https://github.com/josdejong/svelte-jsoneditor/issues/378)) ([514f6ca](https://github.com/josdejong/svelte-jsoneditor/commit/514f6cafdf4937d495670395028e0f326a585a9a))
* improve performance of `isColor` detection for long text values (See [#378](https://github.com/josdejong/svelte-jsoneditor/issues/378)) ([b1a04fc](https://github.com/josdejong/svelte-jsoneditor/commit/b1a04fce772a0fca4c14f1e3758a8ba5c7c77ad5))
* update dependency `jsonrepair` ([ec23521](https://github.com/josdejong/svelte-jsoneditor/commit/ec235216a1aee30fd880938dc82233a4731c2f0d))

### [0.21.1](https://github.com/josdejong/svelte-jsoneditor/compare/v0.21.0...v0.21.1) (2023-12-20)


### Bug Fixes

* add a module export again to the `svelte-jsoneditor` package ([0c695a4](https://github.com/josdejong/svelte-jsoneditor/commit/0c695a444a35b03b37c3a1981ba58c53e3be0159))

## [0.21.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.20.0...v0.21.0) (2023-12-20)


### ⚠ BREAKING CHANGES

* The type `Content` is changed from `{ json: JSONValue} | { text: string }` into 
`{ json: unknown } | { text: string }`, and all other types having `JSONValue` changed 
to `unknown`. The return type of `JSONParser.stringify` changed from `string` to 
`string | undefined`.

### Features

* change the type of `json` from `JSONValue` to `unknown` ([#371](https://github.com/josdejong/svelte-jsoneditor/issues/371)) ([dc4671a](https://github.com/josdejong/svelte-jsoneditor/commit/dc4671abaad7b2e8171caeffdbd83df157bf0196))
* implement `onRenderContextMenu` (fix [#82](https://github.com/josdejong/svelte-jsoneditor/issues/82)) ([e53a620](https://github.com/josdejong/svelte-jsoneditor/commit/e53a620b6babf5f0cc58a432d4ac89861e6b267f))
* upgrade to upgrade `@sveltejs/kit@2`, `vite-plugin-svelte@3`, `vite@5`, and `vitest@1` ([#374](https://github.com/josdejong/svelte-jsoneditor/issues/374)) ([b83e321](https://github.com/josdejong/svelte-jsoneditor/commit/b83e3214f8b4873f28247e0ee58a1f0c118d29f3))

## [0.20.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.19.0...v0.20.0) (2023-12-06)


### ⚠ BREAKING CHANGES

* When using `vanilla-jsoneditor` directly in the browser, you now have to `import { JSONEditor } from 'vanilla-jsoneditor/standalone.js'` instead of `import { JSONEditor } from 'vanilla-jsoneditor'`. For projects with a build setup (React, Vue, Angular) it should be a drop-in replacement.
* CSS variables are no longer defined globally, and the file `themes/jse-theme-default.css` is now removed (replaced by an internal `defaults.scss`). The provided dark theme still works as-is. The CSS variable `--jse-modal-theme-color` has been renamed to `--jse-modal-editor-theme-color`, and `--jse-modal-theme-color-highlight` has been renamed to `--jse-modal-editor-theme-color-highlight`.

### Features

* export one bundle with and one without external dependencies in `vanilla-jsoneditor` ([#353](https://github.com/josdejong/svelte-jsoneditor/issues/353)) ([9c1ad15](https://github.com/josdejong/svelte-jsoneditor/commit/9c1ad157a45f10d03fcc17f94ef0e82a66b5313e))
* update dependencies `codemirror`, `fontawesome`, `svelte-awesome`, and dev dependencies ([75596ae](https://github.com/josdejong/svelte-jsoneditor/commit/75596ae2639df022a6fb0954ca517450e6c50f4c))
* use SCSS variables internally ([#344](https://github.com/josdejong/svelte-jsoneditor/issues/344)) ([ec4b788](https://github.com/josdejong/svelte-jsoneditor/commit/ec4b788e493b3ea0acc787687a63b4ff4b987024))


### Bug Fixes

* allow `isEditing` property to be true when in `readOnly` mode (see [#342](https://github.com/josdejong/svelte-jsoneditor/issues/342)) ([3b0bdb7](https://github.com/josdejong/svelte-jsoneditor/commit/3b0bdb7d40a4814c2f9498c4a9607d639071745b))
* cleanup a console.log ([005f189](https://github.com/josdejong/svelte-jsoneditor/commit/005f1896d8d05772435194c8d80bdf1244edf249))
* make argument `element` of helper function `onEscape` optional ([6eb9b82](https://github.com/josdejong/svelte-jsoneditor/commit/6eb9b823cdace19b5d389f8fdf8fb09db21874b0))
* styling issue with a button text color in dark mode ([4ff40f9](https://github.com/josdejong/svelte-jsoneditor/commit/4ff40f97d4726a8afbdb736601b866ab5500af61))

## [0.19.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.18.13...v0.19.0) (2023-11-21)


### ⚠ BREAKING CHANGES

* Changes in the package exports

### Features

* additional classes for improved CSS targeting ([4392f2c](https://github.com/josdejong/svelte-jsoneditor/commit/4392f2c6523bfb5913615e8d954ceb579b70b99f))
* package exports not working in Jest ([77697b3](https://github.com/josdejong/svelte-jsoneditor/commit/77697b3962775e09cfe514ef16b51269618dc2d4))


### Bug Fixes

* [#334](https://github.com/josdejong/svelte-jsoneditor/issues/334) package exports not working in Jest ([3058c66](https://github.com/josdejong/svelte-jsoneditor/commit/3058c66c6536eaf2902f799a2e59054dbb7d4df2))
* wrong font in table mode ([dd448c5](https://github.com/josdejong/svelte-jsoneditor/commit/dd448c5fff9283a4d8d34da9e9afd0ebd9857173))

### [0.18.13](https://github.com/josdejong/svelte-jsoneditor/compare/v0.18.12...v0.18.13) (2023-11-13)


### Features

* update dependencies (`jsonrepair`, `@codemirror/autocomplete`) ([691072a](https://github.com/josdejong/svelte-jsoneditor/commit/691072af2ff76f4d3e864eaed033112814356fce))

### [0.18.12](https://github.com/josdejong/svelte-jsoneditor/compare/v0.18.11...v0.18.12) (2023-11-08)


### Features

* update to `jsonrepair@3.4.0` ([9ede6ea](https://github.com/josdejong/svelte-jsoneditor/commit/9ede6ea53c91e80e542c86e24dd3d34c70415cd8))


### Bug Fixes

* [#331](https://github.com/josdejong/svelte-jsoneditor/issues/331) changing contents during the `onChange` callback throws a selection error ([6e511fa](https://github.com/josdejong/svelte-jsoneditor/commit/6e511faf3a0e0b70a316efa5fc756c79893fa027))
* [#337](https://github.com/josdejong/svelte-jsoneditor/issues/337) some menu styling issues ([2eec4e6](https://github.com/josdejong/svelte-jsoneditor/commit/2eec4e6c4806a21a0badb32d04edd442baf6665e))
* `onChange` event not fired after calling `editor.set(...)` (see [#318](https://github.com/josdejong/svelte-jsoneditor/issues/318)) ([afaca42](https://github.com/josdejong/svelte-jsoneditor/commit/afaca423561360f307802d2eb3ed36a6d887a35f))
* update codemirror and a couple of devDependencies ([7173333](https://github.com/josdejong/svelte-jsoneditor/commit/71733336b6db16be61b77a4ec4301cff3b7707c7))
* use mono font in JSON Preview ([b07d08d](https://github.com/josdejong/svelte-jsoneditor/commit/b07d08d9c6bd6a13d797ba1fb51efc6b657e8947))

### [0.18.11](https://github.com/josdejong/svelte-jsoneditor/compare/v0.18.10...v0.18.11) (2023-10-31)


### Features

* update codemirror, jsonrepair, and other dependencies ([90d1b77](https://github.com/josdejong/svelte-jsoneditor/commit/90d1b774533b9a2c9716ef580eb0af045974ef56))


### Bug Fixes

* [#321](https://github.com/josdejong/svelte-jsoneditor/issues/321) editor not accepting JSON created in a different JavaScript realm like an iframe ([06fb84c](https://github.com/josdejong/svelte-jsoneditor/commit/06fb84cced17b5b603897e21f30c4c083015190d))
* bottom margin of welcome screen in tree and table mode ([7d1eb02](https://github.com/josdejong/svelte-jsoneditor/commit/7d1eb027abf8e7776d40d48c5371dc372af409ff))
* editor sometimes losing track on whether it has focus ([410f997](https://github.com/josdejong/svelte-jsoneditor/commit/410f997b075a274b6e8691db4c3831c71602dbe3))
* svelte giving warnings about creating components with unknown properties ([627170a](https://github.com/josdejong/svelte-jsoneditor/commit/627170a3e621a5ddb0abc1aa016b0a4334bc3837))

### [0.18.10](https://github.com/josdejong/svelte-jsoneditor/compare/v0.18.9...v0.18.10) (2023-10-17)


### Bug Fixes

* rename "whole document" to "document root" and "whole item" to "item root" to prevent confusion ([2699b71](https://github.com/josdejong/svelte-jsoneditor/commit/2699b71f2311d1670e29ccf41848bb283c52121d))

### [0.18.9](https://github.com/josdejong/svelte-jsoneditor/compare/v0.18.8...v0.18.9) (2023-10-11)


### Bug Fixes

* unused CSS selector warnings in Svelte ([23b82cc](https://github.com/josdejong/svelte-jsoneditor/commit/23b82cc022e15ccbcad6ca4d51ece52ca41682b4))

### [0.18.8](https://github.com/josdejong/svelte-jsoneditor/compare/v0.18.7...v0.18.8) (2023-10-02)


### Bug Fixes

* regression since v0.18.17 not allowing to put the cursor halfway the value when editing a value ([3e34e8d](https://github.com/josdejong/svelte-jsoneditor/commit/3e34e8daafe7fcd048e5bd3d75ce72ab877aaec2))

### [0.18.7](https://github.com/josdejong/svelte-jsoneditor/compare/v0.18.6...v0.18.7) (2023-09-28)


### Bug Fixes

* [#315](https://github.com/josdejong/svelte-jsoneditor/issues/315) cannot paste text in the search box input field in tree mode ([a9a2dc3](https://github.com/josdejong/svelte-jsoneditor/commit/a9a2dc32e22707d636b25587426a70518dcf069c))

### [0.18.6](https://github.com/josdejong/svelte-jsoneditor/compare/v0.18.5...v0.18.6) (2023-09-27)


### Bug Fixes

* broken import due to missing file extension ([0f734c5](https://github.com/josdejong/svelte-jsoneditor/commit/0f734c593e4784b3b39621c029ef614ac4350e50))

### [0.18.5](https://github.com/josdejong/svelte-jsoneditor/compare/v0.18.4...v0.18.5) (2023-09-27)


### Features

* update dependencies, most notably `jsonrepair` and `codemirror` ([f6306b0](https://github.com/josdejong/svelte-jsoneditor/commit/f6306b00ef6144d75593a98e0867b5a7c185156a))


### Bug Fixes

* [#312](https://github.com/josdejong/svelte-jsoneditor/issues/312) "Show me" button throwing an error when no position was provided in the error message ([d839e95](https://github.com/josdejong/svelte-jsoneditor/commit/d839e95c59ce18ff59ac0ad338019da9dc542a18))
* [#312](https://github.com/josdejong/svelte-jsoneditor/issues/312) the "Show me" button throwing an error when no position was provided in the error message ([36d7934](https://github.com/josdejong/svelte-jsoneditor/commit/36d79345b294e31bde53cb83b6586928c653601f))
* minor styling issues with modals ([97d2d94](https://github.com/josdejong/svelte-jsoneditor/commit/97d2d9407d6f389962ae59a808eb3353308232f2))
* update dependencies, most notably `codemirror` and `jsonrepair` ([439eb8a](https://github.com/josdejong/svelte-jsoneditor/commit/439eb8ae8a6a2dfe8fa8ec71f0d5c53e28b7c4a0))

### [0.18.4](https://github.com/josdejong/svelte-jsoneditor/compare/v0.18.3...v0.18.4) (2023-09-19)


### Features

* add indentation on wrapped lines ([#295](https://github.com/josdejong/svelte-jsoneditor/issues/295)) ([367accf](https://github.com/josdejong/svelte-jsoneditor/commit/367accfa261dd3dad72243d2d4648f6c186048e7))
* improve welcome screen with action buttons to create an array or object ([d4e301f](https://github.com/josdejong/svelte-jsoneditor/commit/d4e301fc9da408c700d2934719a30345522e05b9))


### Bug Fixes

* collapsed items section not removed when empty ([3d3ad45](https://github.com/josdejong/svelte-jsoneditor/commit/3d3ad456cfc436b0522de534846cb4b9da929ec3))
* creating an array or object or pasting content in the welcome screen not working ([7def339](https://github.com/josdejong/svelte-jsoneditor/commit/7def339d916150bc12243feccd266cbb2303b178))
* editor not getting focus in table mode when clicking inside an empty area ([609983d](https://github.com/josdejong/svelte-jsoneditor/commit/609983d3a6f9271fe26971c27424965fb9823405))
* select active element on undo only when existing ([e5beebf](https://github.com/josdejong/svelte-jsoneditor/commit/e5beebfdc4f082888c447364b12091d2ee8ecfa5))
* selection moving to value after renaming the last key of an object ([ac31282](https://github.com/josdejong/svelte-jsoneditor/commit/ac312821616329c5246ca50a17d607bb4d716f2e))
* some issues with navigating in `tree` mode using arrow keys ([a3f9c92](https://github.com/josdejong/svelte-jsoneditor/commit/a3f9c9234686b9363ac9e4b66c7dbf21950bda85))
* when inserting a new array or object in an empty editor, set selection inside the array/object ([821933e](https://github.com/josdejong/svelte-jsoneditor/commit/821933e3dfcbdde637ad78fb6d3c51e5ca6c66ee))
* when inserting a new value by typing somewhere, it doesn't initially have the right color ([9f6ea35](https://github.com/josdejong/svelte-jsoneditor/commit/9f6ea354270d88c67e3696e7fe8497fbf6852be2))

### [0.18.3](https://github.com/josdejong/svelte-jsoneditor/compare/v0.18.2...v0.18.3) (2023-08-30)


### Bug Fixes

* restore the selection when going back when having multiple JSONEditor modals ([085a9d3](https://github.com/josdejong/svelte-jsoneditor/commit/085a9d31de26f4f41ee04b5aab68f1f9164042c7))
* sometimes multiple cells selected in Table mode ([c7705f6](https://github.com/josdejong/svelte-jsoneditor/commit/c7705f6e99e6aba525bc7d17b26dc17add56645c))

### [0.18.2](https://github.com/josdejong/svelte-jsoneditor/compare/v0.18.1...v0.18.2) (2023-08-25)


### Bug Fixes

* [#304](https://github.com/josdejong/svelte-jsoneditor/issues/304) `ReadonlyValue.svelte` wrongly importing two moved types ([ed8b058](https://github.com/josdejong/svelte-jsoneditor/commit/ed8b05890fd149000ab67dc476cb5ceda59e7b7a))

### [0.18.1](https://github.com/josdejong/svelte-jsoneditor/compare/v0.18.0...v0.18.1) (2023-08-25)


### Bug Fixes

* [#300](https://github.com/josdejong/svelte-jsoneditor/issues/300) change the homepage in package.json to the Github repo ([b1977e5](https://github.com/josdejong/svelte-jsoneditor/commit/b1977e50475362278afc1e57eb2333bd69b5f69d))
* [#304](https://github.com/josdejong/svelte-jsoneditor/issues/304) missing type `JSONPointer` internally ([e23abbc](https://github.com/josdejong/svelte-jsoneditor/commit/e23abbc3690799f5a53600c109630de31f05f953))

## [0.18.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.17.10...v0.18.0) (2023-08-21)


### ⚠ BREAKING CHANGES

* - Upgraded to Svelte 4 providing improved TypeScript types.
- Dropped re-exporting types and utility functions from `immutable-json-patch`
  and `svelte`. Instead, import them directly from the library itself.
- Dropped deprecated types `FontAwesomeIcon` (use `IconDefinition` instead),
  `DropdownButtonItem`, `MenuButtonItem`, `MenuSeparatorItem`, `MenuSpaceItem`,
  and typeguard `isMenuSpaceItem`.
- The `vanilla-package` does not embed types of dependencies anymore and instead,
  imports the dependencies and use the types from there.
- Drop official support for Node.js 16

### Features

* describe breaking changes ([962dbf0](https://github.com/josdejong/svelte-jsoneditor/commit/962dbf0dc31def0d77840cca48f1429bdc892a03))
* upgrade to Svelte 4, improve TypeScript types ([4d0451e](https://github.com/josdejong/svelte-jsoneditor/commit/4d0451e981f3d6bc10ca338ed5c03b5b9a4f51fd))

### [0.17.10](https://github.com/josdejong/svelte-jsoneditor/compare/v0.17.9...v0.17.10) (2023-08-16)


### Bug Fixes

* [#301](https://github.com/josdejong/svelte-jsoneditor/issues/301) TransformModal broken (regression since `v0.17.9`) ([b13a52f](https://github.com/josdejong/svelte-jsoneditor/commit/b13a52f1a128069609b087d2c533e6d2d3dd30fe))

### [0.17.9](https://github.com/josdejong/svelte-jsoneditor/compare/v0.17.8...v0.17.9) (2023-08-14)


### Bug Fixes

* [#163](https://github.com/josdejong/svelte-jsoneditor/issues/163) implement method `.select()` and callback `onSelect` ([#299](https://github.com/josdejong/svelte-jsoneditor/issues/299)) ([69a9698](https://github.com/josdejong/svelte-jsoneditor/commit/69a96983a80e2fe9900739245b37c1eac622eab0))
* export all typeguard functions like `isMenuButton` ([53e671d](https://github.com/josdejong/svelte-jsoneditor/commit/53e671d0543eeaa8dd8bcbb020aacef26214e49c))
* resolve failed import in example "custom menu buttons" ([#287](https://github.com/josdejong/svelte-jsoneditor/issues/287)) ([8da09a4](https://github.com/josdejong/svelte-jsoneditor/commit/8da09a472efd10c052c154c56b5c5b8b68e4981e))

### [0.17.8](https://github.com/josdejong/svelte-jsoneditor/compare/v0.17.7...v0.17.8) (2023-06-21)


### Bug Fixes

* method `scrollTo` not always expanding an invisible section of an array ([bda3922](https://github.com/josdejong/svelte-jsoneditor/commit/bda39222fdcd9ec58a4c077dea4245c6fa6fe133))
* update dependencies (`codemirror`, `jsonrepair`, `sass`, and others) ([3054f96](https://github.com/josdejong/svelte-jsoneditor/commit/3054f964c52ddeb44b486dabb1a804c95c5395e7))

### [0.17.7](https://github.com/josdejong/svelte-jsoneditor/compare/v0.17.6...v0.17.7) (2023-06-13)


### Bug Fixes

* [#278](https://github.com/josdejong/svelte-jsoneditor/issues/278) cannot filter debugging output ([b2317a5](https://github.com/josdejong/svelte-jsoneditor/commit/b2317a5db900b77644d992f2f14c97e1de31c3c5))

### [0.17.6](https://github.com/josdejong/svelte-jsoneditor/compare/v0.17.5...v0.17.6) (2023-06-12)


### Features

* update dependencies and devDependencies ([fc8ef83](https://github.com/josdejong/svelte-jsoneditor/commit/fc8ef8340e1a6f825bf335000a7f4b70ce2c8182))


### Bug Fixes

* let `createAjvValidator` throw an error when the JSON schema contains an error ([7cfb233](https://github.com/josdejong/svelte-jsoneditor/commit/7cfb233d92862a34557537cef7840926976b40e1))
* unused CSS selector `".jse-column-header span.jse-column-sort-icon"` ([51c1d54](https://github.com/josdejong/svelte-jsoneditor/commit/51c1d5441085581402cc916e9479c2c91d5c068e))

### [0.17.5](https://github.com/josdejong/svelte-jsoneditor/compare/v0.17.4...v0.17.5) (2023-06-08)


### Bug Fixes

* keep focus on the editor after clicking a message action button ([aeb5d8f](https://github.com/josdejong/svelte-jsoneditor/commit/aeb5d8f9da13054cdd61cc866edad7b3f128eb66))
* start typing in an empty document in tree mode throwing an error ([747f2b4](https://github.com/josdejong/svelte-jsoneditor/commit/747f2b4d78c5c30c0f08ac6fea4823ba6d537be2))
* throw an error when a custom Ajv instance provided via `onCreateAjv` is configured wrongly ([78771cd](https://github.com/josdejong/svelte-jsoneditor/commit/78771cd3a3326bbdb56f400648bafe3c306f6b65))

### [0.17.4](https://github.com/josdejong/svelte-jsoneditor/compare/v0.17.3...v0.17.4) (2023-05-18)


### Bug Fixes

* [#275](https://github.com/josdejong/svelte-jsoneditor/issues/275) flush debounced changes in `text` mode before blur and destroy ([e8270e9](https://github.com/josdejong/svelte-jsoneditor/commit/e8270e99354cc965dea209a23f60dd5c9000ca57))

### [0.17.3](https://github.com/josdejong/svelte-jsoneditor/compare/v0.17.2...v0.17.3) (2023-05-05)


### Features

* update dependencies (jsonrepair and dev dependencies) ([d2c424a](https://github.com/josdejong/svelte-jsoneditor/commit/d2c424a14997d515b1cee4d26d0e30b7bbae1c1e))

### [0.17.2](https://github.com/josdejong/svelte-jsoneditor/compare/v0.17.1...v0.17.2) (2023-05-03)


### Features

* update dependencies (codemirror, sass) ([aeb9af5](https://github.com/josdejong/svelte-jsoneditor/commit/aeb9af585753a6847e5239afefbbf6b985d3e6c6))


### Bug Fixes

* [#238](https://github.com/josdejong/svelte-jsoneditor/issues/238) editor scrolls the browser page to top on Safari when getting focus ([20129f8](https://github.com/josdejong/svelte-jsoneditor/commit/20129f87e43e639c75b70383771d11e2df6431e7))

### [0.17.1](https://github.com/josdejong/svelte-jsoneditor/compare/v0.17.0...v0.17.1) (2023-04-17)


### Features

* make the option `askToFormat` configurable (fix [#252](https://github.com/josdejong/svelte-jsoneditor/issues/252)) ([5e5494f](https://github.com/josdejong/svelte-jsoneditor/commit/5e5494f97da667dc5c8295665dc263b48867f077))


### Bug Fixes

* [#142](https://github.com/josdejong/svelte-jsoneditor/issues/142) cannot select contents in readOnly text mode ([99922dc](https://github.com/josdejong/svelte-jsoneditor/commit/99922dc3f5f981a742bb2a2b31151bfe1c09ecb3))
* [#251](https://github.com/josdejong/svelte-jsoneditor/issues/251) enable search in text mode when readOnly ([50f8889](https://github.com/josdejong/svelte-jsoneditor/commit/50f8889597466ec8027c07dda3d4e613684aa9dc))
* update dependencies (`jsonrepair` and `@codemirror/view`) ([5ff1306](https://github.com/josdejong/svelte-jsoneditor/commit/5ff130610867d69832722cd3b9b4b9ac40d4e57d))

## [0.17.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.16.1...v0.17.0) (2023-04-17)


### ⚠ BREAKING CHANGES

* The pointers to entry files and the exports map in the package.json file have been changed. This is just an under-the-hood change for most use cases.

### Features

* change `stringifyJSONPath` and `parseJSONPath` to have a more human friendly output ([f0f8b80](https://github.com/josdejong/svelte-jsoneditor/commit/f0f8b805873c6c0ba48340df236755963eacf93e))
* update dependencies and devDependencies ([f32281f](https://github.com/josdejong/svelte-jsoneditor/commit/f32281f37c1780a8bca047a16d31e4b2083542e9))
* update dependencies including @sveltejs/package, changing the package structure ([#258](https://github.com/josdejong/svelte-jsoneditor/issues/258)) ([78603d4](https://github.com/josdejong/svelte-jsoneditor/commit/78603d4e47549c45530c4763b95a1364d7144f94))

### [0.16.1](https://github.com/josdejong/svelte-jsoneditor/compare/v0.16.0...v0.16.1) (2023-03-24)


### Bug Fixes

* change the row numbering in table mode to zero based for consistency ([d923268](https://github.com/josdejong/svelte-jsoneditor/commit/d923268b2d550e2779051bb43b08d3daee8f91fe))
* give the optional `rootPath` option of `transform` a default value ([b38db6c](https://github.com/josdejong/svelte-jsoneditor/commit/b38db6c1e3b3b7ff87a92bd61049a5a193ac713a))

## [0.16.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.15.1...v0.16.0) (2023-03-15)


### ⚠ BREAKING CHANGES

* Methods `set`, `update`, `patch`, `expand`, `acceptAutoRepair`, `scrollTo`, `focus`, `refresh`,
`updateProps` and `destroy` are now async and return a Promise.

### Features

* implement the public method `scrollTo` for mode `table` ([a615548](https://github.com/josdejong/svelte-jsoneditor/commit/a615548aa26470d0535d1e1ddb781654b44f3315))
* update dependencies `svelte-awesome` and `svelte-select` and some devDependencies ([05acdcf](https://github.com/josdejong/svelte-jsoneditor/commit/05acdcfaf03b69aae3a82f10bf2bc3532ebe61c1))


### Bug Fixes

* [#189](https://github.com/josdejong/svelte-jsoneditor/issues/189) setup eslint to enforce `.js` file extensions on all imports ([cf37451](https://github.com/josdejong/svelte-jsoneditor/commit/cf37451e46c56e637924095ab11d6883ade08289))
* [#236](https://github.com/josdejong/svelte-jsoneditor/issues/236) change the public methods to return a Promise`, resolving after the editor is re-rendered ([dbfb1a6](https://github.com/josdejong/svelte-jsoneditor/commit/dbfb1a68a3104b38dbb45338fc1fdae075038930))
* [#237](https://github.com/josdejong/svelte-jsoneditor/issues/237) parse error in case of empty text, and parse error not cleared on change ([31e9e50](https://github.com/josdejong/svelte-jsoneditor/commit/31e9e50f461cc8bd21d746df1948d645f7d5e118))

### [0.15.1](https://github.com/josdejong/svelte-jsoneditor/compare/v0.15.0...v0.15.1) (2023-03-01)


### Bug Fixes

* missing .js extension on import ([ae66310](https://github.com/josdejong/svelte-jsoneditor/commit/ae663106b68fa880c47fbdbed33032c696d8aa28))

## [0.15.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.14.10...v0.15.0) (2023-03-01)


### ⚠ BREAKING CHANGES

* when there are no validation errors, the return value of
method `validate()` and parameter `contentErrors` in callback `onChange` is
now `null` instead of `{ validationErrors: [] }`.

### Features

* faster `getColumns` without sampling ([0937718](https://github.com/josdejong/svelte-jsoneditor/commit/0937718fb5c30b996a955aa24ca336163d92877c))
* sample the array to detect headers (fast) and have a button to enforce checking all items ([452d168](https://github.com/josdejong/svelte-jsoneditor/commit/452d168595eef1b24d38d9c97f7d74eadb5ee243))


### Bug Fixes

* [#226](https://github.com/josdejong/svelte-jsoneditor/issues/226) return `null` instead of `{ validationErrors: [] }` when there are no validation errors ([395dbd1](https://github.com/josdejong/svelte-jsoneditor/commit/395dbd10b0fac21876b500295668bc0b5ef94010))
* [#231](https://github.com/josdejong/svelte-jsoneditor/issues/231) code mode grabbing focus on creation ([5df57ee](https://github.com/josdejong/svelte-jsoneditor/commit/5df57eea7a8c6600efb4f8f1a41ad338fce77e0a))
* update dependencies and devDependencies ([9275c34](https://github.com/josdejong/svelte-jsoneditor/commit/9275c3494e4fcf45bd370f9ff77554d9193db4ac))

### [0.14.10](https://github.com/josdejong/svelte-jsoneditor/compare/v0.14.9...v0.14.10) (2023-02-24)


### Features

* implement an "Edit row" action in the context menu of table mode ([4211a14](https://github.com/josdejong/svelte-jsoneditor/commit/4211a14ffaa4b64b58ff4ecbbde18e232bf9c48e))


### Bug Fixes

* [#226](https://github.com/josdejong/svelte-jsoneditor/issues/226) export typeguards `isContentParseError` and `isContentValidationErrors` ([0c8189f](https://github.com/josdejong/svelte-jsoneditor/commit/0c8189fadd74af83a3a17aa7b6efdf0c95ef1561))
* table mode broken due to a wrong import (regression since v0.14.6) ([1e48fe5](https://github.com/josdejong/svelte-jsoneditor/commit/1e48fe50ac2ed613682330e628b1dcfbc224c0c5))

### [0.14.9](https://github.com/josdejong/svelte-jsoneditor/compare/v0.14.8...v0.14.9) (2023-02-22)


### Bug Fixes

* throw an error when forgetting to end a Lodash `_.chain(...)` with `.value()` ([f76e4e8](https://github.com/josdejong/svelte-jsoneditor/commit/f76e4e8bf047680835a34cc5236e3b19d4df9f73))

### [0.14.8](https://github.com/josdejong/svelte-jsoneditor/compare/v0.14.7...v0.14.8) (2023-02-22)


### Bug Fixes

* ensure dark indentation markers when using dark theme ([f7b936e](https://github.com/josdejong/svelte-jsoneditor/commit/f7b936ef65293813a9e744b12123101d80a08e78))

### [0.14.7](https://github.com/josdejong/svelte-jsoneditor/compare/v0.14.6...v0.14.7) (2023-02-22)


### Bug Fixes

* some imports missing a .js extension ([5493931](https://github.com/josdejong/svelte-jsoneditor/commit/5493931681b49ade593777561b52da24213adfcd))

### [0.14.6](https://github.com/josdejong/svelte-jsoneditor/compare/v0.14.5...v0.14.6) (2023-02-22)


### Features

* add indentation guide line in text mode (fixes [#225](https://github.com/josdejong/svelte-jsoneditor/issues/225)) ([09f2575](https://github.com/josdejong/svelte-jsoneditor/commit/09f257568567eb1b01ff68b955d69bebe54cff95))
* change the JavaScript and Lodash query languages to generate immutable, chained queries ([3e92c10](https://github.com/josdejong/svelte-jsoneditor/commit/3e92c1048791f44d58c8b1636bb0e1bfeb914c74))


### Bug Fixes

* jmespathQueryLanguage not working with non-native JSON data types like LosslessNumber ([e2c8e3d](https://github.com/josdejong/svelte-jsoneditor/commit/e2c8e3dfc9242f4883dd3f1261a0b5a0b6abd71c))

### [0.14.5](https://github.com/josdejong/svelte-jsoneditor/compare/v0.14.4...v0.14.5) (2023-02-15)


### Features

* update dependencies and devDependencies ([d0e2568](https://github.com/josdejong/svelte-jsoneditor/commit/d0e2568540efcc7d2066044bbd2d3673902fe6c6))


### Bug Fixes

* styling issues of the selection dropdown in dark mode ([886330e](https://github.com/josdejong/svelte-jsoneditor/commit/886330e75879ccdd383a9f324646b96ae9406019))
* the "Pick" field in the Transform Wizard not restoring the previously selected fields correctly ([635f662](https://github.com/josdejong/svelte-jsoneditor/commit/635f6624c21a194b5ce96805c9c3a12f1238b234))

### [0.14.4](https://github.com/josdejong/svelte-jsoneditor/compare/v0.14.3...v0.14.4) (2023-02-03)


### Features

* add a "Show me" button to the message of the parse error ([347910a](https://github.com/josdejong/svelte-jsoneditor/commit/347910a675578f724b7188a8ff901611944cbafe))
* show a message "Do you want to format the JSON?" when loading compact JSON ([42c6c95](https://github.com/josdejong/svelte-jsoneditor/commit/42c6c95ecdc8a8856e67d7ef1753693627aee8de))


### Bug Fixes

* [#219](https://github.com/josdejong/svelte-jsoneditor/issues/219) horizontal scrollbar visible in search box ([d3ffdef](https://github.com/josdejong/svelte-jsoneditor/commit/d3ffdef065e2dcb98fe1cae981e741fbfa136d08))
* improve styling of the message text ([e8a86d9](https://github.com/josdejong/svelte-jsoneditor/commit/e8a86d97792993306700bdb447724a287993da7f))

### [0.14.3](https://github.com/josdejong/svelte-jsoneditor/compare/v0.14.2...v0.14.3) (2023-01-27)


### Bug Fixes

* creating a new object or array by typing `{` or `]` broken (regression since `v0.14.1`) ([f7b5f92](https://github.com/josdejong/svelte-jsoneditor/commit/f7b5f925d7ae64aadad34007b82abc239127f537))

### [0.14.2](https://github.com/josdejong/svelte-jsoneditor/compare/v0.14.1...v0.14.2) (2023-01-26)


### Features

* expose utility actions `resizeObserver` and `onEscape` ([c705ea2](https://github.com/josdejong/svelte-jsoneditor/commit/c705ea2bb8fa22797b9078de9cadec726c85ab4a))

### [0.14.1](https://github.com/josdejong/svelte-jsoneditor/compare/v0.14.0...v0.14.1) (2023-01-26)


### Features

* implement duplicating, inserting, and removing rows in table mode ([9b691d1](https://github.com/josdejong/svelte-jsoneditor/commit/9b691d1536ba2d52b42e6da24b28a89b6bfb17ca))


### Bug Fixes

* close only the top modal instead of all modals on Escape ([b102843](https://github.com/josdejong/svelte-jsoneditor/commit/b102843dcc7ae411944ea745c4edd868a593dbde))
* editor cannot get focus by clicking selected key or value ([7e83a36](https://github.com/josdejong/svelte-jsoneditor/commit/7e83a36b1c9301ce965ba6cc874fe575f6525a75))
* improve detection of column names in large arrays with non-homogeneous data ([5704325](https://github.com/josdejong/svelte-jsoneditor/commit/5704325cfc2759e879a34de3e075cd0610d8f75c))
* maintain order of columns after sorting the contents ([23bbf56](https://github.com/josdejong/svelte-jsoneditor/commit/23bbf56db274062e5d03906963e7e24bbcaab78c))
* multi-select via Shift+Click not working in tree mode ([aafd933](https://github.com/josdejong/svelte-jsoneditor/commit/aafd933d48672cd2f37a9811183ca4f093fcd4d7))

## [0.14.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.13.1...v0.14.0) (2023-01-20)


### ⚠ BREAKING CHANGES

* Callback changed from `onRenderMenu(mode, items)` to `onRenderMenu(items, { mode, modal })`.

### Features

* add more context information to `onRenderMenu`: `mode` and `modal` ([fbbdb87](https://github.com/josdejong/svelte-jsoneditor/commit/fbbdb87548fa0e2d163fc5ad39367af54a13b4cc))

### [0.13.1](https://github.com/josdejong/svelte-jsoneditor/compare/v0.13.0...v0.13.1) (2023-01-20)


### Bug Fixes

* inserting a new character uppercase ([d836096](https://github.com/josdejong/svelte-jsoneditor/commit/d8360968d35b8469c51fa73f5af765b86bc55321))

## [0.13.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.12.0...v0.13.0) (2023-01-20)


### ⚠ BREAKING CHANGES

* CSS variable `--jse-selection-background-light-color` is renamed to `--jse-selection-background-inactive-color`

### Features

* more flexible styling for contents in tree mode with new CSS variables ([e29f85e](https://github.com/josdejong/svelte-jsoneditor/commit/e29f85e1d5ac77993117225c862b8c056ad9a4ad))


### Bug Fixes

* update dependencies and devDependencies ([008dcd6](https://github.com/josdejong/svelte-jsoneditor/commit/008dcd655b8e680cebff7d163daa19b0327c9662))

## [0.12.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.11.8...v0.12.0) (2023-01-18)


### ⚠ BREAKING CHANGES

* The TypeScript definitions of `createAjvValidator` and  `renderJSONSchemaEnum` are
changed: passing `JSONSchema` and `JSONSchemaDefinitions` instead of `JSONValue`.

### Bug Fixes

* [#210](https://github.com/josdejong/svelte-jsoneditor/issues/210) `renderJSONSchemaEnum` not working enums inside an array ([887bf23](https://github.com/josdejong/svelte-jsoneditor/commit/887bf23c6aeb63de3a75b677f0545a51efc3c449))
* cannot click the bottom right quarter of the context menu pointer ([b176f01](https://github.com/josdejong/svelte-jsoneditor/commit/b176f0101d3f860d54faa7c433050f69d28daa72))
* minor updates of dependencies and devDependencies ([c654ed7](https://github.com/josdejong/svelte-jsoneditor/commit/c654ed7074ea01335f8a5db0e2fd447793a03bf4))
* remove test files from the `svelte-jsoneditor` npm package ([fe21ffb](https://github.com/josdejong/svelte-jsoneditor/commit/fe21ffb8195417531e6f2103ffd0e9b2ff7e392c))
* switch from `ajv-dist` to `ajv` again (works ok now with rollup and vite) ([f43a5fb](https://github.com/josdejong/svelte-jsoneditor/commit/f43a5fb364c161daea507693110d67b96bb19b67))
* update dependencies and dev dependencies ([7229ae6](https://github.com/josdejong/svelte-jsoneditor/commit/7229ae62d7495614739de4593963707cbdd88e58))

### [0.11.8](https://github.com/josdejong/svelte-jsoneditor/compare/v0.11.7...v0.11.8) (2023-01-07)

### [0.11.7](https://github.com/josdejong/svelte-jsoneditor/compare/v0.11.6...v0.11.7) (2023-01-07)

### [0.11.6](https://github.com/josdejong/svelte-jsoneditor/compare/v0.11.5...v0.11.6) (2023-01-07)


### Bug Fixes

* upgrade to jsonrepair@3.0.2 and lossless-json@2.0.5 containing an issue with unicode characters ([22cb40e](https://github.com/josdejong/svelte-jsoneditor/commit/22cb40e6972c3e8a93a3bad8730b6e8e82b374b3))

### [0.11.5](https://github.com/josdejong/svelte-jsoneditor/compare/v0.11.4...v0.11.5) (2022-12-20)


### Features

* upgrade all dependencies, most notably `svelte-select@5, `@sveltejs/kit@1.0.0`, `vite@4.0.2` ([be135ee](https://github.com/josdejong/svelte-jsoneditor/commit/be135ee77c147e7dc59948955370973aa6c232db))
* upgrade to `jsonrepair@3.0.0`, improving performance and repairing more cases ([8a315cf](https://github.com/josdejong/svelte-jsoneditor/commit/8a315cf8bee311fc2fcf46d37954a26568e5765f))

### [0.11.4](https://github.com/josdejong/svelte-jsoneditor/compare/v0.11.3...v0.11.4) (2022-12-14)


### Bug Fixes

* method `scrollTo` not returning a promise anymore (regression since v0.11.0) ([524799f](https://github.com/josdejong/svelte-jsoneditor/commit/524799f8126f6b0f4bb36f5c81087b57d8af7496))

### [0.11.3](https://github.com/josdejong/svelte-jsoneditor/compare/v0.11.2...v0.11.3) (2022-12-13)


### Bug Fixes

* [#206](https://github.com/josdejong/svelte-jsoneditor/issues/206) remove the fixed width of the mode toggle buttons ([8e0cda3](https://github.com/josdejong/svelte-jsoneditor/commit/8e0cda3c1c91e97b1c41ff28c5b0ac80cf8c26ab))
* [#96](https://github.com/josdejong/svelte-jsoneditor/issues/96) add missing properties to `JSONEditorPropsOptional` ([410fd80](https://github.com/josdejong/svelte-jsoneditor/commit/410fd801297faa46afef201569bfd79792de17e1))
* [#96](https://github.com/josdejong/svelte-jsoneditor/issues/96) make all properties of JSONEditorPropsOptional optional ([4bc33e8](https://github.com/josdejong/svelte-jsoneditor/commit/4bc33e88450396a1860db43baabe15986bfc7cd1))
* cannot edit values of non-existing nested objects in table mode ([8127571](https://github.com/josdejong/svelte-jsoneditor/commit/8127571d74864587788811e08a64a5345d11ae19))
* improve landing page message in table mode when opening an array without values ([f238a92](https://github.com/josdejong/svelte-jsoneditor/commit/f238a9236740d261456a5f7841ef0de2ecc7fb74))

### [0.11.2](https://github.com/josdejong/svelte-jsoneditor/compare/v0.11.1...v0.11.2) (2022-12-09)


### Bug Fixes

* [#204](https://github.com/josdejong/svelte-jsoneditor/issues/204) unresolvable imports with `.ts` extension ([d45828b](https://github.com/josdejong/svelte-jsoneditor/commit/d45828b1d1f370ff25322ef1f5204c1050d4f60c))

### [0.11.1](https://github.com/josdejong/svelte-jsoneditor/compare/v0.11.0...v0.11.1) (2022-12-07)


### Bug Fixes

* table mode landing page not handling an empty array correctly ([4b4d039](https://github.com/josdejong/svelte-jsoneditor/commit/4b4d0398333d59d95d6fd3e28a67038c3b8781ac))

## [0.11.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.10.4...v0.11.0) (2022-12-07)


### ⚠ BREAKING CHANGES

* In the `TransformModalCallback`, the property `selectedPath` is renamed to `rootPath`. The css variables `--jse-context-menu-button-*` are renamed to `--jse-context-menu-pointer-*`.

### Features

* create a landing page for non-array content in table mode ([558d8c1](https://github.com/josdejong/svelte-jsoneditor/commit/558d8c1321b08de038623f158eab90d4875747f0))
* implement table mode [#156](https://github.com/josdejong/svelte-jsoneditor/issues/156) ([#202](https://github.com/josdejong/svelte-jsoneditor/issues/202)) ([6fde147](https://github.com/josdejong/svelte-jsoneditor/commit/6fde14780624888e648b807207346d11437ef9ba))


### Bug Fixes

* [#187](https://github.com/josdejong/svelte-jsoneditor/issues/187) duplicate id's of svg's ([b95ac82](https://github.com/josdejong/svelte-jsoneditor/commit/b95ac82f56f9565d9779bf8bd9186c9adfb3565d))
* support opening Sort and Transform modals from a JSONEditor modal ([4652c1f](https://github.com/josdejong/svelte-jsoneditor/commit/4652c1fe3b29b37638a2b2692099b58f49ae84a4))
* unnecessary z-index on the context menu pointer ([5a6b2f6](https://github.com/josdejong/svelte-jsoneditor/commit/5a6b2f65fb5b17e7306cafbf19f1c50003759dae))
* z-index issue with the table header ([8f6a7c7](https://github.com/josdejong/svelte-jsoneditor/commit/8f6a7c77fca5076152841da518a64c5f91652c60))

### [0.10.4](https://github.com/josdejong/svelte-jsoneditor/compare/v0.10.3...v0.10.4) (2022-12-05)


### Bug Fixes

* repair modal accidentally showing a mode toggle ([798f668](https://github.com/josdejong/svelte-jsoneditor/commit/798f668a63c4534ad008b209b9e0c03b31040fd3))
* update to `lossless-json@2.0.3`, fix throwing an error in case of bad characters like a newline ([7f7b59e](https://github.com/josdejong/svelte-jsoneditor/commit/7f7b59eac6a965b3c5238f934a4ab4d1b3af152c))

### [0.10.2](https://github.com/josdejong/svelte-jsoneditor/compare/v0.10.1...v0.10.2) (2022-11-17)


### Bug Fixes

* limit the number of rendered validation errors in the overview list ([b0ae546](https://github.com/josdejong/svelte-jsoneditor/commit/b0ae5461e8d69b7336bf1f1d8c4072c49280b15d))
* reset the selection instead of clearing it when the selected contents are removed ([7c937f5](https://github.com/josdejong/svelte-jsoneditor/commit/7c937f534fd625aca481a22138fc55c9a30b7d5f))

### [0.10.1](https://github.com/josdejong/svelte-jsoneditor/compare/v0.10.0...v0.10.1) (2022-11-10)


### Bug Fixes

* improve highlighting color of search matches in dark mode ([fb7bdd9](https://github.com/josdejong/svelte-jsoneditor/commit/fb7bdd93ee35c752711a9420a441d99981062983))

## [0.10.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.9.2...v0.10.0) (2022-11-10)


### ⚠ BREAKING CHANGES

* The signature of `createAjvValidator` is changed from up to three unnamed arguments
`createAjvValidator(schema, schemaDefinitions, ajvOptions)` to a single object with options
`createAjvValidator({ schema, schemaDefinitions, ajvOptions })`.

### Features

* implement `onCreateAjv` callback for the `createAjvValidator` plugin ([da3d76c](https://github.com/josdejong/svelte-jsoneditor/commit/da3d76ce4087464a0d66566f9239498bbff710fd))


### Bug Fixes

* [#188](https://github.com/josdejong/svelte-jsoneditor/issues/188) selected text not visible in text mode when in dark mode ([41856da](https://github.com/josdejong/svelte-jsoneditor/commit/41856da229912db510090049b47bae3543f996a3))
* improve highlighting color of search matches in dark mode ([b85c260](https://github.com/josdejong/svelte-jsoneditor/commit/b85c26002c376fd15b340e71b1e2225747785365))
* negative numbers like `-4.1` not highlighted with the right color in tree mode ([071c3f9](https://github.com/josdejong/svelte-jsoneditor/commit/071c3f9d248e18c5638c5352ca4a60fb227f639e))

### [0.9.2](https://github.com/josdejong/svelte-jsoneditor/compare/v0.9.1...v0.9.2) (2022-11-04)


### Bug Fixes

* incorrect cursor style for ColorPicker & BooleanToggle ([#184](https://github.com/josdejong/svelte-jsoneditor/issues/184)) ([12e60e5](https://github.com/josdejong/svelte-jsoneditor/commit/12e60e5b836f9294ea4a0b3bfe2384745c0509cf))
* remove root `$` prefix from the path in the Sort and Transform modal ([50ce3f0](https://github.com/josdejong/svelte-jsoneditor/commit/50ce3f04980a02164a4fa897afec942933e21db9))
* when switching to a different JSON parser, stringify and parse the contents again ([2cece4e](https://github.com/josdejong/svelte-jsoneditor/commit/2cece4ebc7dbd75dc28f743c5b3ea12470848e7d))

### [0.9.1](https://github.com/josdejong/svelte-jsoneditor/compare/v0.9.0...v0.9.1) (2022-11-02)


### Bug Fixes

* export and document all selection utility functions again (reverting their removal in `v0.9.0`) ([0dd1dee](https://github.com/josdejong/svelte-jsoneditor/commit/0dd1dee55983cb261911814870410a57be87590c))
* update codemirror dependencies and all devDependencies ([77cbb6d](https://github.com/josdejong/svelte-jsoneditor/commit/77cbb6d4fc95f3d0867a1117af682d6d534903f8))

## [0.9.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.8.0...v0.9.0) (2022-10-25)


### ⚠ BREAKING CHANGES

* Not exporting a set of undocumented utility functions anymore: `isValueSelection`,
`isKeySelection`, `isInsideSelection`, `isAfterSelection`, `isMultiSelection`,
`isEditingSelection`, `createValueSelection`, `createKeySelection`, `createInsideSelection`,
`createAfterSelection`, `createMultiSelection`. And not exporting components `SortModal` and
`TransformModal` anymore.

### Features

* export utility functions `isContent`, `isTextContent`, `isJSONContent`, `toTextContent`, ([d21fc6d](https://github.com/josdejong/svelte-jsoneditor/commit/d21fc6d09c731ad10702db58893ebce7aeadd744)), closes [#173](https://github.com/josdejong/svelte-jsoneditor/issues/173)


### Bug Fixes

* [#174](https://github.com/josdejong/svelte-jsoneditor/issues/174) the `OnChange` signature containing an `any` type instead of `OnChangeStatus` ([c2d626f](https://github.com/josdejong/svelte-jsoneditor/commit/c2d626f7204790cc86954dc535949dad50822cbd))
* `any` type in `JSONPathParser.parse` type definition ([19363b4](https://github.com/josdejong/svelte-jsoneditor/commit/19363b42cc98f702b04bb5cbaaa0a3b0b2edee4b))

## [0.8.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.7.11...v0.8.0) (2022-10-24)


### ⚠ BREAKING CHANGES

* The custom `FontAwesomeIcon` is now replaced with `IconDefinition` from FontAwesome

### Bug Fixes

* [#169](https://github.com/josdejong/svelte-jsoneditor/issues/169) use `IconDefinition` from FontAwesome instead of a custom interface `FontAwesomeIcon` ([9d693f9](https://github.com/josdejong/svelte-jsoneditor/commit/9d693f94ebeffa187a2f3ab8f85998b987be8b94))

### [0.7.11](https://github.com/josdejong/svelte-jsoneditor/compare/v0.7.10...v0.7.11) (2022-10-18)


### Features

* convert primitive values like a string into an object or array holding the value ([67d78f0](https://github.com/josdejong/svelte-jsoneditor/commit/67d78f09744f0ff4d879728f2d1b3aaa92fa5e8c)), closes [#160](https://github.com/josdejong/svelte-jsoneditor/issues/160)


### Bug Fixes

* correctly handle property names containing spaces and special characters in JMESPath ([8e7d3e8](https://github.com/josdejong/svelte-jsoneditor/commit/8e7d3e89dbd00edc045147b203f606171e0486b8))
* errors not displayed at the right position in text mode when `escapeUnicodeCharacters=true` ([8e7be40](https://github.com/josdejong/svelte-jsoneditor/commit/8e7be40778eb31f4fea51bf52e79803c411c1ebf))
* improve error message when using `content.text` wrongly (see [#166](https://github.com/josdejong/svelte-jsoneditor/issues/166)) ([cdad5fb](https://github.com/josdejong/svelte-jsoneditor/commit/cdad5fb8712cd45ca14333ded75adc5877410476))
* revert dev dependency `rollup-plugin-dts` to v4 too to have it work with rollup v2 ([2b183c7](https://github.com/josdejong/svelte-jsoneditor/commit/2b183c7bbb3003a7dfaa19404e1f76d005558236))

### [0.7.10](https://github.com/josdejong/svelte-jsoneditor/compare/v0.7.9...v0.7.10) (2022-10-13)


### Features

* implement a path editor in the Navigation Bar ([#164](https://github.com/josdejong/svelte-jsoneditor/issues/164)) ([9692634](https://github.com/josdejong/svelte-jsoneditor/commit/969263447d080eef830755744363d547365ef1d4))


### Bug Fixes

* [#162](https://github.com/josdejong/svelte-jsoneditor/issues/162) clicking the color picker causes a form submit ([42f2586](https://github.com/josdejong/svelte-jsoneditor/commit/42f25865e8dd61b574d663a72ac6ba643f21bd1a))
* show paths in Sort modal as a JSONPath (dot separated) instead of JSONPointer ([3cde53d](https://github.com/josdejong/svelte-jsoneditor/commit/3cde53d6e34d195eb050dc1bdc35d383f06a0f7d))

### [0.7.9](https://github.com/josdejong/svelte-jsoneditor/compare/v0.7.8...v0.7.9) (2022-09-30)


### Bug Fixes

* [#123](https://github.com/josdejong/svelte-jsoneditor/issues/123) use the main `parser` instead of `validationParser` to determine any parse errors ([c18ede3](https://github.com/josdejong/svelte-jsoneditor/commit/c18ede30070f27a612b8019a77feaca97500e1bf))

### [0.7.8](https://github.com/josdejong/svelte-jsoneditor/compare/v0.7.7...v0.7.8) (2022-09-29)


### Bug Fixes

* [#153](https://github.com/josdejong/svelte-jsoneditor/issues/153) code using a missing dependency `lossless-json` ([4a34214](https://github.com/josdejong/svelte-jsoneditor/commit/4a34214703843f0af6a0253652649cc33083b746))

### [0.7.7](https://github.com/josdejong/svelte-jsoneditor/compare/v0.7.6...v0.7.7) (2022-09-29)


### Features

* implemented options `parser` and `validationParser` to support alternative JSON parsers like lossless-json ([#151](https://github.com/josdejong/svelte-jsoneditor/issues/151)) ([b47368b](https://github.com/josdejong/svelte-jsoneditor/commit/b47368b7de4c90bab89572210c869eaba64348a7))

### [0.7.6](https://github.com/josdejong/svelte-jsoneditor/compare/v0.7.5...v0.7.6) (2022-09-28)


### Bug Fixes

* [#149](https://github.com/josdejong/svelte-jsoneditor/issues/149) double quote and unicode characters of control characters not being escaped correctly ([ab213e6](https://github.com/josdejong/svelte-jsoneditor/commit/ab213e6cf276d5556f675ccfd73d8b8265b40283))
* escaping unicode characters not triggered when loading a document in text mode ([9dedca0](https://github.com/josdejong/svelte-jsoneditor/commit/9dedca039faa887805bd4b0755276c09d3671a45))

### [0.7.5](https://github.com/josdejong/svelte-jsoneditor/compare/v0.7.4...v0.7.5) (2022-09-21)


### Bug Fixes

* [#98](https://github.com/josdejong/svelte-jsoneditor/issues/98) make copy compatible on non-secure origins and older browser ([#144](https://github.com/josdejong/svelte-jsoneditor/issues/144)) ([d43a646](https://github.com/josdejong/svelte-jsoneditor/commit/d43a6465cd01f91fe8d1634038dfcf67fa578c81))

### [0.7.4](https://github.com/josdejong/svelte-jsoneditor/compare/v0.7.3...v0.7.4) (2022-09-12)


### Bug Fixes

* [#130](https://github.com/josdejong/svelte-jsoneditor/issues/130) do not open mobile keyboard when the editor is readonly ([1c669fa](https://github.com/josdejong/svelte-jsoneditor/commit/1c669fa731468bcabdcd72935fff468511a6fe5b))
* [#138](https://github.com/josdejong/svelte-jsoneditor/issues/138) text of tooltip in text mode not readable when using a dark theme ([5e7790e](https://github.com/josdejong/svelte-jsoneditor/commit/5e7790e6fec93b9a8f6646ab4a064d12f9f74762))
* [#139](https://github.com/josdejong/svelte-jsoneditor/issues/139) cannot use numpad keyboard to enter numbers in tree mode ([e2383d9](https://github.com/josdejong/svelte-jsoneditor/commit/e2383d94d2e51dc8d774122deb05ef0092095851))
* inserting non capital case characters ([861f36d](https://github.com/josdejong/svelte-jsoneditor/commit/861f36db8a5f725e7716a34d72c7743659b8c823))
* let `text` mode not change json contents directly into text contents, and prevent freezing when loading a large document ([#141](https://github.com/josdejong/svelte-jsoneditor/issues/141)) ([28b2b56](https://github.com/josdejong/svelte-jsoneditor/commit/28b2b5687d899533e45248eb76afef6aa8d10594))

### [0.7.3](https://github.com/josdejong/svelte-jsoneditor/compare/v0.7.2...v0.7.3) (2022-09-09)


### Bug Fixes

* circular dependency caused by an unused import ([65a4f5d](https://github.com/josdejong/svelte-jsoneditor/commit/65a4f5d6041b3fd5de0eebc57b9603a0112c01f2))

### [0.7.2](https://github.com/josdejong/svelte-jsoneditor/compare/v0.7.1...v0.7.2) (2022-09-09)


### Features

* update all dependencies ([dff38e3](https://github.com/josdejong/svelte-jsoneditor/commit/dff38e3ad7ec490e6fe34ef584f1622e8cae7b2f))


### Bug Fixes

* mark the package as side-effects free, allowing better optimization in bundlers ([23c1816](https://github.com/josdejong/svelte-jsoneditor/commit/23c1816ea3518360f3f0fd13ebf7acd9abb6d5a5))

### [0.7.1](https://github.com/josdejong/svelte-jsoneditor/compare/v0.7.0...v0.7.1) (2022-09-05)


### Bug Fixes

* `onChange` event being fired when creating the editor in tree mode ([83e22f7](https://github.com/josdejong/svelte-jsoneditor/commit/83e22f74ab73260df0352235c0528b34a3ca5b19))

## [0.7.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.6.6...v0.7.0) (2022-09-01)


### ⚠ BREAKING CHANGES

* Formerly, `onChange` did only fire after a change made by a user. Now, `onChange` also fires 
after programmatic changes: when changing props or calling `patch`, `set`, `update`.

### Features

* always fire onChange, and let onPatch return a PatchResult (fixes [#128](https://github.com/josdejong/svelte-jsoneditor/issues/128)) ([fb45518](https://github.com/josdejong/svelte-jsoneditor/commit/fb4551805c796137ea85b90f6e00603a6244eeaa))
* update dependencies ([#135](https://github.com/josdejong/svelte-jsoneditor/issues/135)) ([c2e8e0a](https://github.com/josdejong/svelte-jsoneditor/commit/c2e8e0a29d01ad848518cce7dd1226bc7509f499))


### Bug Fixes

* expanded state sometimes being reset when syncing content ([a6cce69](https://github.com/josdejong/svelte-jsoneditor/commit/a6cce69df27921d015a19957152a447ad1ea52b0))

### [0.6.6](https://github.com/josdejong/svelte-jsoneditor/compare/v0.6.5...v0.6.6) (2022-08-29)


### Bug Fixes

* mobile keyboard opening all the time when selecting something in the editor on a touch device ([c2a0937](https://github.com/josdejong/svelte-jsoneditor/commit/c2a0937b6928388c82c76af3e57f1f3a2bc18fdb))

### [0.6.5](https://github.com/josdejong/svelte-jsoneditor/compare/v0.6.4...v0.6.5) (2022-08-29)


### Features

* [#129](https://github.com/josdejong/svelte-jsoneditor/issues/129) allow passing additional options to `createAjvValidator` ([a66f230](https://github.com/josdejong/svelte-jsoneditor/commit/a66f230998a4e8c52a65d7cc5ce124968dec600f))


### Bug Fixes

* [#131](https://github.com/josdejong/svelte-jsoneditor/issues/131) backslash character not being escaped when `escapeControlCharacters: true` ([#133](https://github.com/josdejong/svelte-jsoneditor/issues/133)) ([1657d9a](https://github.com/josdejong/svelte-jsoneditor/commit/1657d9abe9568f76119275c8808f81a2805a1f73))

### [0.6.4](https://github.com/josdejong/svelte-jsoneditor/compare/v0.6.3...v0.6.4) (2022-08-19)


### Bug Fixes

* [#124](https://github.com/josdejong/svelte-jsoneditor/issues/124) view jumping up when editor gets focus ([b94f531](https://github.com/josdejong/svelte-jsoneditor/commit/b94f5317cfba8f7dbe6debf915b9852949f6196f))

### [0.6.3](https://github.com/josdejong/svelte-jsoneditor/compare/v0.6.2...v0.6.3) (2022-08-16)


### Bug Fixes

* minor update of all dependencies ([b61778a](https://github.com/josdejong/svelte-jsoneditor/commit/b61778a70a1df6a1073db0a52c86d10773201bc6))

### [0.6.2](https://github.com/josdejong/svelte-jsoneditor/compare/v0.6.1...v0.6.2) (2022-07-28)


### Bug Fixes

* revert the ES workaround for `[@fortawesome](https://github.com/fortawesome)` again, it doesn't work anymore ([69533af](https://github.com/josdejong/svelte-jsoneditor/commit/69533af086d512d830804bbc1fd2cbd6d9e1aec8))

### [0.6.1](https://github.com/josdejong/svelte-jsoneditor/compare/v0.6.0...v0.6.1) (2022-07-28)


### Bug Fixes

* make sure all imports in index.ts have a .js extension ([52431f6](https://github.com/josdejong/svelte-jsoneditor/commit/52431f61f13a7e7f8ad886d9dd10ca42d944accd))
* re-introduce the ES workaround for `[@fortawesome](https://github.com/fortawesome)` again ([2a7284c](https://github.com/josdejong/svelte-jsoneditor/commit/2a7284c23b20bad7930198f530a84dbdea361b5c))

## [0.6.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.5.0...v0.6.0) (2022-07-28)


### ⚠ BREAKING CHANGES

* The signature of `onChange` is changed from `onChange(updatedContent, previousContent, patchResult)`
to `onChange(updatedContent, previousContent, { contentErrors, patchResult })`.

### Features

* implement validate method and pass contentErrors via onChange, fixes [#56](https://github.com/josdejong/svelte-jsoneditor/issues/56) ([#119](https://github.com/josdejong/svelte-jsoneditor/issues/119)) ([9847382](https://github.com/josdejong/svelte-jsoneditor/commit/9847382396fe5f853f8ecfde4d5227175c498bf4))


### Bug Fixes

* [#118](https://github.com/josdejong/svelte-jsoneditor/issues/118) cursor position in TextMode being reset after changing `validator` ([e580e26](https://github.com/josdejong/svelte-jsoneditor/commit/e580e26e3c4d82935a9fed9804666c986d1c3b21))

## [0.5.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.4.0...v0.5.0) (2022-07-11)


### ⚠ BREAKING CHANGES

* The bundled file has been moved into a separate npm package named `vanilla-jsoneditor`. Please replace: `import { JSONEditor} from "svelte-jsoneditor/dist/jsoneditor.js"` with `import { JSONEditor} from "vanilla-jsoneditor"`. Read more about v0.5.0: https://github.com/josdejong/svelte-jsoneditor/blob/main/CHANGELOG.md

### Features

* move bundle into a separate npm package vanilla-jsoneditor ([#114](https://github.com/josdejong/svelte-jsoneditor/issues/114)) ([e865be3](https://github.com/josdejong/svelte-jsoneditor/commit/e865be31e29417d5d5d4fbbd9ebdf9472a94e4f8))

## [0.4.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.60...v0.4.0) (2022-07-08)


### ⚠ BREAKING CHANGES

* The 'code' mode has been renamed to 'text' mode.
* The type `JSONPath` is changed from `Array<string | number>` to `Array<string>`,
and some TypeScript types now come from `immutable-json-patch`.

### Features

* rename code mode to text mode ([#113](https://github.com/josdejong/svelte-jsoneditor/issues/113)) ([769fb8f](https://github.com/josdejong/svelte-jsoneditor/commit/769fb8ff5e913e61cceae0c074ebea34f15610b7))
* state refactor ([#111](https://github.com/josdejong/svelte-jsoneditor/issues/111)) ([a58b4c3](https://github.com/josdejong/svelte-jsoneditor/commit/a58b4c33368f2d0ef39c2aba1a45498f4065c7b5))


### Bug Fixes

* [#105](https://github.com/josdejong/svelte-jsoneditor/issues/105) disable dropdown button when all items are disabled ([8698606](https://github.com/josdejong/svelte-jsoneditor/commit/86986066e965b1710e0d15e87e79fd0d958d39df))
* [#107](https://github.com/josdejong/svelte-jsoneditor/issues/107) dependency issue with fortawesome building svelte-kit ([7ad8e95](https://github.com/josdejong/svelte-jsoneditor/commit/7ad8e95d3acfd69377c172f735b5f6d7e1cda47d))
* [#110](https://github.com/josdejong/svelte-jsoneditor/issues/110) ContextMenu closes when hovering a validation error ([#112](https://github.com/josdejong/svelte-jsoneditor/issues/112)) ([46424bb](https://github.com/josdejong/svelte-jsoneditor/commit/46424bb3fd4353fc541f3d537eda803218ca63f2))
* generate a valid sourcemap again ([7981a99](https://github.com/josdejong/svelte-jsoneditor/commit/7981a991f9e34183d4f1d94790d341fb5f6d0cde))
* make `svelte` a dependency, its type definitions are needed in TypeScript projects (see [#19](https://github.com/josdejong/svelte-jsoneditor/issues/19)) ([acb3acf](https://github.com/josdejong/svelte-jsoneditor/commit/acb3acfa14ea7eb01e4140e799bd6a490f6fd0ef))
* remove the "powered by CodeMirror" text, is listed in readme and webapp footer instead ([89d661a](https://github.com/josdejong/svelte-jsoneditor/commit/89d661ac5c9c6b01f374a654e9016af4e7ad6035))
* truncate text preview of invalid JSON in tree mode ([67f5790](https://github.com/josdejong/svelte-jsoneditor/commit/67f57908456c9daa89258af095ace61b2fd9f47e))


* make sure the next version will be marked as a breaking change ([0737b6c](https://github.com/josdejong/svelte-jsoneditor/commit/0737b6c7db31c1421f903a1dc1ef090b358633f1))

### [0.3.60](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.59...v0.3.60) (2022-06-09)


### Bug Fixes

* [#55](https://github.com/josdejong/svelte-jsoneditor/issues/55) support tabs for indentation, introduce new option `tabSize` ([7e96e9a](https://github.com/josdejong/svelte-jsoneditor/commit/7e96e9a231a0fd69c28b7825423a21d9c94a15bc))

### [0.3.59](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.58...v0.3.59) (2022-06-08)


### Bug Fixes

* [#91](https://github.com/josdejong/svelte-jsoneditor/issues/91) interface OptionalJSONEditorProps missing in npm package ([23bd690](https://github.com/josdejong/svelte-jsoneditor/commit/23bd690265dd213775e4163e28b79380aeb0a119))
* invert the color of warning text to make it better readable ([410d91e](https://github.com/josdejong/svelte-jsoneditor/commit/410d91eb21700f55c8ac914486e62b500929d24d))
* render the status bar of code mode above parse errors and validation warnings ([d765cb0](https://github.com/josdejong/svelte-jsoneditor/commit/d765cb02851bb2b89bc648d21582a313106f9cfa))
* update dependencies and devDependencies ([9aa49b6](https://github.com/josdejong/svelte-jsoneditor/commit/9aa49b6ee63f92712241ab6aa8c6da7987e1b607))

### [0.3.58](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.57...v0.3.58) (2022-05-31)


### Features

* implement StatusBar in code mode ([4bf271a](https://github.com/josdejong/svelte-jsoneditor/commit/4bf271a32ea24fb069bc91cf567a5102ee29e5d2))

### [0.3.57](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.56...v0.3.57) (2022-05-31)


### Bug Fixes

* make active line color a lighter than the selection color in code mode ([1d26fc7](https://github.com/josdejong/svelte-jsoneditor/commit/1d26fc7a4ee95be7f3698c3b0894a85800557f71))

### [0.3.56](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.55...v0.3.56) (2022-05-30)


### Bug Fixes

* disable broken sourcemap for the time being ([8239683](https://github.com/josdejong/svelte-jsoneditor/commit/82396830d781c3e2246636c5ac73893fccecc4fb))

### [0.3.55](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.54...v0.3.55) (2022-05-30)


### Bug Fixes

* editor not having a border when welcome screen is displayed ([87e5da9](https://github.com/josdejong/svelte-jsoneditor/commit/87e5da92b67e82e5e6fca7594fdd1ff5d8760a74))
* expanded state being reset when updating the contents ([27f61f2](https://github.com/josdejong/svelte-jsoneditor/commit/27f61f2f66b7b572e2d4bc8276bb79b3640c83ed))

### [0.3.54](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.53...v0.3.54) (2022-05-27)


### Bug Fixes

* do not throw an exception when using `.refresh()` in tree mode ([6d5646d](https://github.com/josdejong/svelte-jsoneditor/commit/6d5646d9562d76a88e26ed19d4fd714597d209fe))
* improve typescript definitions ([#86](https://github.com/josdejong/svelte-jsoneditor/issues/86)) ([a7d759a](https://github.com/josdejong/svelte-jsoneditor/commit/a7d759a6c3fca6cf28ad9f440c5ddcbbdd1dc362))

### [0.3.53](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.52...v0.3.53) (2022-05-23)


### Bug Fixes

* index.js files containing broken imports to ts files ([0c4a9f0](https://github.com/josdejong/svelte-jsoneditor/commit/0c4a9f0c2dea2a45aa5dd5b2176ad7802a4e5206))

### [0.3.52](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.51...v0.3.52) (2022-05-23)


### Bug Fixes

* index.js file containing broken references to .ts files (regression since v0.3.51) ([36959ee](https://github.com/josdejong/svelte-jsoneditor/commit/36959ee0e2ea8cbbefcbb63f193d83b556404dbc))

### [0.3.51](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.50...v0.3.51) (2022-05-23)


### Features

* implement a method `.refresh()` to force rerendering of the code editor ([545426a](https://github.com/josdejong/svelte-jsoneditor/commit/545426aa7d8718e05f57cb83c71d035f37b33dc8))


### Bug Fixes

* improve the behavior of the arrow quickkeys to navigate the context menu ([#83](https://github.com/josdejong/svelte-jsoneditor/issues/83)) ([76b177f](https://github.com/josdejong/svelte-jsoneditor/commit/76b177f03b68097c7e521bf07ed753a5a1acf931))
* maintain the enforceString status after replacing a value ([4d1e9e3](https://github.com/josdejong/svelte-jsoneditor/commit/4d1e9e3b8eb57215650a586740f59d6390bf0981))

### [0.3.50](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.49...v0.3.50) (2022-05-20)


### Bug Fixes

* [#79](https://github.com/josdejong/svelte-jsoneditor/issues/79) browser scrolling the editor into view on load ([42fe818](https://github.com/josdejong/svelte-jsoneditor/commit/42fe8188e9248a0191d39e8e991217d5dec5a54c))
* [#81](https://github.com/josdejong/svelte-jsoneditor/issues/81) clear navigation path when iterating through search results ([434c66d](https://github.com/josdejong/svelte-jsoneditor/commit/434c66d7abc92b6d0f1a38e454a0e7ab9d6c8450))
* cannot start typing characters to insert a value from the welcome screen ([2bc34e2](https://github.com/josdejong/svelte-jsoneditor/commit/2bc34e224a33219c0ea73515bc04d569d832a0a9))
* editor losing focus after selecting a color with the color picker ([8cb912a](https://github.com/josdejong/svelte-jsoneditor/commit/8cb912a55d77dca9d298ba9a6bf41d44b0262064))
* editor losing focus after toggling a boolean value ([ea52484](https://github.com/josdejong/svelte-jsoneditor/commit/ea524847db5927d7c7283d5a8b2aaa3703bf025a))
* give editor focus when the user starts dragging the selection ([9bd28db](https://github.com/josdejong/svelte-jsoneditor/commit/9bd28dbfb6f5a2bc3ee9ad30d50bd8521ade9b40))
* give navigation bar text a brighter color in dark theme ([42be0e7](https://github.com/josdejong/svelte-jsoneditor/commit/42be0e7fdd2e7315980e235d43e92cae57cfea7e))
* improve Transform Wizard to work better with numbers, booleans, and null ([ebc076a](https://github.com/josdejong/svelte-jsoneditor/commit/ebc076a80abc7e561b5518373c2b8530d0413e92))
* keep focus in editor when closing color picker via ESC ([0b75001](https://github.com/josdejong/svelte-jsoneditor/commit/0b7500171df513fd804051eefc6a7abbbe28ffb4))
* paste as JSON helper message not working ([0f803b2](https://github.com/josdejong/svelte-jsoneditor/commit/0f803b21a7fc4eaab6e0bb04a108f51d8c0f69a6))

### [0.3.49](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.48...v0.3.49) (2022-05-13)

### Features

* Support for custom styling using css variables 

### Bug Fixes

* [#69](https://github.com/josdejong/svelte-jsoneditor/issues/69) cannot build the library after a clean install ([32a9b73](https://github.com/josdejong/svelte-jsoneditor/commit/32a9b737db60a9aee35d276b65f5d5b54bd5cd0c))
* [#70](https://github.com/josdejong/svelte-jsoneditor/issues/70) implement quickkey Shift+Enter to go to the previous search result ([8f1917f](https://github.com/josdejong/svelte-jsoneditor/commit/8f1917fc5b100eaa7dfadd0f88f765a70de7bd4c))
* [#71](https://github.com/josdejong/svelte-jsoneditor/issues/71) describe the differences with josdejong/jsoneditor in the README.md ([b9a54e9](https://github.com/josdejong/svelte-jsoneditor/commit/b9a54e974daa0a1e9a6575ddfcb5658e45bbc2ae))
* context menu button jumping around whilst selecting multiple expanded objects ([d4a3cbf](https://github.com/josdejong/svelte-jsoneditor/commit/d4a3cbfc44ea14b36a0c1d8df2b36495d1f8d2d9))
* exception thrown when clicking left from a selection ([e7e8094](https://github.com/josdejong/svelte-jsoneditor/commit/e7e8094ad34c4d8ecc9a3d855fe315a448e3bf20))
* expandAll not working ([37c6256](https://github.com/josdejong/svelte-jsoneditor/commit/37c6256dd4ad60400f7c0ebad75b3d2f534db9e7))
* right click in welcome screen did not open the context menu ([7934e9a](https://github.com/josdejong/svelte-jsoneditor/commit/7934e9ac7184a84e17d8bcbdfdaa48e9aa210bb7))
* selection and expanded state not always stored correctly in history ([#73](https://github.com/josdejong/svelte-jsoneditor/issues/73)) ([702fba1](https://github.com/josdejong/svelte-jsoneditor/commit/702fba1d07620008d33f7c0c2ad00e05cbd5954f))

### [0.3.48](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.47...v0.3.48) (2022-04-26)


### Bug Fixes

* quickkeys `[` and `{` not working in welcome screen (regression since v0.3.47) ([8a808a4](https://github.com/josdejong/svelte-jsoneditor/commit/8a808a412497e2bfbe4ba01f29eed363cdbc7303))

### [0.3.47](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.46...v0.3.47) (2022-04-26)


### Bug Fixes

* allow defining multiple functions in the query of the Transform modal ([31e9b8b](https://github.com/josdejong/svelte-jsoneditor/commit/31e9b8b50ea35dfd6b58145c602ff01a59a66fc2))
* be able to right-click on top of a property/item tag to open the context menu ([a033abf](https://github.com/josdejong/svelte-jsoneditor/commit/a033abf535c146ca76b38113ccce6a03917ab884))
* context menu button of insert area sometimes flickering ([282e31d](https://github.com/josdejong/svelte-jsoneditor/commit/282e31d8a52bc43b8d2fba25347d7ec9f040ffc8))
* full document being selected when clicking scrollbar or main menu when there is no selection ([5109de1](https://github.com/josdejong/svelte-jsoneditor/commit/5109de1bf4d5b7a9399b1180f7e09f8777f67447))
* fully expand an inserted structure ([a22f405](https://github.com/josdejong/svelte-jsoneditor/commit/a22f405765692abb3b66deae9d92fb89f9a085a6))
* improve the Javascript and Lodash queries generated via the wizard ([9666120](https://github.com/josdejong/svelte-jsoneditor/commit/9666120ce8cbad2508fe190926601772ae0ff741))
* sort/transform the contents of the key instead of the parent when a key is selected ([e761a79](https://github.com/josdejong/svelte-jsoneditor/commit/e761a79a2a9bc5cf3615bfe49c2f9832c3569c22))

### [0.3.46](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.45...v0.3.46) (2022-04-22)


### Features

* show tip in ContextMenu when it is opened via the ContextMenuButton or the main menu ([b9c38d2](https://github.com/josdejong/svelte-jsoneditor/commit/b9c38d275396ce00dcc61c4c34d4ecb523c9915c))


### Bug Fixes

* floating context menu button not rendered when a key is selected ([1ec4ed9](https://github.com/josdejong/svelte-jsoneditor/commit/1ec4ed9ba8af197856ce33e1e42b78dadf8de416))

### [0.3.45](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.44...v0.3.45) (2022-04-21)


### Bug Fixes

* expose method `findElement(path)` ([3930137](https://github.com/josdejong/svelte-jsoneditor/commit/39301376ab2f0786a76c22c51c549de125ffa76f))

### [0.3.44](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.43...v0.3.44) (2022-04-21)


### Features

* expose method `findElement(path)` ([655a790](https://github.com/josdejong/svelte-jsoneditor/commit/655a790e662180d41207072a25748d76aa69ec6b))

### [0.3.43](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.42...v0.3.43) (2022-04-20)


### Bug Fixes

* disable insert buttons in ContextMenu when root is selected (regression introduced in v0.3.41) ([1fe6f48](https://github.com/josdejong/svelte-jsoneditor/commit/1fe6f488ae7b7d8d83952e4f00ca2e55fa6a4a09))

### [0.3.42](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.41...v0.3.42) (2022-04-20)


### Bug Fixes

* right-click right from a value did not select the insert area before opening the context menu ([215eb04](https://github.com/josdejong/svelte-jsoneditor/commit/215eb04b82f4eacb66972041476a740de7f18451))

### [0.3.41](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.40...v0.3.41) (2022-04-20)


### Features

* change insert buttons into convert buttons, converting between objects/arrays/text (see [#61](https://github.com/josdejong/svelte-jsoneditor/issues/61)) ([f413066](https://github.com/josdejong/svelte-jsoneditor/commit/f413066509b9167af9751218df30922ae5d9ffac))


### Bug Fixes

* change button text to "Copy compacted" for consistency ([396a274](https://github.com/josdejong/svelte-jsoneditor/commit/396a274219cb20e682d5b83c9317b99b3346b098))
* change styling of the mode toggle button (code/tree) ([28b9c6c](https://github.com/josdejong/svelte-jsoneditor/commit/28b9c6c671f282832ece219a7c2f60cc2b0c5fa5))
* use flex-start and flex-end to fix warnings in environments like tailwindcss ([#43](https://github.com/josdejong/svelte-jsoneditor/issues/43)) ([e1e0ddd](https://github.com/josdejong/svelte-jsoneditor/commit/e1e0dddfc6593197bf618a87af94d5a19a8945f9))

### [0.3.40](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.39...v0.3.40) (2022-04-15)


### Bug Fixes

* importing vanilla-picker wrongly ([ddecbf1](https://github.com/josdejong/svelte-jsoneditor/commit/ddecbf1fd3d87a53e574374b581c1eabcd9c54b8))

### [0.3.39](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.38...v0.3.39) (2022-04-15)


### Bug Fixes

* [#66](https://github.com/josdejong/svelte-jsoneditor/issues/66) import color picker dynamically since it cannot render server side ([b6041bb](https://github.com/josdejong/svelte-jsoneditor/commit/b6041bb3df4b8d74927cd65ef7343c63b04d8299))

### [0.3.38](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.37...v0.3.38) (2022-04-13)


### Features

* select contents within brackets using double-click ([#65](https://github.com/josdejong/svelte-jsoneditor/issues/65)) ([e73970f](https://github.com/josdejong/svelte-jsoneditor/commit/e73970ff9b168d57ad53b5d56ac25e98794abf56))


### Bug Fixes

* show `prop` and `item` instead of plural when there is only one property or item ([1f1725f](https://github.com/josdejong/svelte-jsoneditor/commit/1f1725feda64c70c5ba305f1aa02ad1468a0d226))

### [0.3.37](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.36...v0.3.37) (2022-04-12)


### Bug Fixes

* clicking a button to switch mode did toggle instead of selecting the clicked mode ([0451001](https://github.com/josdejong/svelte-jsoneditor/commit/045100141855a5f91c47205a8e735500584b3120))

### [0.3.36](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.35...v0.3.36) (2022-04-12)


### Bug Fixes

* change code mode toggle into group buttons [tree|code] (see [#59](https://github.com/josdejong/svelte-jsoneditor/issues/59)) ([ad33b26](https://github.com/josdejong/svelte-jsoneditor/commit/ad33b2671b08442f54daa477ec40dcb594f6afe8))
* expand all extracted contents (when not too large) ([d4ae8f4](https://github.com/josdejong/svelte-jsoneditor/commit/d4ae8f473c66b1c912454d20590277a5b3503524))
* position search box in code mode on top ([#62](https://github.com/josdejong/svelte-jsoneditor/issues/62)) ([f0a1feb](https://github.com/josdejong/svelte-jsoneditor/commit/f0a1feb28b034ce847abdf73890968759423847a))
* update all devDependencies ([13331c7](https://github.com/josdejong/svelte-jsoneditor/commit/13331c7550a630fa26faa853d04394d6fdaf624a))

### [0.3.35](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.34...v0.3.35) (2022-04-11)


### Bug Fixes

* improve the rendering performance ([#58](https://github.com/josdejong/svelte-jsoneditor/issues/58)) ([84c6eb3](https://github.com/josdejong/svelte-jsoneditor/commit/84c6eb30e4df744670adbb92b8c3543d3a60bba5))

### [0.3.34](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.33...v0.3.34) (2022-04-08)


### Features

* implement method `acceptAutoRepair` ([d037a7e](https://github.com/josdejong/svelte-jsoneditor/commit/d037a7e73869751bd408191a217c734b4fce9be0))

### [0.3.33](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.32...v0.3.33) (2022-04-07)


### Bug Fixes

* make sure JavaScript and Lodash queries return null and never undefined ([73ae90c](https://github.com/josdejong/svelte-jsoneditor/commit/73ae90c4d3f50d500d47fc5cb87a0d0b91686301))

### [0.3.32](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.31...v0.3.32) (2022-04-06)

### [0.3.31](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.30...v0.3.31) (2022-04-06)


### Bug Fixes

* styling tweaks in the vertical sizing of the TransformModal ([3f87a8a](https://github.com/josdejong/svelte-jsoneditor/commit/3f87a8ab477d88e155697bc6edc047028da555f7))

### [0.3.30](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.29...v0.3.30) (2022-04-06)


### Bug Fixes

* be resilient against missing or disabled localStorage ([52f76b7](https://github.com/josdejong/svelte-jsoneditor/commit/52f76b73b8d26ffcfca4e8391a55273f5b1d9b22))
* disable Search menu item when there is no contents ([e687229](https://github.com/josdejong/svelte-jsoneditor/commit/e687229a33518356c65850d57a729c2ea6e9637f))
* do not show welcome options when editor is readOnly ([eb92d75](https://github.com/josdejong/svelte-jsoneditor/commit/eb92d75ad608aa6df05b7633dd7cba9bb5008876))
* method `editor.transform()` broken (regression since v0.3.29) ([299dc78](https://github.com/josdejong/svelte-jsoneditor/commit/299dc78fdfce1c327cb54efc97d6dc8fd34f00d9))
* styling tweaks in the TransformModal ([3983918](https://github.com/josdejong/svelte-jsoneditor/commit/3983918d125249535211a0228b9444cd6d9bc8f3))

### [0.3.29](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.28...v0.3.29) (2022-04-06)


### Features

* reorganize Tranform modal, show original data alongside the preview ([#54](https://github.com/josdejong/svelte-jsoneditor/issues/54)) ([9b6b79e](https://github.com/josdejong/svelte-jsoneditor/commit/9b6b79e487d79057522ecbeca41fade01b7bbd79))


### Bug Fixes

* cannot select a key or value when clicking inside the selection ([331254a](https://github.com/josdejong/svelte-jsoneditor/commit/331254ad9a458ef9889ea22acc9c02cb6ef50e8a))
* disable Auto repair buttons when the editor is readOnly ([0a5eca4](https://github.com/josdejong/svelte-jsoneditor/commit/0a5eca4c26bcb1818815bf1e24bc18e0888c9d02))
* dragging selection not disabled in readOnly mode ([eac069a](https://github.com/josdejong/svelte-jsoneditor/commit/eac069ae0f0df2711bd5991778d4e25545f765a4))
* solve circular dependency to TreeMode in the Transform modal ([71f3511](https://github.com/josdejong/svelte-jsoneditor/commit/71f3511ffc3cb6eab2ef2d6fd9f1abae18c2f3e4))
* some styling fixes in the Sort modal ([4366a0f](https://github.com/josdejong/svelte-jsoneditor/commit/4366a0fa1d460def432b3a1900f530c0a63dc2d2))
* undo/redo buttons in code mode not updated when contents changed externally ([5778540](https://github.com/josdejong/svelte-jsoneditor/commit/5778540560c3ce6b7d62346e4a9ef302881bc373))
* use ajv-dist instead of ajv to solve rollup issues ([a663a1b](https://github.com/josdejong/svelte-jsoneditor/commit/a663a1bf7748b3332f9e8ddcd12c6c760e953f7f))

### [0.3.28](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.27...v0.3.28) (2022-04-04)


### Bug Fixes

* could not select items when starting to drag right from an item ([c5de4d5](https://github.com/josdejong/svelte-jsoneditor/commit/c5de4d5ac84675c0a6292f439c845f3ee51e2a4b))
* insert area visible whilst selecting or dragging ([5d1e68f](https://github.com/josdejong/svelte-jsoneditor/commit/5d1e68f248d1ad9a7f898a50b4945f50eacc1488))

### [0.3.27](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.26...v0.3.27) (2022-04-04)


### Bug Fixes

* when pasting, expand all pasted contents by default when small ([ec9703c](https://github.com/josdejong/svelte-jsoneditor/commit/ec9703c741bf0575864ce699a4c3ea708acdf57a))

### [0.3.26](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.25...v0.3.26) (2022-04-04)


### Bug Fixes

* fully expand small JSON documents by default ([d94701b](https://github.com/josdejong/svelte-jsoneditor/commit/d94701b9d40cc0eefbf6865d3cfb76526c6fdd8e))
* pasted or replaced contents not being expanded ([4e86440](https://github.com/josdejong/svelte-jsoneditor/commit/4e864405a70676038b0da6816ae4679f5078cf1e))
* update dependencies ([d9eb233](https://github.com/josdejong/svelte-jsoneditor/commit/d9eb233c24c958cabd41ad58df372ca6bbb15cf7))

### [0.3.25](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.24...v0.3.25) (2022-03-22)


### Features

* drag selected contents up and down ([#50](https://github.com/josdejong/svelte-jsoneditor/issues/50)) ([c3c4113](https://github.com/josdejong/svelte-jsoneditor/commit/c3c4113441c2a2df111da5e74b312a9146900927))


### Bug Fixes

* validate in code mode not always triggering ([246cf67](https://github.com/josdejong/svelte-jsoneditor/commit/246cf670259393c56934f0955df31ec957e3f863))

### [0.3.24](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.23...v0.3.24) (2022-03-16)


### Bug Fixes

* component EditableDiv did not close when losing focus to another element on the same page ([a8abe71](https://github.com/josdejong/svelte-jsoneditor/commit/a8abe710f5e2d10bf31f7272f709d53665a1eb88))
* define font for linting messages ([8a5456f](https://github.com/josdejong/svelte-jsoneditor/commit/8a5456f3de474c58e49b637617d1694b515e1055))
* editor layout does overflow when opening a large minified document in code mode ([#48](https://github.com/josdejong/svelte-jsoneditor/issues/48)) ([5574d38](https://github.com/josdejong/svelte-jsoneditor/commit/5574d38164f48610842a0707be81cf9ca12bd53b))
* implement quick keys Ctrl+F and Ctrl+H to open the find dialog whilst editing a key or value ([e608486](https://github.com/josdejong/svelte-jsoneditor/commit/e608486a53c59cb53b3cf1240884d7d2147fd345))
* minor styling fix ([1399dd8](https://github.com/josdejong/svelte-jsoneditor/commit/1399dd8272de55f22d77b1633bd124632064606f))
* styling tweaks ([1d15f2b](https://github.com/josdejong/svelte-jsoneditor/commit/1d15f2b2675922d4c566cdd6cec53caac70dcd7e))
* wrapping line in Copy dropdown menu ([61b10ac](https://github.com/josdejong/svelte-jsoneditor/commit/61b10ac1d4a50b7d9b7e68b9316adbedd47ffd02))

### [0.3.23](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.22...v0.3.23) (2022-03-08)


### Bug Fixes

* do not use dynamic imports ([b5ca813](https://github.com/josdejong/svelte-jsoneditor/commit/b5ca813ef1c5a4dbd5527c496afe824986e3a45e))

### [0.3.22](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.21...v0.3.22) (2022-03-08)


### Bug Fixes

* publish missing generated/* folder on npm too ([ec391b2](https://github.com/josdejong/svelte-jsoneditor/commit/ec391b28b7c12bed81f65ff8b35a9fabba88d349))
* publish missing generated/* folder on npm too ([a0195cd](https://github.com/josdejong/svelte-jsoneditor/commit/a0195cde8e77850a431eb0a77219d644c80af1d7))

### [0.3.21](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.20...v0.3.21) (2022-03-08)


### Features

* replace Ace with CodeMirror 6 ([#46](https://github.com/josdejong/svelte-jsoneditor/issues/46)) ([71cc856](https://github.com/josdejong/svelte-jsoneditor/commit/71cc856c81456dbb788b14d847e30a289bf2a129))

### [0.3.20](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.19...v0.3.20) (2022-03-07)


### Bug Fixes

* drop `viteOptimizeDeps` (in `src/config.js`) and remove it from the docs: not needed anymore ([1c64009](https://github.com/josdejong/svelte-jsoneditor/commit/1c64009469c7914f5daffa93c4402c4643072a03))

### [0.3.19](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.18...v0.3.19) (2022-03-07)


### Bug Fixes

* add `generated` folder to .prettierignore ([e15ee93](https://github.com/josdejong/svelte-jsoneditor/commit/e15ee931eab2a4e273a3dae188ecdf6ab284351f))
* diff-sequences export not playing nice with Vite ([f87a7b3](https://github.com/josdejong/svelte-jsoneditor/commit/f87a7b379e9204bc835de87125371f709f77dc3c))

### [0.3.18](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.17...v0.3.18) (2022-02-09)


### Bug Fixes

* race condition when toggling mode ([2a97ab5](https://github.com/josdejong/svelte-jsoneditor/commit/2a97ab55191ddb5e9a79591a74bf342a0e89e9e8))
* update all dependencies ([f083d2c](https://github.com/josdejong/svelte-jsoneditor/commit/f083d2c1c9570e91b24ee037d1d988c9e733722f))

### [0.3.17](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.16...v0.3.17) (2022-02-09)


### Bug Fixes

* improve explanatory titles on color picker and boolean toggle when readOnly ([aac632b](https://github.com/josdejong/svelte-jsoneditor/commit/aac632bcb9ceeb9a9ab4358aefdea2523c0adb4e))
* only show explanatory titles on color picker and boolean toggle when editable ([4971138](https://github.com/josdejong/svelte-jsoneditor/commit/49711385d97ba10499285a02b9c365b7719f7c55))
* rename schemaRefs to schemaDefinitions (not breaking, just a renamed function argument) ([0e7d653](https://github.com/josdejong/svelte-jsoneditor/commit/0e7d65335212188011d7ba0c3ce8438a99b22ee5))
* shortcut Shift+Enter to create a newline not working on Chrome ([48a10a6](https://github.com/josdejong/svelte-jsoneditor/commit/48a10a667ce1d19258bb09f7cb23e8931ba9f39f))
* update dependencies ([4bc6d53](https://github.com/josdejong/svelte-jsoneditor/commit/4bc6d5356c5f401bf5a0e0ff60a67a046b346e5a))

### [0.3.16](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.15...v0.3.16) (2022-01-20)


### Features

* implement support for enforcing a value to stay a string when it contains a numeric value.
  This can be toggled via the button "Enforce string" in ContextMenu, under "Edit value".


### Bug Fixes

* [#45](https://github.com/josdejong/svelte-jsoneditor/issues/45) invoke onChangeMode after re-rendering instead of before ([c8894ce](https://github.com/josdejong/svelte-jsoneditor/commit/c8894ce2b618df3cadf5cc8a6ac8a3cc44c15c9f))


### [0.3.15](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.14...v0.3.15) (2022-01-12)


### Bug Fixes

* regression in clicking the context menu button on an insert area ([f5bcc71](https://github.com/josdejong/svelte-jsoneditor/commit/f5bcc7166720bac94b7ea222f5e95e8a39368d46))

### [0.3.14](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.13...v0.3.14) (2022-01-08)


### Bug Fixes

* expand contents when pasting in an empty document ([a3c8021](https://github.com/josdejong/svelte-jsoneditor/commit/a3c80216370dfa176b0eafd6afa9e88a0f9d579f))
* shift-click not working when selecting an area in between two nodes ([c21f1f3](https://github.com/josdejong/svelte-jsoneditor/commit/c21f1f310382b39c4ca4b27725b982feeb48acbf))
* shift-click to select multiple items broken ([a28bbdf](https://github.com/josdejong/svelte-jsoneditor/commit/a28bbdf8c8a3354a9f6e32efd2cb7b44656f91dd))

### [0.3.13](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.12...v0.3.13) (2022-01-05)


### Bug Fixes

* clicking on another node whilst editing did not move the focus there ([b2fe3d7](https://github.com/josdejong/svelte-jsoneditor/commit/b2fe3d7e558358d4aa7f0400d90da366b56bbb6c))
* fix too large padding for expanded array bracket ([0963960](https://github.com/josdejong/svelte-jsoneditor/commit/09639609d9b642a9df0caa663caaad6903816cd8))
* issue in encode/decode datapath ([a56cb1b](https://github.com/josdejong/svelte-jsoneditor/commit/a56cb1ba867c336f8ee72b7c505ba669024beb28))
* make the code robust against missing refContents ([360de5e](https://github.com/josdejong/svelte-jsoneditor/commit/360de5e9e01b6008f5062fec70ffb621b66f70ed))
* scrollTo throwing exception when contents is empty ([68fcb6a](https://github.com/josdejong/svelte-jsoneditor/commit/68fcb6aaa59490130e528b25bdea014a315e7285))
* styling tweak for the readonly item count tag ([5bbb679](https://github.com/josdejong/svelte-jsoneditor/commit/5bbb679efccb235a17fafcc82919ea14cb62c66d))
* when opening edit mode, sometimes the first typed character was lost ([22b5577](https://github.com/josdejong/svelte-jsoneditor/commit/22b5577f3432501776b56abdedda5c1854f5d809))

### [0.3.12](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.11...v0.3.12) (2022-01-05)


### Bug Fixes

* revert "fix: upgrade to the latest version of sveltekit and vite, removing the need for viteOptimizeDeps"

### [0.3.11](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.10...v0.3.11) (2022-01-05)


### Bug Fixes

* property `normalization` missing the docs and in development application ([002b7e9](https://github.com/josdejong/svelte-jsoneditor/commit/002b7e995decc602962a4b74c5cd6847477df405))
* tweak font for ubuntu and mac ([b05009c](https://github.com/josdejong/svelte-jsoneditor/commit/b05009c4b41b200ec8703c85373f55f96138f96f))
* upgrade to the latest version of sveltekit and vite, removing the need for viteOptimizeDeps ([c7211a3](https://github.com/josdejong/svelte-jsoneditor/commit/c7211a30981a453ee0a86ac2594bf0cca3431436))

### [0.3.10](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.9...v0.3.10) (2021-12-22)


### Features

* implement options escapeControlCharacters and escapeUnicodeCharacters ([#42](https://github.com/josdejong/svelte-jsoneditor/issues/42)) ([cfdd8cc](https://github.com/josdejong/svelte-jsoneditor/commit/cfdd8cca0639a93ca5bb62cca84b31e7b3c9ee6f))
* show tag with array item count also when expanded ([b427fe7](https://github.com/josdejong/svelte-jsoneditor/commit/b427fe7f4618a633882b241ee771d05ce3daa092))


### Bug Fixes

* add property `type` to `<button>` where missing (see [#39](https://github.com/josdejong/svelte-jsoneditor/issues/39)) ([880795f](https://github.com/josdejong/svelte-jsoneditor/commit/880795f751ffa18f2f5fe63958a880e1d80de165))
* clicking outside the editor should stop editing a key/value (see [#40](https://github.com/josdejong/svelte-jsoneditor/issues/40)) ([b67de42](https://github.com/josdejong/svelte-jsoneditor/commit/b67de420fd0be2057c85c175f0e1bc0d8ee2b3e5))
* escape special characters in keys ([10fdedd](https://github.com/josdejong/svelte-jsoneditor/commit/10fdedd2d422020c6fb2e3f81ae96a1db5156381))
* make sure editor blur when clicking outside ([aef0d57](https://github.com/josdejong/svelte-jsoneditor/commit/aef0d57899ef0c3683b9cfda1255c926b937551a))
* partial fix for [#40](https://github.com/josdejong/svelte-jsoneditor/issues/40), clicking outside the editor should stop editing a key/value ([70eab0c](https://github.com/josdejong/svelte-jsoneditor/commit/70eab0c5f6204c844396d19f048e86a20b56ad38))

### [0.3.9](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.8...v0.3.9) (2021-12-04)


### Bug Fixes

* remember state of TransformModal and SortModal on every change instead of only after submit ([caa4364](https://github.com/josdejong/svelte-jsoneditor/commit/caa4364eba8c3db06b265e55bc0e0d6bc35c828e))

### [0.3.8](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.7...v0.3.8) (2021-12-04)


### Bug Fixes

* add current value to the enum dropdown if needed ([8f11bac](https://github.com/josdejong/svelte-jsoneditor/commit/8f11baca5b5613250b7d60ddfcaaf7f13b12fdc7))

### [0.3.7](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.6...v0.3.7) (2021-12-04)


### Features

* custom rendering with onRenderValue, performance improvements, and fixes ([635f542](https://github.com/josdejong/svelte-jsoneditor/commit/635f542d92b21350100d2333764657d60650d167))

### [0.3.6](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.5...v0.3.6) (2021-11-27)


### Bug Fixes

* merge [#32](https://github.com/josdejong/svelte-jsoneditor/issues/32) adding rollup to the devDependencies ([f292c2f](https://github.com/josdejong/svelte-jsoneditor/commit/f292c2f057a46f4c0d7b3e4c65637bc1e9463327))
* replace `debug` with a util debug function ([#34](https://github.com/josdejong/svelte-jsoneditor/issues/34)) ([ddf608a](https://github.com/josdejong/svelte-jsoneditor/commit/ddf608aa77ddf04b3e31db70f1719e90a94664fa))
* update dependencies ([f87572e](https://github.com/josdejong/svelte-jsoneditor/commit/f87572e2827ec325f3f55318cdd595f762477fbb))
* use debug instead of console.log ([b2478b8](https://github.com/josdejong/svelte-jsoneditor/commit/b2478b86b4382e75400036fab542db17cc874f3e))

### [0.3.5](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.4...v0.3.5) (2021-11-17)


### Features

* extend the `onChange` callback to pass previousJson and patchResult ([8e5aecf](https://github.com/josdejong/svelte-jsoneditor/commit/8e5aecf4b0ac29c97d545098f037d7f027182558))
* implement `javascriptQueryLanguage` ([6568afe](https://github.com/josdejong/svelte-jsoneditor/commit/6568afee6f5dd28f3167dcf46bfeb78b6376bee8))
* implement a configuration dropdown to select a query language ([871ac5c](https://github.com/josdejong/svelte-jsoneditor/commit/871ac5ce6b95033aa7caa1a4aa4d92b886b89345))
* support multiple query languages in the transform modal (WIP) ([030d3ca](https://github.com/josdejong/svelte-jsoneditor/commit/030d3ca9601f28a788998d88f7975c1180e190f2))


### Bug Fixes

* edge case in jmespath selecting whole item as projection ([ef2a4cf](https://github.com/josdejong/svelte-jsoneditor/commit/ef2a4cf0995cab3f418c7c8f1b2ed16878bb679b))
* improve the performance of replacing returns with enclosing whitespaces ([de05b10](https://github.com/josdejong/svelte-jsoneditor/commit/de05b103d511140669f12c0f180436fc86cb4ec9))
* robustness fix ([54c6586](https://github.com/josdejong/svelte-jsoneditor/commit/54c6586a0f7c286c71789b8698a2affe3c5411bb))
* show arrow down icon on the right side of the select boxes ([c0375b1](https://github.com/josdejong/svelte-jsoneditor/commit/c0375b1888ac5e7341bd559a458d7802854a5151))
* small styling fix ([ec83c32](https://github.com/josdejong/svelte-jsoneditor/commit/ec83c3263eb8bf7c55f57b90d564e56b0aa17624))
* styling fix of the scrollbar in the TransformModal ([5adc31d](https://github.com/josdejong/svelte-jsoneditor/commit/5adc31d23635e8eac94ffc8c2479adf3cab439ad))
* write unit tests and fixes for all query languages ([a6af472](https://github.com/josdejong/svelte-jsoneditor/commit/a6af4728ff6695d872489e4f305dae16ab75a908))

### [0.3.4](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.3...v0.3.4) (2021-11-03)


### Features

* implement search and replace ([#30](https://github.com/josdejong/svelte-jsoneditor/issues/30)) ([3fb89d4](https://github.com/josdejong/svelte-jsoneditor/commit/3fb89d474f600dd2962a5a48497961a40196fe88))

### [0.3.3](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.2...v0.3.3) (2021-10-13)


### Bug Fixes

* debounce changes in code mode, fixing a race condition in React (see [#23](https://github.com/josdejong/svelte-jsoneditor/issues/23)) ([bc2c559](https://github.com/josdejong/svelte-jsoneditor/commit/bc2c559194209ec7cb179a6e89e6f6cab14339a0))

### [0.3.2](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.1...v0.3.2) (2021-09-25)

### [0.3.1](https://github.com/josdejong/svelte-jsoneditor/compare/v0.3.0...v0.3.1) (2021-09-22)


### Bug Fixes

* clearing the complete document not working (regression since v0.3.0) ([352b110](https://github.com/josdejong/svelte-jsoneditor/commit/352b110b64d5f0563c319cf10278792f2eb994ab))
* do not lose focus and fire a focus/blur event when opening a modal inside the editor ([cbb0c79](https://github.com/josdejong/svelte-jsoneditor/commit/cbb0c79f338972fc36edaa830c13e3a844342490))
* fix formatting of the breaking changes list in CHANGELOG.md ([05d5995](https://github.com/josdejong/svelte-jsoneditor/commit/05d5995700483d581f969d1e343c450b29bf5ec8))
* improve inefficient regex to replace return characters ([f3ae485](https://github.com/josdejong/svelte-jsoneditor/commit/f3ae4855004d6c3cc8db88a2c93ebae03d07cacc))
* scroll cursor into view when moving with arrows left/right ([7ffd586](https://github.com/josdejong/svelte-jsoneditor/commit/7ffd586fbf50dfec16ac519bdba494e1ae36981e))
* show selection with a lighter gray when the editor doesn't have focus ([a57268b](https://github.com/josdejong/svelte-jsoneditor/commit/a57268b317cde564273e57a9daa27f52af038cd8))

## [0.3.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.2.8...v0.3.0) (2021-09-11)


### ⚠ BREAKING CHANGES

* Properties `json` and `text` are replaced by `content: { json, text }`
* Methods `getText`, `setText`, and `updateText` are removed, use `get`, `set` and `update` instead.
* Methods `get` `set`, and `update` now expect and return a content object `{ json: JSON } | { text: string }` instead of the json data.

### Features

* change the API methods to consistently work with `content` instead of `json` and `text` ([6b810b7](https://github.com/josdejong/svelte-jsoneditor/commit/6b810b7f852d6fe6ecfa1b558e2ccf23cf66a265))
* unify properties `json` and `text` inside `content` ([f93ce2d](https://github.com/josdejong/svelte-jsoneditor/commit/f93ce2d053d9515ddcd8bc779106c054348d5254))
* update all dependencies ([2332413](https://github.com/josdejong/svelte-jsoneditor/commit/233241301e8d41fbacc537c89117a0943e3d622d))
* validate content type ([9885ff1](https://github.com/josdejong/svelte-jsoneditor/commit/9885ff109b67c5be088c35b21b5d63083a393585))


### Bug Fixes

* code mode throwing an exception when trying to validate an empty document ([412172b](https://github.com/josdejong/svelte-jsoneditor/commit/412172b11d626d6e1f8f9563fadcf0d88ec78589))
* disable opening of color picker when editor is readOnly ([236ec7a](https://github.com/josdejong/svelte-jsoneditor/commit/236ec7a220f4465d8c8924e1ff854b176f2446a0))
* tooltip font and size not defined ([a9fa438](https://github.com/josdejong/svelte-jsoneditor/commit/a9fa4385e001e4162393f2778fbfde9184b1c372))

### [0.2.8](https://github.com/josdejong/svelte-jsoneditor/compare/v0.2.7...v0.2.8) (2021-08-20)


### Features

* create a Svelte examples section ([908d0c4](https://github.com/josdejong/svelte-jsoneditor/commit/908d0c4d4299c467aff84271eca5ad013ced8f88))
* implement color picker ([652e3ac](https://github.com/josdejong/svelte-jsoneditor/commit/652e3ac702328b70e9795b10071338d7ab3f43d3))
* implement method `editor.updateProps(props)` to change properties after creation ([b596155](https://github.com/josdejong/svelte-jsoneditor/commit/b59615531602dfb8b5beae1ad4cb7890dce06007))
* show a time icon with human-readable time in case of unix timestamps ([7d73846](https://github.com/josdejong/svelte-jsoneditor/commit/7d73846c2c986ae3e69f8be143d944c90cd0fd1a))
* update dependencies (`svelte-select`, `sass`) and devDependencies ([be32856](https://github.com/josdejong/svelte-jsoneditor/commit/be3285629fb984131ec6f126f121267a5cf0ebe8))


### Bug Fixes

* display collapsed items sections as selected ([f276863](https://github.com/josdejong/svelte-jsoneditor/commit/f2768638070bf6c011279584d54d26b37948884d))
* upgrade `svelte-select` to `4.3.1` ([c92310a](https://github.com/josdejong/svelte-jsoneditor/commit/c92310a0c3474ac7476056f12b57d1ecf4d9f39c))

### [0.2.7](https://github.com/josdejong/svelte-jsoneditor/compare/v0.2.6...v0.2.7) (2021-08-06)


### Features

* sort the navigation bar dropdown items alphabetically ([d85ecb2](https://github.com/josdejong/svelte-jsoneditor/commit/d85ecb29cfcef79751b7ece0e107b555eb4c6093))


### Bug Fixes

* insert before not working when the first item of the root array/object is selected ([8e0043f](https://github.com/josdejong/svelte-jsoneditor/commit/8e0043fb489c1756f81c1b64093942a76aeb1bcd))
* insert before/after not reckoning with multi selection ([c66b2f7](https://github.com/josdejong/svelte-jsoneditor/commit/c66b2f7ca25b5a8f8b96bb599d76aa2394e19f3a))
* navigation bar keys not being unique ([b7bbc5b](https://github.com/josdejong/svelte-jsoneditor/commit/b7bbc5b5b2b771770b47d13c849055db73b3887b))
* position the search box below the navigation bar ([86e50d5](https://github.com/josdejong/svelte-jsoneditor/commit/86e50d5b931ad21811e2be3f53c0c565c12491fe))
* redo of inserting an Array/Object does not correctly restore selection ([148c8fd](https://github.com/josdejong/svelte-jsoneditor/commit/148c8fd87d7c57a1896fc955fa1eac1a7898b263))
* validation error popup not visible when on the first line ([3a6f0be](https://github.com/josdejong/svelte-jsoneditor/commit/3a6f0beb2f3cc4d529e740786eaf7fea74ec0955))

### [0.2.6](https://github.com/josdejong/svelte-jsoneditor/compare/v0.2.5...v0.2.6) (2021-08-06)


### Features

* navigation bar implemented in tree mode ([ff93e7b](https://github.com/josdejong/svelte-jsoneditor/commit/ff93e7b23122fbdbb509dc61a0f6204fb31bc1cd))


### Bug Fixes

* when json is changed, clear selection when it refers to a non-existing path ([65c20f0](https://github.com/josdejong/svelte-jsoneditor/commit/65c20f07014241f41225a178d006577a874dd62f))

### [0.2.5](https://github.com/josdejong/svelte-jsoneditor/compare/v0.2.4...v0.2.5) (2021-08-04)


### Bug Fixes

* minor styling tweak in the cut/copy dropdown buttons to visualize when dropdown is open ([d2d9561](https://github.com/josdejong/svelte-jsoneditor/commit/d2d956161ccda6d74674304b7f1143dd9cdbae64))

### [0.2.4](https://github.com/josdejong/svelte-jsoneditor/compare/v0.2.3...v0.2.4) (2021-08-04)


### Features

* auto scroll up/down when dragging to select multiple nodes ([9e96957](https://github.com/josdejong/svelte-jsoneditor/commit/9e96957855a63002084d40d8a8aa901cb31abbba))
* implement menu options and quick keys to cut/copy without indentation ([1dcbc41](https://github.com/josdejong/svelte-jsoneditor/commit/1dcbc41c8e8c4fdf4c70e66802237538759ca54b))

### [0.2.3](https://github.com/josdejong/svelte-jsoneditor/compare/v0.2.2...v0.2.3) (2021-08-04)


### Bug Fixes

* method `transform()` throwing an error ([73e35c1](https://github.com/josdejong/svelte-jsoneditor/commit/73e35c1fecf8f86862b9960dac2e829fa082dcd3))

### [0.2.2](https://github.com/josdejong/svelte-jsoneditor/compare/v0.2.1...v0.2.2) (2021-08-04)


### Features

* extend the `transform` method with a callback `onTransform` ([90e8427](https://github.com/josdejong/svelte-jsoneditor/commit/90e8427efe76a36f22a921cf7cf08ed49e51ac53))
* implement method `transform()` and callback `onTransform(operations)` ([08c0f61](https://github.com/josdejong/svelte-jsoneditor/commit/08c0f61b1ef5e23f7268cf1ea44e910ab48b6c51))


### Bug Fixes

* do not expand all contents after extracting some contents ([bb98201](https://github.com/josdejong/svelte-jsoneditor/commit/bb98201e7c3324137972f282371b9a04adf19852))
* do wrap only values anywhere, do not wrap keys anywhere ([5879826](https://github.com/josdejong/svelte-jsoneditor/commit/5879826dd08c9350ec3d381e846b4a150559409c))

### [0.2.1](https://github.com/josdejong/svelte-jsoneditor/compare/v0.2.0...v0.2.1) (2021-08-02)


### Bug Fixes

* file `generated/worker-json-data-url.js` missing in npm package ([861efd2](https://github.com/josdejong/svelte-jsoneditor/commit/861efd2a8d926f28c6b3e64ab0cf8e571c173877))

## [0.2.0](https://github.com/josdejong/svelte-jsoneditor/compare/v0.1.6...v0.2.0) (2021-08-02)


### ⚠ BREAKING CHANGES

* Svelte setup is changed (see readme), ES bundle renamed, UMD bundle removed

### Features

* add search button to main menu of code mode ([0df0f9a](https://github.com/josdejong/svelte-jsoneditor/commit/0df0f9ac2fe3bfc1ea17f0609a32abe2675315e0))
* implement a Cancel to cancel loading a large document in code mode ([ab28a0c](https://github.com/josdejong/svelte-jsoneditor/commit/ab28a0c7f9dea5e8b22a6cd3d7d7b84cb1121d8b))
* migrate to SvelteKit ([c11551d](https://github.com/josdejong/svelte-jsoneditor/commit/c11551da2e4f3f8b40c78f2a9fae225b7ba54773))
* update dependencies (`ajv`, `svelte-select`, `svelte-simple-modal`) ([f9ca5cd](https://github.com/josdejong/svelte-jsoneditor/commit/f9ca5cd709d476a125888c336c7706976e0ab282))
* use quick-key `Backspace` to delete selected contents too (alongside `Delete`) ([f021959](https://github.com/josdejong/svelte-jsoneditor/commit/f0219597e575f8891c8ba8252c22877ddbd57198))


### Bug Fixes

* extract not working when extracting an item from an Array ([5251fb6](https://github.com/josdejong/svelte-jsoneditor/commit/5251fb6d4ff9b7ac92b737a88564f1ef8cddf2f1))
* line height of a single line sometimes being larger than 18px due to icons and tooltip styling ([1431160](https://github.com/josdejong/svelte-jsoneditor/commit/14311609f5e4f38bad9527c4826bcaeaf2e4d099))
* vertical positioning of expand button when selected was a bit off ([d93e4af](https://github.com/josdejong/svelte-jsoneditor/commit/d93e4af7bda6607ddc60670f51dccd1e184ed041))
* wrap long lines ([1792525](https://github.com/josdejong/svelte-jsoneditor/commit/17925255a70dc6ae5a7bdfc58b676aa2377e88b7))

### [0.1.6](https://github.com/josdejong/svelte-jsoneditor/compare/v0.1.5...v0.1.6) (2021-06-30)

### Features

- faster, more robust search ([5e4c3ed](https://github.com/josdejong/svelte-jsoneditor/commit/5e4c3ed8f4c08a19b944172a4089546acc7eab3f))
- implement `readOnly` mode ([31c438f](https://github.com/josdejong/svelte-jsoneditor/commit/31c438fcfb2ce2da76597b6f68efbd5ccddd751e))
- limit the maximum number of search results ([952adb6](https://github.com/josdejong/svelte-jsoneditor/commit/952adb606a3a08867dd12ab533758b70954ec4e1))
- upgrade dependencies (ajv, diff-sequences, svelte-awesome, svelte-select, svelte-simple-modal) ([4469695](https://github.com/josdejong/svelte-jsoneditor/commit/44696953406c697e63477c3f6f13df44c29d2e03))

### Bug Fixes

- color styling issue with selected collapsed items ([720946e](https://github.com/josdejong/svelte-jsoneditor/commit/720946ea51b8357febeb7e0446d6152cf2e010c8))
- do not create selection area inside when in readOnly mode ([03c5b6c](https://github.com/josdejong/svelte-jsoneditor/commit/03c5b6c0fa68b6ca497d5a666bf6760a29ddc895))
- give the user a hint when pasted JSON contents as text ([813a9ca](https://github.com/josdejong/svelte-jsoneditor/commit/813a9ca7f082692edd83cf389420199a3de23f30))
- layout overflowing in case of long unbroken lines ([4d4f15c](https://github.com/josdejong/svelte-jsoneditor/commit/4d4f15cc17f3fe86d265df376783fca7070c51b9))
- prevent submitting parent form when clicking a button in the editor, see [#11](https://github.com/josdejong/svelte-jsoneditor/issues/11) ([64d873a](https://github.com/josdejong/svelte-jsoneditor/commit/64d873afe501d498d753a5e125d2f4f960338e78))
- select area inside array/object after inserting a new array/object ([0d9a1b7](https://github.com/josdejong/svelte-jsoneditor/commit/0d9a1b78c11dc43b4e1190b0f32796e72ae5046a))
- select whole array/object after sorting or transforming it ([0b20741](https://github.com/josdejong/svelte-jsoneditor/commit/0b20741aa7429f7ed74883fc0dda6b97396615a0))
- upgrade to jsonrepair@2.2.1, which has some nice improvements ([a34a558](https://github.com/josdejong/svelte-jsoneditor/commit/a34a55858b292c0a0d47709e3b0cf20992089898))

### [0.1.5](https://github.com/josdejong/svelte-jsoneditor/compare/v0.1.4...v0.1.5) (2021-06-02)

### Features

- refactor TreeMode such that it can hold an empty document, make undo/redo working ([19f18ec](https://github.com/josdejong/svelte-jsoneditor/commit/19f18ec05cbdfb4c25ff81fa1b271cc11222c6d0))
- update dependencies ([f4931c8](https://github.com/josdejong/svelte-jsoneditor/commit/f4931c84d019f1e0d5156d07add2f7978f36e38f))

### Bug Fixes

- "Ok" message after auto repair not working anymore ([e5b6e01](https://github.com/josdejong/svelte-jsoneditor/commit/e5b6e01c6aedb676925ebd97a77666f4d549e8ce))
- editor not getting focus when clicking inside the repair preview ([913ef17](https://github.com/josdejong/svelte-jsoneditor/commit/913ef17a331356aa641c73ec896209cb428aaaaa))
- properly handle repaired/unrepaired text with undo/redo ([1259e48](https://github.com/josdejong/svelte-jsoneditor/commit/1259e488b2e712a27d1a0189154c217b5c5029af))
- solve SCSS warnings ([02854e6](https://github.com/josdejong/svelte-jsoneditor/commit/02854e6e1c8b9a730d66f84434ab8fba463f2e7d))
- solve some SCSS warnings ([2832337](https://github.com/josdejong/svelte-jsoneditor/commit/28323370f1a710cfccc8deec544c0cc87a36fd9a))
- some fixes in ensuring a selection in case of an empty document ([ed14a8c](https://github.com/josdejong/svelte-jsoneditor/commit/ed14a8ca95b47ac2dbcef9f7809e48615befb0bc))
- transform and sort not triggering a change event ([3b16a21](https://github.com/josdejong/svelte-jsoneditor/commit/3b16a2158e5d925e3abfa80030858ccb44dacff4))

### [0.1.4](https://github.com/josdejong/svelte-jsoneditor/compare/v0.1.3...v0.1.4) (2021-05-26)

### Bug Fixes

- clear old files from `dist` folder before bundling ([59d1ec0](https://github.com/josdejong/svelte-jsoneditor/commit/59d1ec080fd6eb70401424ffee0b27452c24114c))

### [0.1.3](https://github.com/josdejong/svelte-jsoneditor/compare/v0.1.2...v0.1.3) (2021-05-26)

### Bug Fixes

- generated files missing in published npm package ([c63b1c1](https://github.com/josdejong/svelte-jsoneditor/commit/c63b1c11d6cfd7d98e8cfe65c00a34b17f061da6))

### [0.1.2](https://github.com/josdejong/svelte-jsoneditor/compare/v0.0.21...v0.1.2) (2021-05-26)

### Features

- link to source code for Svelte component usage, describe how to setup required preprocessors ([72f04b4](https://github.com/josdejong/svelte-jsoneditor/commit/72f04b4e053398c189101d174ae501eae964bdef))

### Bug Fixes

- changing validator not triggering an update in CodeMode ([5b4866e](https://github.com/josdejong/svelte-jsoneditor/commit/5b4866eb64c199b4f5a1cb4ba911edc737ba7ae5))

### [0.0.21](https://github.com/josdejong/svelte-jsoneditor/compare/v0.0.20...v0.0.21) (2021-05-13)

### Features

- implement validation errors overview and validation error annotations in code mode ([#6](https://github.com/josdejong/svelte-jsoneditor/issues/6)) ([b206f10](https://github.com/josdejong/svelte-jsoneditor/commit/b206f10330bb7eae5db25dbdb5c45c25a55c1869))

### Bug Fixes

- validation errors on an object/array not visible when expanded ([d77ae5b](https://github.com/josdejong/svelte-jsoneditor/commit/d77ae5bad3ecccc0dd3609d20e89984d7ec14585))

### [0.0.20](https://github.com/josdejong/svelte-jsoneditor/compare/v0.0.19...v0.0.20) (2021-05-12)

### Bug Fixes

- alignment of context menu when clicking the context menu button of the main menu ([f4c0c5e](https://github.com/josdejong/svelte-jsoneditor/commit/f4c0c5e675ccb5800d1281c346c732ff25e1f6d9))
- let "Remove" remove the whole item/entry when a key or value is selected ([ca1bcec](https://github.com/josdejong/svelte-jsoneditor/commit/ca1bcece14ffe173c73cfc1fad70d0cdcf99230e))

### [0.0.19](https://github.com/josdejong/svelte-jsoneditor/compare/v0.0.18...v0.0.19) (2021-04-28)

### Bug Fixes

- fix empty changelog ([090003a](https://github.com/josdejong/svelte-jsoneditor/commit/090003a8bcc3b3c7068a61210cc87f06ded7d284))
- fix linting issues ([6ab1fc1](https://github.com/josdejong/svelte-jsoneditor/commit/6ab1fc1f57a688468940690c5fc91dcae9808e9e))

### [0.0.18](https://github.com/josdejong/svelte-jsoneditor/compare/v0.0.17...v0.0.18) (2021-04-28)

- Setup tooling for releases (standard-version, commitlint, husky)

### [0.0.17](https://github.com/josdejong/svelte-jsoneditor/compare/v0.0.16...v0.0.17) (2021-04-28)

- Setup tooling for releases (standard-version, commitlint, husky)

### 0.0.16 (2021-04-28)

- Implemented context menu.
- Many small refinements.
