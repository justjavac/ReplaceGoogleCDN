# manifest.json declarative_net_reques 配置示例

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


