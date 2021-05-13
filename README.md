# Replace Google CDN

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

## 效果

安装扩展/插件后访问 <https://stackoverflow.com/questions> 页面：

![](./screen-sof.png)

第一行是 jquery.min.js 的原始请求 `https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js`，被拦截并替换，返回的状态码为 307 Internal Redirect，耗时 26ms。第三行是 jquery.min.js 被替换后的请求，33kB，耗时 95ms。

下表是各种资源的网络请求对比（以替换后的速度为基准 100%）：

| 资源                     | 来源                           | 尺寸(kB) | 时间(ms) | 速度(B/ms) | 百分比 |
| ------------------------ | ------------------------------ | -------: | -------: | ---------: | -----: |
| jquery.min.js            | ajax.googleapis.com            |        0 |       26 |          - |      - |
| stub.en.js               | cdn.sstatic.net                |     18.0 |      293 |       61.4 |    18% |
| **jquery.min.js**        | ajax.loli.net ⚡️              |     33.1 |       95 |      348.4 |   100% |
| clc.min.js               | cdn.sstatic.net                |      4.2 |      399 |       10.5 |    30% |
| full.en.js               | cdn.sstatic.net                |     99.6 |      534 |      186.5 |    54% |
| gpt.js                   | securepubads.g.doubleclick.net |     21.3 |       85 |      250.6 |    72% |
| analytics.js             | google-analytics.com           |     19.6 |       79 |      248.1 |    71% |
| quant.js                 | secure.quantserve.com          |      9.1 |      420 |       21.7 |    62% |
| beacon.js                | sb.scorecardresearch.com       |      1.8 |       73 |       24.7 |    71% |
| integrator.js            | adservice.google.com 🐌        |      0.3 |       87 |        3.4 |     1% |
| markup.js                | clc.stackoverflow.com 🐌       |      9.2 |      252 |       36.5 |    10% |
| osd.js                   | googletagservices.com          |     28.1 |       90 |      312.2 |    89% |
| rules-p-c1rF4kxgLUzNc.js | rules.quantcount.com 🐌        |      0.4 |       96 |        4.2 |     1% |
| keyboard-shortcuts.en.js | cdn.sstatic.net                |      7.3 |       75 |       97.3 |  27.9% |

## 安装

### 在线安装

- [Chrome](https://chrome.google.com/webstore/detail/replace-google-cdn/kpampjmfiopfpkkepbllemkibefkiice)
- [Firfox](https://addons.mozilla.org/en-US/firefox/addon/replace-google-cdn/)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/replace-google-cdn/cojepngjobmaiajphkijbdcdjnnjhpjc)

### 手动安装

Chrome 安装方法（Google 被墙了上不去）：

> 1. 下载 [ReplaceGoogleCDN](https://github.com/justjavac/ReplaceGoogleCDN/archive/master.zip) 然后解压，找到 `extension` 子目录
> 2. 打开 Chrome，输入: `chrome://extensions/`
> 3. 勾选 Developer Mode
> 4. 选择 Load unpacked extension... 然后定位到刚才解压的文件夹里面的 chrome 目录，确定
> 5. 这就安装好了，去掉 Developer Mode 勾选。
