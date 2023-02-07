# 测试用例

> 打开 dev-tools 面板查看请求

1. [stackoverflow 打开 `https://stackoverflow.com/tags/socat/hot?filter=all` 查看结果](https://stackoverflow.com/tags/socat/hot?filter=all)
1. [Google reCAPTCHA 打开 `https://patrickhlauke.github.io/recaptcha/` 查看结果](https://patrickhlauke.github.io/recaptcha/)
1. [ `pub.dev` 域名下 `fonts.googleapis.com` 无法地址重定向； 打开 `https://pub.dev/` 查看结果](https://pub.dev/)
1. [`cdn.jsdelivr.net` 替换为 `fastly.jsdelivr.net` 打开 `https://cdn.jsdelivr.net/` 查看结果 ](https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js)
1. [`cdnjs.cloudflare.com` 替换为 `cdnjs.loli.net` 打开 `https://cdnjs.cloudflare.com/` 查看结果 ](https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.1.2/reveal.min.css)
1. [`developers.google.com` 替换为 `developers.google.cn` 打开 `https://developers.google.com/` 查看结果 ](https://developers.google.com)
1. [`code.jquery.com/jquery-` 替换为 `lib.baomitu.com/jquery/` 打开 `https://releases.jquery.com/` 查看结果 ](https://releases.jquery.com/)
1. [`code.jquery.com/ui/` 替换为 `ajax.aspnetcdn.com/ajax/jquery.ui` 打开 `https://releases.jquery.com/` 查看结果 ](https://releases.jquery.com/)
1. [`commondatastorage.googleapis.com/chromium-browser-snapshots/` 替换为 `https://commondatastorage.googleapis.com/chromium-browser-snapshots/Mac/1086244/chrome-mac.zip` 打开 `https://commondatastorage.googleapis.com/chromium-browser-snapshots/` 查看结果 ](https://commondatastorage.googleapis.com/chromium-browser-snapshots/Mac/1086244/chrome-mac.zip)
1. [developer.android.com](https://developer.android.com/?hl=zh-cn)
1. [source.android.com](https://source.android.com)
1. [jquery](https://releases.jquery.com/)
1. [material](https://m3.material.io/)

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

> 修改优先级以后载入规则，优先级高的规则生效

```text

https://github.com/justjavac/ReplaceGoogleCDN/blob/master/extension/rules/mirrors/ajax.googleapis.com.json?raw=true
https://github.com/justjavac/ReplaceGoogleCDN/blob/master/extension/rules/mirrors/cdn.jsdelivr.net.json?raw=true
https://github.com/justjavac/ReplaceGoogleCDN/blob/master/extension/rules/mirrors/fonts.googleapis.com.json?raw=true
https://github.com/justjavac/ReplaceGoogleCDN/blob/master/extension/rules/mirrors/themes.googleusercontent.com.json?raw=true
https://github.com/justjavac/ReplaceGoogleCDN/blob/master/extension/rules/mirrors/code.jquery.com.json?raw=true
https://github.com/justjavac/ReplaceGoogleCDN/blob/master/extension/rules/mirrors/fonts.gstatic.com.json?raw=true
https://github.com/justjavac/ReplaceGoogleCDN/blob/master/extension/rules/mirrors/translate.googleapis.com.json?raw=true
https://github.com/justjavac/ReplaceGoogleCDN/blob/master/extension/rules/mirrors/cdnjs.cloudflare.com.json?raw=true
https://github.com/justjavac/ReplaceGoogleCDN/blob/master/extension/rules/mirrors/code.jquery.com-ui.json?raw=true
https://github.com/justjavac/ReplaceGoogleCDN/blob/master/extension/rules/mirrors/gravatar.com.json?raw=true
https://github.com/justjavac/ReplaceGoogleCDN/blob/master/extension/rules/mirrors/www.gstatic.com.json?raw=true


# 镜像地址

https://www.jingjingxyk.com/chromium-extension/ReplaceGoogleCDN/rules/mirrors/ajax.googleapis.com.json?raw=true
https://www.jingjingxyk.com/chromium-extension/ReplaceGoogleCDN/rules/mirrors/cdn.jsdelivr.net.json?raw=true
https://www.jingjingxyk.com/chromium-extension/ReplaceGoogleCDN/rules/mirrors/fonts.googleapis.com.json?raw=true
https://www.jingjingxyk.com/chromium-extension/ReplaceGoogleCDN/rules/mirrors/themes.googleusercontent.com.json?raw=true
https://www.jingjingxyk.com/chromium-extension/ReplaceGoogleCDN/rules/mirrors/code.jquery.com.json?raw=true
https://www.jingjingxyk.com/chromium-extension/ReplaceGoogleCDN/rules/mirrors/fonts.gstatic.com.json?raw=true
https://www.jingjingxyk.com/chromium-extension/ReplaceGoogleCDN/rules/mirrors/translate.googleapis.com.json?raw=true
https://www.jingjingxyk.com/chromium-extension/ReplaceGoogleCDN/rules/mirrors/cdnjs.cloudflare.com.json?raw=true
https://www.jingjingxyk.com/chromium-extension/ReplaceGoogleCDN/rules/mirrors/code.jquery.com-ui.json?raw=true
https://www.jingjingxyk.com/chromium-extension/ReplaceGoogleCDN/rules/mirrors/gravatar.com.json?raw=true
https://www.jingjingxyk.com/chromium-extension/ReplaceGoogleCDN/rules/mirrors/www.gstatic.com.json?raw=true

```

## 拨测工具测试地址

```text

https://fonts.googleapis.cn/css?family=Google+Sans

https://fonts.gstatic.cn/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4.woff2

```

## 测试地址

- [download-chromium](https://commondatastorage.googleapis.com/chromium-browser-snapshots/Mac/1086244/chrome-mac.zip)
- [download-chromium mirror](https://registry.npmmirror.com/-/binary/chromium-browser-snapshots/Mac/1086244/chrome-mac.zip)

```text
https://download-chromium.appspot.com/
https://download-chromium.appspot.com/?platform=Win_x64&type=snapshots
https://commondatastorage.googleapis.com/chromium-browser-snapshots/Linux_ChromiumOS_Full/1101351/chrome-chromeos.zip
```
