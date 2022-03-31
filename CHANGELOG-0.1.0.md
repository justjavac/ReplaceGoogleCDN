CHANGELOG for 0.10.1
## 新增适配 chromium manifest v3版本

## 变更
1. manifest.json -> manifest-v2.json  (已复制保存）
2. background.js    不再使用了
3. manifest.json：    manifest_version -> 3
4. 新增  chromium manifest v3    declarativeNetRequest   rules  
5. 新增 v3 redirect url rule (rules/rules_redirect_1.json)
6. 新增 v3 remove response header rule 可以移除CSP选项  (rules/rules_remove_header_1.json)
7. 新增 v3 append request  header rule 可向请求头添加内容  (rules/rules_append_header_1.json)
8. 新增 v3 block request  header rule 锁请求  (rules/rules_block_1.json)
9. 新增 v3 固定替换地址   rule  (rules/rules_advance_redirect_1.json)
10. 新增 v3 动态替换地址   rule  (rules/rules_advance_redirect_2.json)
11. 上述第9-10条不能同时使用，会产生冲突