CHANGELOG for 0.10.x
## 新增适配 chromium manifest v3版本

## 变更
1. manifest.json -> manifest-v2.json  (已复制保存）
2. background.js    不再使用了
3. manifest.json：    manifest_version -> 3
4. 新增  chromium manifest v3    declarativeNetRequest   rules  
5. 新增 redirect url rule (rules/rules_redirect_1.json)
6. 新增 remove response header rule 可以移除CSP选项  (rules/rules_remove_header_1.json)
7. 新增 append request  header rule 可向请求头添加内容  (rules/rules_append_header_1.json)

