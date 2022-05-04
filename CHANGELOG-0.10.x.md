# CHANGELOG


## CHANGELOG for 0.10.2 
### 变更
>1. 新增test service-worker `sw.js` 小工具，解决因域名地址替换导致出现的问题；比如 github PJAX 错误
>2. 新增test service-worker `sw.js` 小工具中 `self-define-browser-editor.js` 浏览器当作记事本使用 
>3. 新增test service-worker `sw.js` 小工具中 `tools/myscript-tools.js` 开启"上帝"模式，可编辑网页
>4. 新增test service-worker `sw.js` 小工具中 `tools/myscript-tools.js` 查看网页引入的所有域名
>5. 新增 `code.query.com` jquery 地址替换  
>6. 解决 0.10.1 版本中 `第10,11条不能共用问题`
>7. 删除  0.10.1 版本中 高级玩法excludedInitiatorDomains错误配置 位于 `rules/rules_advance_redirect_2.json :  "excludedInitiatorDomains":[] `



## CHANGELOG for 0.10.1 新增适配 chromium manifest v3版本
### 变更

>1. `manifest.json -> manifest-v2.json`  (已复制保存）
>2. `background.js`    不再使用了
>3. `manifest.json：    manifest_version -> 3`
>4. 新增  `chromium manifest v3    declarativeNetRequest   rules ` 
>5. 新增 `v3 redirect url rule (rules/rules_redirect_1.json)`
>6. 新增 `v3 remove response header rule` 可以移除CSP选项 ` (rules/rules_remove_header_1.json)`
>7. 新增 `v3 append request  header rule` 可向请求头添加内容  `(rules/rules_append_header_1.json)`
>8. 新增 `v3 block request  header rule` 锁请求  `(rules/rules_block_1.json)`
>9. 新增 v3 固定替换地址   rule  `(rules/rules_advance_redirect_1.json)`
>10. 新增 v3 动态替换地址   rule ` (rules/rules_advance_redirect_2.json)`
>11. 上述第9-10条不能同时使用，会产生冲突