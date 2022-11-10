# 选项页说明

## 选项页原理

> 选项页一直都是围绕 `chrome.declarativeNetRequest.updateDynamicRules` 函数的使用，而展开开发工作

> 函数使用文档： https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/#method-updateDynamicRules

## 演示函数的使用用法

```text

// chromium 内核版本87以上开始支持

//添加的规则
addRules={}

//要删除的规则ID
removeRuleIds=[]

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

> 根据规则的来源把 ID 划分了成了不同的区间段,

> 然后调用函数，执行规则插入、删除 、备份操作

> 更新操作： 其实是删除，然后插入

## 按照规则来源划分规则 ID 区间段

| 规则来源               | 对应选项页选项                                                                    |          ID 区间段          | 区间名称             | 作用                                                     | 备注（与删除选项的关系)                                                                                         |
| :--------------------- | :-------------------------------------------------------------------------------- | :-------------------------: | :------------------- | :------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| 使用者自定义           | 选项三：自定义规则 --新增规则                                                     | 10000>=规则 ID 编号<=19999  | 自定义特制规则编号   | 自己定义规则 普通规则                                    | 与选项一：清空所有自定义动态规则 相对应。删除普通自定义规则，不会删除特制规则，删除规则时只删除对应区间的规则   |
| 使用者自定义           | 选项三：自定义规则 --新增特制规则                                                 | 20000>=规则 ID 编号<=29999  | 自定义特制规则编号   | 自己定义规则 特制规则                                    | 与选项一：清空所有自定义动态规则 相对应。删除特制自定义规则，不会自定义普通规则，删除规则时只删除对应区间的规则 |
| 同步远端配置的静态规则 | 选项一：全局动态规则处理 --同步远端仓库最新静态规则到本地，并停用本地默认静态规则 | 30000<=规则 ID 编号<=39999  | 同步远端静态规则编号 | 实现不更新扩展，更新默认规则，取代本地已有的默认静态规则 | 与选项一： 同步远端仓库最新静态规则到本地，并停用本地默认静态规则 相对应。删除规则时只删除对应区间的规则        |
| 同步远端动态规则       | 选项二：同步远端配置规则 --同步远端配置规则                                       | 40000<=规则 ID 编号<=320000 | 同步远端动态规则     | 同步指定仓库地址的规则， 实现不更新扩展，更新规则        | 与选项一：清空所有已同步的远端动态规则 相对应。删除规则时只删除对应区间的规则                                   |
| 其它未定义             | 无                                                                                |             无              | 无                   | 无                                                       | 无                                                                                                              |

## 演示地址的规则来源

> https://github.com/jingjingxyk/extension-v3-test/tree/main/rules
