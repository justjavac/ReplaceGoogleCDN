# CHANGELOG for v3

## [测试用例](/extension/test/README.md)

## [一个完整的 测试环境例子 可用于查看优秀的源码 ](https://github.com/jingjingxyk/extension-v3-test)

## CHANGELOG for v3 0.10.24 [2023-02-19 21:25:00 +0800]

> 1. v3 版本 添加 默认候选规则，规则 id=9999，priority=9999（暂不启用)
> 1. v3 版本 备注信息： 规则 id=9999，用于覆盖其他地址重定向规则
> 1. v3 版本 添加 JSON [(josdejong/svelte-jsoneditor)](https://github.com/josdejong/svelte-jsoneditor)格式化工具

## CHANGELOG for v3 0.10.23 [2023-02-07 11:21:00 +0800]

> 1. v3 版本 修改 静态规则和默认候选项规则 规则编号统一一致
> 1. v3 版本 修改 默认启用`developer.android.com` 地址重定向
> 1. v3 版本 修改 默认启用`source.android.com` 地址重定向
> 1. v3 版本 升级 到 0.10.23

## CHANGELOG for v3 0.10.22 [2023-02-06 23:49:00 +0800]

> 1. v3 版本 修改 扩展选项页面拆分为 2 个页面,分别是默认配置页面和高级配置页面
> 1. v3 版本 新增 默认候选项新增域名`developer.android.com`
> 1. v3 版本 新增 默认候选项新增域名`source.android.com`
> 1. v3 版本 升级 到 0.10.22

## CHANGELOG for 0.10.21 [2023-02-05 13:22:30 +0800]

> 1. 默认候选项新增域名`developer.android.com`
> 1. 默认候选项新增域名`lh3.googleusercontent.com`
> 1. 默认候选项新增域名`cdn.sstatic.net`
> 1. 默认候选项新增域名`imgur.com`
> 1. 重定向例子 `golang.org/dl/`
> 1. 重定向例子 `commondatastorage.googleapis.com/chromium-browser-snapshots`
> 1. 规则列表区块颜色调整，用于区分不同的规则区间

## CHANGELOG for 0.10.20 [2023-01-30 23:12:54 +0800]

> 1. 移除无效的静态资源库 [辉哥博客&蓝易云安全](https://www.haah.net/archives/7885.html)
> 1. `fonts.googleapis.com` 重定向到 `fonts.googleapis.cn`
> 1. `fonts.gstatic.com` 重定向到 `fonts.gstatic.cn`
> 1. 新增使用扩展的修改响应头和请求头的功能解决跨域的例子 (CORS.json)
> 1. 新增解决 stackoverflow.com 网站下 cdn.sstatic.net 域下静态资源加载慢的例子 (sstatic.net-stackoverflow.com.json)
> 1. 修改演示例子里地址链接

## CHANGELOG for 0.10.19 [2022-12-29 12:41:02 +0800]

> 1. 添加 域名重定向到扩展指定指定页面的例子
> 1. 修改打包脚本 和 添加本地部署脚本

## CHANGELOG for 0.10.18 [2022-12-27 12:28:07 +0800]

> 1. 添加点击扩展图标-自动打开扩展选项页 简述
> 1. 启用快捷打开选项页功能
> 1. 补全默认切换选项

## CHANGELOG for 0.10.17 [2022-12-09 18:53:40 +0800]

> 1. 新增更新规则的功能
> 1. v2 版本修改使用例子

## CHANGELOG for 0.10.16 [2022-11-28 19:00:00 +0800]

> 1. 屏蔽快捷打开选项页功能

## CHANGELOG for 0.10.15 [2022-11-21 03:53:40 +0800]

> 1. 为默认静态规则，准备冗余候选项
> 1. 域名 `fonts.gstatic.com` 和 `fonts.googleapis.com` 暂时取消 地址重定向

## CHANGELOG for 0.10.14 [2022-11-19 22:17:40 +0800]

> 1. 新增拖拽文件上传规则
> 1. 修改选项页 README.md
> 1. 缩小部分规则匹配场景

## CHANGELOG for 0.10.13 [2022-11-05 03:10:40 +0800]

> 1. v2 版本扩展支持 XP 系统下 最后一个 chrome 版本

## CHANGELOG for 0.10.12 [2022-11-04 08:10:40 +0800]

> 1. v2 版本添加域名拦截功能

## CHANGELOG for 0.10.11 [2022-10-17 15:10:40 +0800]

> 1. 实现不更新扩展的前提下，同步主仓库最新版静态规则

## CHANGELOG for 0.10.10 [2022-10-16 00:25:40 +0800]

> 1. 新增 `cn.gravatar.com, en.gravatar.com` 地址重定向
> 1. `v3` 版本`manifest.json` 扩展选项页内容安全策略添加请求的地址
> 1. `v2` 版本补上 `code.jquery.com/jquery-` 替换
> 1. 新增下载扩展的方式和地址

## CHANGELOG for 0.10.9 [2022-10-04 16:10:40 +0800]

> 1. 扩展选项页功能完善-第三版
> 1. 扩展选项页增加-演示例子
> 1. 新增扩展选项功能截图

## CHANGELOG for 0.10.8 [2022-09-30 19:43:40 +0800]

> 1. 扩展选项页添加同步远端规则功能
> 2. 扩展选项页完善自定义规则功能

## CHANGELOG for 0.10.7 [2022-07-31 12:43:40 +0800]

> 1.  新增 `developers.google.com` - 替换为 `developers.google.cn`
> 2.  整理规则，合并规则文件，并且重命名名称
> 3.  新增 高阶定制玩法 辅助工具
> 4.  新增 扩展程序选项 WebUI 可视化自定义规则雏形
> 5.  使用 prettier 格式化代码
> 6.  添加自动化测试脚本

## CHANGELOG for 0.10.6

> 1. 重新启用对 firefox 的支持, 启用的扩展位于 `extension-v2` 目录
> 2. 移除目录 `extension/test/extension-v3-test`
> 3. 衍生新仓库 [extension-v3-test](https://github.com/jingjingxyk/extension-v3-test)

## CHANGELOG for 0.10.5

> 1.  新增 `cdn.jsdelivr.net` - 替换为 `fastly.jsdelivr.net`
> 2.  新增 `cdnjs.cloudflare.com` - 替换为 `cdnjs.loli.net` 默认未启用
> 3.  新增 公共 CDN 静态资源库 极客族公共加速服务 `https://cdn.geekzu.org/cached.html`
> 4.  新增 公共 CDN 静态资源库 七牛静态库 `http://staticfile.org/`
> 5.  新增 通过国内镜像 克隆本项目源代码

## CHANGELOG for 0.10.4

### 变更

> 1.  修复 `www.google.com/recaptcha/` 无法显示问题； 通过新增 `extension/rules/rules_redirect_1_extra.json`实现
> 2.  test 环境 修改： `extension/test/extension-v3-test/README.md` 描述
> 3.  格式化文件： `extension/rules/rules_redirect_1.json`
> 4.  修复 `https://pub.dev/` 无法地址重定向；通过移除`pub.dev`的响应头`content-security-policy`实现
> 5.  test 用例 新增 `extension/test/README.md` 测试用例记录

## CHANGELOG for 0.10.3

### 变更

> 1.  新增 公共 CDN 静态资源库 中科大 `rules/README.md`
> 2.  修改屏蔽 `content-security-policy`功能，新增 4 个屏蔽选项 ` ["cross-origin-embedder-policy", "cross-origin-opener-policy", "cross-origin-opener-policy-report-only","cross-origin-embedder-policy-report-only"]`
> 3.  新增 移除`CSP`的请求地址 `githubusercontent.com`
> 4.  新增 `cdnjs.cloudflare.com` 替换规则 `rules-cdnjs-cloudflare-com-redirect.json`,默认未启用
> 5.  test 环境 修改功能： github.com 地址替换后 PAJX 报错, 添加解决方案 `extension/test/extension-v3-test/js/content-scripts/github.js`
> 6.  test 环境 新增功能： 自定义规则第一版雏形 `extension/test/extension-v3-test/index.html`

## CHANGELOG for 0.10.2

### 变更

> 1.  test 环境 新增功能： service-worker `sw.js` 小工具，解决因域名地址替换导致出现的问题；比如 github PJAX 错误
> 2.  test 环境 新增功能： service-worker `sw.js` 小工具中 `extension/test/extension-v3-test/js/tools/self-define-browser-editor.js` 浏览器当作记事本使用
> 3.  test 环境 新增功能： service-worker `sw.js` 小工具中 `extension/test/extension-v3-test/js/tools/myscript-tools.js` 开启"上帝"模式，可编辑网页
> 4.  test 环境 新增功能： service-worker `sw.js` 小工具中 `extension/test/extension-v3-test/js/tools/myscript-tools.js` 查看网页引入的所有域名
> 5.  新增 `code.query.com` jquery 地址替换
> 6.  解决 0.10.1 版本中 `第9 , 10条不能共用问题`
> 7.  删除 0.10.1 版本中 高级玩法 `excludedInitiatorDomains`错误配置 位于 `rules/rules_advance_redirect_2.json : "excludedInitiatorDomains":[] `
> 8.  maxcdn.bootstrapcdn.com 替换为 lib.baomitu.com

## CHANGELOG for 0.10.1 新增适配 chromium manifest v3 版本

### 变更

> 1.  `manifest.json -> manifest-v2.json` (已复制保存）
> 2.  `background.js` 不再使用了
> 3.  `manifest.json： manifest_version -> 3`
> 4.  新增 `chromium manifest v3 declarativeNetRequest rules `
> 5.  新增 `v3 redirect url rule (rules/rules_redirect_1.json)`
> 6.  新增 `v3 remove response header rule` 可以移除 CSP 选项 ` (rules/rules_remove_header_1.json)`
> 7.  新增 `v3 append request header rule` 可向请求头添加内容 `(rules/rules_append_header_1.json)`
> 8.  新增 `v3 block request header rule` 锁请求 `(rules/rules_block_1.json)`
> 9.  新增 v3 固定替换地址 rule `(rules/rules_advance_redirect_1.json)`
> 10. 新增 v3 动态替换地址 rule ` (rules/rules_advance_redirect_2.json)`
> 11. 上述第 9-10 条不能同时使用，会产生冲突
