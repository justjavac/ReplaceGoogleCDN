# 工具集

1. [轻松测试 Web API 与浏览器的兼容情况](https://caniuse.com/)
1. [html5test](https://html5test.com/)
1. [Features Detection](https://browserleaks.com/features)

## 打包 v3 mainifest 兼容 firefox 工具

```shell


# 查看帮助
python3 extension/tools/update-manifest.py  --help

# 切换mainfest.json 支持 chromium 系浏览器
python3 extension/tools/update-manifest.py  chromium

# 切换mainfest.json 支持 firefix  系浏览器
python3 extension/tools/update-manifest.py  firefox

```

## 下载 chrome 应用商店里扩展,并解压出源码

```shell

bash  tools/download-chromium-extension.sh
# 通过代理下载
bash  tools/download-chromium-extension.sh --proxy http://127.0.0.1:1080

```

## 下载 chromium 浏览器

> 查看 chromium 版本 （镜像源） https://registry.npmmirror.com/-/binary/chromium-browser-snapshots/

> 查看 chromium 版本 https://commondatastorage.googleapis.com/chromium-browser-snapshots/

```shell

bash tools/download-chromium.sh

# 通过代理下载  chromium
bash tools/download-chromium.sh --proxy http://127.0.0.1:1080

```

## 运行 chromium 浏览器

```shell
bash extension/tools/chromium.sh
```

## 下载 firefox 浏览器

> 查看 firefox 版本 https://archive.mozilla.org/pub/firefox/releases/

```shell

# 下载最新版 firefox
bash tools/download-firefox-latest.sh

# 下载指定版本firefox
bash tools/download-firefox.sh 121.0b6

```

## 运行 firefox 浏览器

```shell
bash tools/firefox.sh
```

## 启动 Proxy Auto-Configuration

> Proxy Auto-Configuration (PAC) file

```shell
bash tools/web-server.sh

# 使用 pac 文件

chromium  --proxy-pac-url="http://127.0.0.1:8000/proxy.pac"  --host-resolver-rules="MAP * ~NOTFOUND , EXCLUDE 127.0.0.1"

```
