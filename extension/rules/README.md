# manifest.json  declarative_net_reques 配置示例

## 网络拨测工具  测试 公共 CDN 静态资源库 区域可用性
1. [网络拨测工具](https://zijian.aliyun.com/detect/http)
2. [网站诊断分析工具](https://zijian.aliyun.com/)


## 公共 CDN 静态资源库

1. [360 奇舞团](https://cdn.baomitu.com/)
2. [又拍云](http://jscdn.upai.com/)
3. [BootCDN](https://www.bootcdn.cn/)
4. [字节跳动静态资源公共库](http://cdn.bytedance.com/)
5. [Microsoft Ajax Content Delivery Network](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview)
6. [jsdelivr](https://www.jsdelivr.com/)
7. [unpkg](https://unpkg.com/)
8. [cloudflare ](https://cdnjs.com/)
9. [google libraries](https://developers.google.com/speed/libraries)



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

> https://github.com  ->  https://github-com.proxy.domain.com

```json

{
    "id": "ruleset_advance_redirect_1",
    "enabled": true,
    "path": "rules/rules_advance_redirect_1.json"
}

```
## 动态匹配域名

> https://www.chromium.org/   ->    https://2_www_xn--3px_chromium_xn--3px_org.proxy.domain.com/

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


