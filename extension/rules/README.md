# manifest.json declarative_net_reques 配置示例

## 网络拨测工具 (测试 公共 CDN 静态资源库 区域可用性)

1. [网络拨测工具](https://zijian.aliyun.com/detect/http)
2. [网站诊断分析工具](https://zijian.aliyun.com/)

## 公共 CDN 静态资源库

1. [前端 CDNJS 库及 Google Fonts、Ajax 和 Gravatar 国内加速服务 http://css.loli.net](https://u.sb/css-cdn/)
2. [360 奇舞团](https://cdn.baomitu.com/)
3. [又拍云](http://jscdn.upai.com/)
4. [BootCDN](https://www.bootcdn.cn/)
5. [字节跳动静态资源公共库](http://cdn.bytedance.com/)
6. [Microsoft Ajax Content Delivery Network](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview)
7. [jsdelivr](https://www.jsdelivr.com/)
8. [unpkg](https://unpkg.com/)
9. [cloudflare ](https://cdnjs.com/)
10. [google libraries cn](https://developers.google.cn/speed/libraries)
11. [七牛静态库 Staticfile CDN](http://staticfile.org/)
12. [极客族公共加速服务](https://cdn.geekzu.org/cached.html)
13. [中科大反向代理列表如下：](https://mirrors.ustc.edu.cn/)

```text
ajax.googleapis.com           ajax.proxy.ustclug.org
themes.googleusercontent.com  google-themes.proxy.ustclug.org
```

15. [CDNJS 南方科技大学](https://mirrors.sustech.edu.cn/help/cdnjs.html)
16. [CDNJS 重庆邮电大学暂时不可用](https://mirrors.cqupt.edu.cn/cdnjs/)
17. [CDNJS mirror list ](https://mirrorz.org/list/cdnjs)
18. [公共 CDN 静态资源加速服务 7ED Services ](https://www.7ed.net/start/public-cdn.html)

## 匹配规则文档:

1. [declarativeNetRequest](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/)

## 高级玩法

> 使用时，请把 `proxy.domain.com` 更换为你自己的域名

> 固定地址替换 `rules_advance_redirect_1.json`

> 动态地址替换 `rules_advance_redirect_2.json`

> 移除 content-security-policy `rules_remove_content_security_policy_header.json`

> 阻止请求 `rules_block_request.json`

## manifeset.json 参考 declarative_net_request 配置

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
