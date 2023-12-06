# 请求地址重定向 工具文档 文档

> 借助浏览器提供的API，实现请求地址重定向

## v2 版本 与 v3 最大的区别：

> V2 版本允许使用 javascript 脚本 动态修改 HTTP请求的 请求头 和 响应头 ，V3
> 版本禁止使用
>
> V3 使用声明式规则 实现 对HTTP请求的 请求头 和 响应头的修改,不支持使用
> javascript 动态修改

## 浏览器 V2 API

1. [浏览器 V2 API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)
1. [浏览器 V3 API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest)
1. [chromium declarativeNetRequest匹配规则文档](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/)

## [firefox 支持 V3 情况](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest)

> firefox 113 版本开始支持 v3
