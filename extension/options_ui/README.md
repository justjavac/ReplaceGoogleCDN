# 选项页说明

## 选项页原理

> 选项页一直都是围绕 `chrome.declarativeNetRequest.updateDynamicRules` 函数的使用，而展开开发工作

> 函数使用文档： https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/#method-updateDynamicRules

## 函数的使用用法

```text

// chromium 内核版本87以上开始支持

//添加的规则
addRules=[{规则1},{规则2},{规则3},{规则4}]

//要删除的规则ID
removeRuleIds=[规则1的id,规则2的id,规则3的id]

UpdateRuleOptions={
    addRules,
    removeRuleIds
}

chrome.declarativeNetRequest.updateDynamicRules(
    options: UpdateRuleOptions,
    callback?: function,
)

```

## 来个演示例子

```javascript
// developers.google.com 重定向到 developers.google.cn
// 123 是被删除的规则ID (和添加规则的例子id=10同一个属性)

chrome.declarativeNetRequest.updateDynamicRules(
  {
    addRules: [
      {
        id: 10,
        priority: 1,
        action: {
          type: "redirect",
          redirect: {
            transform: {
              scheme: "https",
              host: "developers.google.cn",
            },
          },
        },
        condition: {
          urlFilter: "developers.google.com",
          requestDomains: ["developers.google.com"],
          resourceTypes: [
            "main_frame",
            "sub_frame",
            "stylesheet",
            "script",
            "image",
            "font",
            "object",
            "xmlhttprequest",
            "ping",
            "csp_report",
            "media",
            "websocket",
            "webtransport",
            "webbundle",
            "other",
          ],
        },
      },
    ],
    removeRuleIds: [123],
  },
  (parameter) => {
    console.log(parameter);
  }
);
```

## 选项页做了什么事？

> 根据规则的来源把 规则 ID 划分了成了不同的区间段,

> 然后调用函数，执行规则插入、删除 、备份操作

> 更新操作： 其实是删除，然后插入

> 规则 ID 是自定义的

## 按照规则来源划分规则 ID 区间段

| 规则来源               | 对应选项页选项                                                                     |          ID 区间段          | 区间名称             | 作用                                                     | 与删除选项的关系)            |
| :--------------------- | :--------------------------------------------------------------------------------- | :-------------------------: | :------------------- | :------------------------------------------------------- | :--------------------------- |
| 固定配置               | 默认侯选项切换                                                                    |        ID 编号<10000        |默认侯选项切换       | 改变默认规则候选项                                       | 删除规则只删除对应区间的规则 |
| 自定义                 | 选项三：自定义规则 -- 新增特制规则                                                 | 10000>=规则 ID 编号<=19999  | 自定义特制规则编号   | 自己定义规则 特制规则                                    | 删除规则只删除对应区间的规则 |
| 自定义                 | 选项三：自定义规则 -- 新增普通规则                                                 | 20000>=规则 ID 编号<=29999  | 自定义普通规则编号   | 自己定义规则 普通规则                                    | 删除规则只删除对应区间的规则 |
| 同步远端配置的静态规则 | 选项一：全局动态规则处理 -- 同步远端仓库最新静态规则到本地，并停用本地默认静态规则 | 30000<=规则 ID 编号<=39999  | 同步远端静态规则编号 | 实现不更新扩展，更新默认规则，取代本地已有的默认静态规则 | 删除规则只删除对应区间的规则 |
| 同步远端动态规则       | 选项二：同步远端配置规则 -- 同步远端配置规则                                       | 40000<=规则 ID 编号<=320000 | 同步远端动态规则     | 同步指定仓库地址的规则， 实现不更新扩展，更新规则        | 删除规则只删除对应区间的规则 |
| 未定义                 | 无                                                                                 |             无              | 无                   | 无                                                       | 无                           |

```text
默认侯选项切换规则编号： 编号<=10000

自定义特制规则编号： 10000>=编号<=19999

自定义规则编号： 20000>=编号<=29999

同步远端静态规则编号：30000<=编号<=39999

同步远端动态规则编号：40000<=编号<=320000

其他编号： 未定义

```

## 固定规则编号

| 规则 ID |                     URI                      |  备注  |
| :-----: | :------------------------------------------: | :----: |
|    1    |             ajax.googleapis.com              |  启用  |
|    2    |             fonts.googleapis.com             |  启用  |
|    3    |         themes.googleusercontent.com         |  启用  |
|    4    |              fonts.gstatic.com               |  启用  |
|    5    |             secure.gravatar.com              |  启用  |
|    6    |      maxcdn.bootstrapcdn.com/bootstrap       |  启用  |
|    7    |   code.jquery.com/jquery-(version)(suffix)   |  启用  |
|    8    | code.jquery.com/ui/(prefix)(version)(suffix) |  启用  |
|    9    |             cdnjs.cloudflare.com             | 未启用 |

## 演示地址的规则来源

> https://github.com/jingjingxyk/extension-v3-test/tree/main/rules

## 清空所有动态规则

> 通过 `chrome.declarativeNetRequest.updateDynamicRules` 添加的规则，都会被删除

## 备份规则

1. 备份单条规则
2. 备份所有动态规则
