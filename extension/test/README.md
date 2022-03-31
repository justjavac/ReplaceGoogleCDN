# 测试

## 测试 chromium extension v2 移除 CSP
> 查看 extensions/test/remove-csp-create-remove-header-options.js 文件


## 测试 使用自建CDN 替换 URL 功能
> 查看 extensions/test/use-self-build-cdn.js 文件

## [测试升级chromim extension v2 升级为 v3](extension-v3-test/README.md)

## [参考文档chrome extension v3](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/#example)

## [chrome extension v3测试 例子](extension-v3-test/README.md)

## 测试步骤
1. 修改 extension/manifest.json 文件 启用测试配置
2. 更新浏览器扩展
3. 浏览器打开地址： https://stackoverflow.com/questions
4. 也可以启动本地测试
5. 启动 本地 web server：   sh  extension/test/extension-v3-test/startup-local-test-web-server.sh
6. 浏览器打开地址： http://127.0.0.1:8001
7. 打开浏览嚣控制台 网络面板查看网址结果

## 自动化测试脚本
```shell

sh extension/test/run-auto-test.sh


## 创建指定页面，查看结果


```

## 调用浏览器打开指定页面
> 配合 setup-chromium-remote-debug-listen ； 能在服务器调用你本地的浏览器 。

```shell

curl http://127.0.0.1:9222/json/new?chrome://version/
curl http://127.0.0.1:9222/json/new?chrome://extensions/
curl http://127.0.0.1:9222/json/new?chrome://chrome-urls

curl htt://127.0.0.1:9222/json/new?https://github.com
curl http://127.0.0.1:9222/json/new?https://www.google.com
curl http://127.0.0.1:9222/json/new?https://www.baidu.com
curl http://127.0.0.1:9222/json/new?https://www.qq.com
curl http://127.0.0.1:9222/json/new?https://www.youtube.com


```
