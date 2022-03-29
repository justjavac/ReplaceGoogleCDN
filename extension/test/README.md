# 测试

## 测试 chromium extension v2 移除 CSP
> 查看 extensions/test/remove-csp-create-remove-header-options.js 文件


## 测试 使用自建CDN 替换 URL 功能
> 查看 extensions/test/use-self-build-cdn.js 文件

## [测试升级chromim extension v2 升级为 v3](extension-v3-test/README.md)

## [参考文档chrome extension v3](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/#example)

## manifest.json  declarative_net_reques 高级配置示例 
### 匹配指定域名 
> github.com  -> github-com.proxy.domain.com
> 真实测试地址： github.com  ->  https://github-com.proxy.xiaoshuogeng.com/
```json

{
    "id": "ruleset_advance_redirect_1",
    "enabled": true,
    "path": "rules/rules_advance_redirect_1.json"
}

```
## 匹配指定域名
> www.google.com   ->    https://2_www_xn--3px_google_xn--3px_com.proxy.domain.com/
>真实测试地址 www.google.com   ->    https://2_www_xn--3px_google_xn--3px_com.proxy.xiaoshuogeng.com/

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
    "id": "ruleset_append_header_1",
    "enabled": true,
    "path": "rules/rules_block_1.json"
}

```