## chromium extension v3 
> 一个完整的 测试例子

# 修改 manifest.json 文件测试配置,结果如下：
```text 

## manifeset.json 参考 declarative_net_request 配置
```json 
    
    "declarative_net_request" : {
        "rule_resources" : [
            {
                "id": "remove-header",
                "enabled": true,
                "path": "rules/rules_remove_header_1.json"
            },
            {
                "id": "ruleset_redirect_1",
                "enabled": true,
                "path": "rules/rules_advance_redirect_1.json"
            },
            {
                "id": "ruleset_redirect_2",
                "enabled": true,
                "path": "rules/rules_advance_redirect_2.json"
            },
            {
                "id": "block",
                "enabled": true,
                "path": "rules/rules_block_1.json"
            }
        ]
    }

```

## manifest.json  declarative_net_reques 高级配置示例
### 匹配指定域名
> github.com  -> github-com.proxy.domain.com

> 真实测试地址： github.com  ->  https://github-com.proxy.xiaoshuogeng.com/
```json

{
    "id": "ruleset_advance_redirect_1",
    "enabled": true,
    "path": "test/extension-v3-test/rules_advance_redirect_1.json"
}

```
## 动态匹配域名
> www.chromium.org   ->    https://2_www_xn--3px_chromium_xn--3px_org.proxy..domain.com/

>真实测试地址 https://www.chromium.org/   ->    https://2_www_xn--3px_google_xn--3px_com.proxy.xiaoshuogeng.com/

```json
{
    "id": "ruleset_advance_redirect_2",
    "enabled": true,
    "path": "test/extension-v3-test/rules_advance_redirect_2.json"
}
```

### 阻止指定域名 
```json

{
    "id": "ruleset_block_header_1",
    "enabled": true,
    "path": "test/extension-v3-test/rules_block_1.json"
}

```

## manifest host_permissions 例子
```javascript
{
    "host_permissions": [ //指定地址写法
         "*://ajax.googleapis.com/*",
         "*://fonts.googleapis.com/*",
         "*://themes.googleusercontent.com/*",
         "*://fonts.gstatic.com/*",
         "*://ssl.gstatic.com/*",
         "*://www.gstatic.com/*",
         "*://secure.gravatar.com/*",
         "*://maxcdn.bootstrapcdn.com/*",
    ], 
    "host_permissions": [ //所有地址写法,最省事
         "*://*.google.com/*",
        "*://*/*",
        "<all_urls>"
    ]
}
```


###  本地启动 web server
```shell

sh  extension/test/extension-v3-test/startup-local-test-web-server.sh

```