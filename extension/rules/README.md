# manifest.json declarative_net_reques 配置示例

## 匹配规则文档:

1. [declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/)

## manifeset.json 参考 declarative_net_request 配置

> chromium 内核版本需要大于 87

```json
{
  "declarative_net_request": {
    "rule_resources": [
      {
        "id": "ruleset_redirect_main",
        "enabled": true,
        "path": "rules/rules_redirect_main.json"
      },
      {
        "id": "ruleset_redirect_main_extra",
        "enabled": true,
        "path": "rules/rules_redirect_main_extra.json"
      },
      {
        "id": "ruleset_remove_content_security_policy_header",
        "enabled": true,
        "path": "rules/rules_remove_content_security_policy_header.json"
      },
      {
        "id": "ruleset_domain_replace",
        "enabled": false,
        "path": "rules/rules_domain_replace.json"
      }
    ]
  }
}
```

## 高级玩法(默认不启用)

> 使用时，请把 `proxy.domain.com` 更换为你自己的域名

> 固定地址替换 `rules_advance_redirect_1.json`

> 动态地址替换 `rules_advance_redirect_2.json`

> 移除 content-security-policy `rules_remove_content_security_policy_header.json`

> 阻止请求 `rules_block_request.json`

> [应用例子：用于查看 chromium 的源码 ](https://github.com/jingjingxyk/extension-v3-test)

### 指定匹配域名

> https://github.com -> https://github-com.proxy.domain.com

```json
{
  "id": "ruleset_advance_redirect_1",
  "enabled": true,
  "path": "rules/advance/rules_advance_redirect_1.json"
}
```

### 动态匹配域名

> https://www.chromium.org/ -> https://2_www_xn--3px_chromium_xn--3px_org.proxy.domain.com/

```json
{
  "id": "ruleset_advance_redirect_2",
  "enabled": true,
  "path": "rules/advance/rules_advance_redirect_2.json"
}
```

### 阻止指定域名 (拦截请求)

```json
{
  "id": "ruleset_block_header_1",
  "enabled": true,
  "path": "rules/rules_block_request.json"
}
```

### 修改 http 请求头或者响应头

```json
{
  "id": "ruleset_remove_header_1",
  "enabled": true,
  "path": "rules/rules_append_header_1.json"
}
```
