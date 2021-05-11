Replace Google CDN
==================

[![](https://img.shields.io/github/issues/justjavac/ReplaceGoogleCDN.svg)](https://github.com/justjavac/ReplaceGoogleCDN/issues) [![](https://img.shields.io/github/release/justjavac/ReplaceGoogleCDN.svg)](https://github.com/justjavac/ReplaceGoogleCDN/releases)
[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/kpampjmfiopfpkkepbllemkibefkiice.svg)](https://chrome.google.com/webstore/detail/kpampjmfiopfpkkepbllemkibefkiice)

将 Google CDN 替换为国内的。

## 缘起

> 由于众所周知的原因，只需替换一个域名就可以继续使用 Google 提供的前端公共库了。
> 同样，通过 `script` 标记引用这些资源，让网站访问速度瞬间提速！

很多网站，尤其是国外网站，为了加快网站的速度，都使用了 Google 的 CDN。
但是在天朝，由于某些原因，导致全球最快的 CDN 变成了全球最慢的。

于是，我写了这个插件/扩展，将 Google 的 CDN 替换成国内的。

## 原理

此插件/扩展包括：

1. `ajax.googleapis.com` - 前端公共库
1. `fonts.googleapis.com` - 免费字体库
1. `themes.googleusercontent.com` - fonts 有时会使用到这个里面的资源
1. `fonts.gstatic.com` - 免费字体库
1. `www.google.com/recaptcha` - Google 图像验证库
1. `secure.gravatar.com` - gravatar 头像

## 安装

### 在线安装

- [Chrome](https://chrome.google.com/webstore/detail/replace-google-cdn/kpampjmfiopfpkkepbllemkibefkiice)
- [Firfox](https://addons.mozilla.org/en-US/firefox/addon/replace-google-cdn/)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/replace-google-cdn/cojepngjobmaiajphkijbdcdjnnjhpjc)

### 手动安装

Chrome 安装方法（Google 被墙了上不去）：

> 1. 下载 [ReplaceGoogleCDN](https://github.com/justjavac/ReplaceGoogleCDN/archive/master.zip) 然后解压，找到 `chrome` 子目录
> 2. 打开 Chrome，输入: `chrome://extensions/`
> 3. 勾选 Developer Mode
> 4. 选择 Load unpacked extension... 然后定位到刚才解压的文件夹里面的 chrome 目录，确定
> 5. 这就安装好了，去掉 Developer Mode 勾选。
