# 测试说明

## V2 为什么要升级到 V3

> Chrome 网上应用店将不再接受新的 Manifest V2 扩展。 开发者仍可推送现有 Manifest V2 扩展的更新
> https://developer.chrome.com/blog/mv2-transition/
> Manifest version 2 is deprecated, and support will be removed in 2023. See https://developer.chrome.com/blog/mv2-transition/ for more details.

## [firefox 支持 V3 情况](https://www.mozilla.org/en-US/firefox/109.0/releasenotes/)

## 测试用例

1. [stackoverflow](https://stackoverflow.com/tags/socat/hot?filter=all)
1. [www.google.com/recaptcha/api.js](https://patrickhlauke.github.io/recaptcha/)
1. [修改 content-security-policy ](https://pub.dev/)
1. [cdn.jsdelivr.net](https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js)
1. [developers.google.com](https://developers.google.com/)
1. [developer.android.com](https://developer.android.com/?hl=zh-cn)
1. [source.android.com](https://source.android.com)
1. [jquery](https://releases.jquery.com/)
1. [material](https://m3.material.io/)

## 高级玩法测试例子

- https://gerrit.googlesource.com/gerrit
- https://www.chromium.org
- https://chromium.googlesource.com/
- https://source.chromium.org/chromium
- https://cs.opensource.google/

### 让 XP 系统下的 chrome 49 能使用本扩展

> 初衷： 有些软件只能运行在 XP 系统下， 已经做了实体机迁移到虚拟机
> XP 系统有些网站打不开，原因是 Let's Encrypt 证书链过期
> 支持 XP 系统的最后一个 chrome 版本 49.0.2623.112

## XP 系统下的最后一个 chrome 版本 49.0.2623.112

1. [支持 XP 系统的 chromium 版本 49.0.2623.112 可以自己编译](https://chromium.googlesource.com/chromium/src/+/49.0.2623.112)
1. [archive 档案馆有一份 支持 XP 系统的的 chromium 版本 49.0.2623.112 ](https://archive.org/download/49.0.2623.112ChromeInstaller)

#### Let's Encrypt 证书链过期问题和解决办法

1. [Let's Encrypt 证书链过期问题](https://letsencrypt.org/zh-cn/docs/dst-root-ca-x3-expiration-september-2021/)
1. [Let's Encrypt 证书链过期问题解决方案](https://docs.certifytheweb.com/docs/kb/kb-202109-letsencrypt/)
1. [Let's Encrypt 证书链过期 XP 系统下解决办法，导入证书](http://x1.i.lencr.org/)
1. [et's Encrypt 验证导入的证书链](https://valid-isrgrootx1.letsencrypt.org/)

#### Sectigo 证书链过期问题和解决办法

1. [Sectigo AddTrust External CA Root 根证书 2020 年 5 月 30 日到期和解决方案](https://billing.yahuhost.com/announcements/196/Sectigo-AddTrust-External-CA-Root-%E6%A0%B9%E8%AF%81%E4%B9%A62020%E5%B9%B45%E6%9C%8830%E6%97%A5%E5%88%B0%E6%9C%9F.html)
