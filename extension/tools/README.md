# 小工具集

## mainifest v3 兼容 firefox 工具

```shell
# 查看帮助
python3 extension/tools/update-manifest.py  --help

# 切换mainfest.json 支持 chromium 系浏览器  
python3 extension/tools/update-manifest.py  chromium

# 切换mainfest.json 支持 firefix  系浏览器
python3 extension/tools/update-manifest.py  firefox

```

## 应用商店里扩展源码

```shell

python3 extension/tools/download-chromium-extension.sh 
# 通过代理下载
python3 extension/tools/download-chromium-extension.sh --proxy http://127.0.0.1:1080

```

## 下载chromium 浏览器
```shell
bash extension/tools/chromium.sh
```

## 下载firefox 浏览器

```shell
bash extension/tools/download-firefox.sh
```
