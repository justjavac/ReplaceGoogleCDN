# CHANGELOG

## [测试用例](/extension/test/README.md)
## [一个完整的 测试环境例子 `extension/test/extension-v3-test` ](/extension/test/extension-v3-test/README.md)

## CHANGELOG for 0.10.4
### 变更
>1. 修复 `www.google.com/recaptcha/` 无法显示问题； 通过新增 `extension/rules/rules_redirect_1_extra.json`实现
>2. test 环境 修改： `extension/test/extension-v3-test/README.md` 描述
>3. 格式化文件： `extension/rules/rules_redirect_1.json`
>4. 修复 `https://pub.dev/` 无法地址重定向；通过移除`pub.dev`的响应头`content-security-policy`实现
>5. test 用例 新增 `extension/test/README.md` 测试用例记录

## CHANGELOG for 0.10.3
### 变更
>1. 新增 公共 CDN 静态资源库 中科大 `rules/README.md`
>2. 修改屏蔽 `content-security-policy`功能，新增4个屏蔽选项 ` ["cross-origin-embedder-policy", "cross-origin-opener-policy", "cross-origin-opener-policy-report-only","cross-origin-embedder-policy-report-only"]`
>3. 新增 移除`CSP`的请求地址  `githubusercontent.com`
>4. 新增 `cdnjs.cloudflare.com` 替换规则 `rules-cdnjs-cloudflare-com-redirect.json`,默认未启用
>5. test 环境 修改功能：  github.com 地址替换后 PAJX 报错,  添加解决方案 `extension/test/extension-v3-test/js/content-scripts/github.js` 
>6. test 环境 新增功能：  自定义规则第一版雏形 `extension/test/extension-v3-test/index.html`



## CHANGELOG for 0.10.2 
### 变更
>1. test 环境 新增功能： service-worker `sw.js` 小工具，解决因域名地址替换导致出现的问题；比如 github PJAX 错误
>2. test 环境 新增功能： service-worker `sw.js` 小工具中 `extension/test/extension-v3-test/js/tools/self-define-browser-editor.js` 浏览器当作记事本使用 
>3. test 环境 新增功能： service-worker `sw.js` 小工具中 `extension/test/extension-v3-test/js/tools/myscript-tools.js` 开启"上帝"模式，可编辑网页
>4. test 环境 新增功能： service-worker `sw.js` 小工具中 `extension/test/extension-v3-test/js/tools/myscript-tools.js` 查看网页引入的所有域名
>5. 新增 `code.query.com` jquery 地址替换  
>6. 解决  0.10.1  版本中 `第9 , 10条不能共用问题`
>7. 删除  0.10.1  版本中 高级玩法 `excludedInitiatorDomains`错误配置 位于 `rules/rules_advance_redirect_2.json :  "excludedInitiatorDomains":[] `
>8. maxcdn.bootstrapcdn.com 替换为 lib.baomitu.com


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