# 测试用例

> 打开 dev-tools 面板查看请求

1. [stackoverflow 打开 `https://stackoverflow.com/tags/socat/hot?filter=all` 查看结果](https://stackoverflow.com/tags/socat/hot?filter=all)
1. [Google reCAPTCHA 打开 `https://patrickhlauke.github.io/recaptcha/` 查看结果](https://patrickhlauke.github.io/recaptcha/)
1. [ `pub.dev` 域名下 `fonts.googleapis.com` 无法地址重定向； 打开 `https://pub.dev/` 查看结果](https://pub.dev/)
1. [`cdn.jsdelivr.net` 替换为 `fastly.jsdelivr.net` 打开 `https://cdn.jsdelivr.net/` 查看结果 ](https://cdn.jsdelivr.net/)
1. [`cdnjs.cloudflare.com` 替换为 `cdnjs.loli.net` 打开 `https://cdnjs.cloudflare.com/` 查看结果 ](https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.1.2/reveal.min.css)
1. [`developers.google.com` 替换为 `developers.google.cn` 打开 `https://developers.google.com/` 查看结果 ](https://developers.google.com)
1. [`code.jquery.com/jquery-` 替换为 `lib.baomitu.com/jquery/` 打开 `https://releases.jquery.com/` 查看结果 ](https://releases.jquery.com/)
1. [`code.jquery.com/ui/` 替换为 `ajax.aspnetcdn.com/ajax/jquery.ui` 打开 `https://releases.jquery.com/` 查看结果 ](https://releases.jquery.com/)

## 扩展选项页，同步服务器端规则例子一

> [规则文件源地址](https://github.com/jingjingxyk/extension-v3-test/tree/main/rules/)

```text
    https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/auth.json?raw=true
    https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/rules_advance_redirect_1.json?raw=true
    https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/rules_advance_redirect_2.json?raw=true
    https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/rules_block_request.json?raw=true
    https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/rules_redirect_extra.json?raw=true
    https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/rules_remove_content_security_policy_header.json?raw=true

```

## 扩展选项页，同步服务器端规则例子二

```text
    https://github.com/jingjingxyk/extension-v3-test/blob/main/rules/auth.json?raw=true
    https://github.com/jingjingxyk/extension-v3-test/blob/main/rules/rules_advance_redirect_1.json?raw=true
    https://github.com/jingjingxyk/extension-v3-test/blob/main/rules/rules_advance_redirect_2.json?raw=true
    https://github.com/jingjingxyk/extension-v3-test/blob/main/rules/rules_block_request.json?raw=true
    https://github.com/jingjingxyk/extension-v3-test/blob/main/rules/rules_redirect_extra.json?raw=true
    https://github.com/jingjingxyk/extension-v3-test/blob/main/rules/rules_remove_content_security_policy_header.json?raw=true

```

## 静态默认规则候选项载入地址

```text

https://github.com/jingjingxyk/ReplaceGoogleCDN/blob/dev/extension/rules/mirrors/ajax.googleapis.com.json?raw=true
https://github.com/jingjingxyk/ReplaceGoogleCDN/blob/dev/extension/rules/mirrors/fonts.googleapis.com.json?raw=true
https://github.com/jingjingxyk/ReplaceGoogleCDN/blob/dev/extension/rules/mirrors/gravatar.com.json?raw=true
https://github.com/jingjingxyk/ReplaceGoogleCDN/blob/dev/extension/rules/mirrors/cdnjs.cloudflare.com.json?raw=true
https://github.com/jingjingxyk/ReplaceGoogleCDN/blob/dev/extension/rules/mirrors/fonts.gstatic.com.json?raw=true
https://github.com/jingjingxyk/ReplaceGoogleCDN/blob/dev/extension/rules/mirrors/themes.googleusercontent.com.json?raw=true

```

## 拨测工具测试地址

```text

https://fonts.googleapis.com/css?family=Google+Sans:300,400,500

https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4.woff2

```

