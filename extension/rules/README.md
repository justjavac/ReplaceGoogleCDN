# manifest.json  declarative_net_reques 配置示例



## 高级玩法
> 使用时，请把 proxy.domain.com 更换为你自己的域名
> 固定地址替换  rules_advance_redirect_1.json
> 动态地址替换  rules_advance_redirect_2.json
> 移除CSP   rules_remove_header_1.json


## manifeset.json 参考 declarative_net_request 配置
```json 
    "declarative_net_request" : {
        "rule_resources" : [
            {
                "id": "ruleset_redirect_1",
                "enabled": true,
                "path": "rules/rules_redirect_1.json"
            },
            {
                "id": "ruleset_remove_header_1",
                "enabled": true,
                "path": "rules/rules_remove_header_1.json"
            },
            {
                "id": "ruleset_block_header_1",
                "enabled": true,
                "path": "rules/rules_block_1.json"
            },
            {
                "id": "ruleset_advance_redirect_2",
                "enabled": true,
                "path": "rules/rules_advance_redirect_2.json"
            }
        ]
    },

```

### 指定匹配域名
> github.com  -> github-com.proxy.domain.com
```json

{
    "id": "ruleset_advance_redirect_1",
    "enabled": true,
    "path": "rules/rules_advance_redirect_1.json"
}

```
## 动态匹配域名
> www.google.com   ->    https://2_www_xn--3px_google_xn--3px_com.proxy.domain.com/

```json
{
    "id": "ruleset_advance_redirect_2",
    "enabled": true,
    "path": "rules/rules_advance_redirect_2.json"
}
```

### 阻止指定域名
```json

{
    "id": "ruleset_block_header_1",
    "enabled": true,
    "path": "rules/rules_block_1.json"
}

```