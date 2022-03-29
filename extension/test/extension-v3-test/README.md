
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
```javascript

[
     "ajax.googleapis.com",
     "fonts.googleapis.com",
     "themes.googleusercontent.com",
     "fonts.gstatic.com",
     "www.google.com",
     "secure.gravatar.com",
     "maxcdn.bootstrapcdn.com"
]
```

## 测试步骤
1. 修改 extension/manifest.json 文件 启用测试配置
2. 更新浏览器扩展
3. 浏览器打开地址： https://stackoverflow.com/questions
4. 也可以启动本地测试
5. 启动 本地 web server：   sh  extension/test/extension-v3-test/startup-local-test-web-server.sh
6. 浏览器打开地址： http://127.0.0.1:8001
7. 打开浏览嚣控制台 网络面板查看网址结果


###  本地启动 web server 
```shell

sh  extension/test/extension-v3-test/startup-local-test-web-server.sh

```

### 修改 manifest.json 文件测试配置,结果如下：
```text 

    "declarative_net_request" : {
        "rule_resources" : [
            {
                "id": "ruleset_1",
                "enabled": true,
                "path": "rules/rules_1.json"
            },
            {
                "id": "ruleset_2",
                "enabled": true,
                "path": "test/extension-v3-test/rules_test.json"
            }
        ]
    },


```