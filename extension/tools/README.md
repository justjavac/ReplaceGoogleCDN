# 小工具集

1. [轻松测试Web API与浏览器的兼容情况](https://caniuse.com/)
1. [html5test](https://html5test.com/)
2. [Features Detection](https://browserleaks.com/features)

## mainifest v3 兼容 firefox 工具

```shell
# 查看帮助
python3 extension/tools/update-manifest.py  --help

# 切换mainfest.json 支持 chromium 系浏览器
python3 extension/tools/update-manifest.py  chromium

# 切换mainfest.json 支持 firefix  系浏览器
python3 extension/tools/update-manifest.py  firefox

```

## 下载应用商店里扩展源码

```shell

python3 extension/tools/download-chromium-extension.sh
# 通过代理下载
python3 extension/tools/download-chromium-extension.sh --proxy http://127.0.0.1:1080

```

## 下载 chromium 浏览器

> 查看chromium 版本 （镜像源） https://registry.npmmirror.com/-/binary/chromium-browser-snapshots/

> 查看chromium 版本  https://commondatastorage.googleapis.com/chromium-browser-snapshots/

```shell
# 下载 npmmirror.com 提供的 chromium 镜像 
bash extension/tools/download-chromium.sh 
# 通过代理下载  chromium 
bash extension/tools/download-chromium.sh --proxy http://127.0.0.1:1080 --official
```

## 运行 chromium 浏览器

```shell
bash extension/tools/chromium.sh
```

## 下载 firefox 浏览器

> 查看 firefox 版本  https://archive.mozilla.org/pub/firefox/releases/

```shell
bash extension/tools/download-firefox.sh
# 下载指定版本firefox 
bash extension/tools/download-firefox.sh 115.0esr
```

## 运行firefox 浏览器

```shell 
bash extension/tools/firefox.sh 
```


## 启动  Proxy Auto-Configuration

> Proxy Auto-Configuration (PAC) file

```shell 
bash extension/tools/web-server.sh 

# 使用 pac 文件
# chromium  --proxy-pac-url="http://127.0.0.1:8000/proxy.pac"  --host-resolver-rules="MAP * ~NOTFOUND , EXCLUDE 127.0.0.1"

```