Replace Google CDN
==================

** Firfox安装方法： **

> 插件地址1：[https://addons.mozilla.org/en-US/firefox/addon/replace-google-cdn/](https://addons.mozilla.org/en-US/firefox/addon/replace-google-cdn/)

> 插件地址2：[https://addons.mozilla.org/en-US/firefox/addon/google-cdn-replace/](https://addons.mozilla.org/en-US/firefox/addon/google-cdn-replace/)

** Chrome安装方法（Google被墙了上不去）： **

> 1. 下载[ReplaceGoogleCDN](https://github.com/justjavac/ReplaceGoogleCDN/archive/master.zip)然后解压，找到`chrome`子目录
> 2. 打开Chrome，输入: `chrome://extensions/`
> 3. 勾选Developer Mode
> 4. 选择Load unpacked extension...然后定位到刚才解压的文件夹，确定
> 5. 这就安装好了，去掉Developer Mode勾选。

** Chrome Web Store 安装地址： **

https://chrome.google.com/webstore/detail/replace-google-cdn/kpampjmfiopfpkkepbllemkibefkiice

> 由于众所周知的原因，只需替换一个域名就可以继续使用Google提供的前端公共库了。
> 同样，通过script标记引用这些资源，让网站访问速度瞬间提速吧骚年！

很多网站，尤其是国外网站，为了加快网站的速度，都是用了 Google 的 CDN。
但是在天朝，由于某些原因，导致全球最快的 CDN 变成了全球最慢的。

于是，我写了这个插件，将 Google 的 CDN 替换成国内的。

本来我使用的是 360 提供的。[360网站卫士常用前端公共库CDN服务](http://libs.useso.com)

经网友提醒 360 的不支持 https，于是改成[中科大](http://lug.ustc.edu.cn)的。

此插件包括三部分。

1. `ajax.googleapis.com` - 前端公共库
2. `fonts.googleapis.com` - 免费字体库
3. `themes.googleusercontent.com` - fonts 有时会使用到这个里面的资源
