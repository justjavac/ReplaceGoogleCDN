"use strict"


// 用 document.designMode 可开启 Chrome 网页"上帝"模式，可编辑网页
document.designMode='on'
//or
document.body.contentEditable='true';
//or
document.documentElement.setAttribute("contenteditable","true");



// DOM节点 变动监听器
/*

let observer = new MutationObserver(callback);
observer.observe(node, config);

*/



// 虚拟dom使用
let domainSets= new Set()
let element=document.createDocumentFragment();
let ul=document.createElement('ul');
element.appendChild(ul);
let  list=''

//查看网页引入的所有资源
Array.from(window.performance.getEntriesByType("resource")).map(
    function (x) {//遍历
        console.log(x)

        var URLSearchParams = new URL(x.name);
        console.log(URLSearchParams)
        domainSets.add(URLSearchParams.host)
        if (x.initiatorType === "script" || x.initiatorType === 'link' ) {
            list  +=`<li>${x.initiatorType}:  ${x.name}</li>`
        }
    }
);
ul.innerHTML=list;
document.body.append(element);

//查看所有域名
console.log(domainSets.entries());


//查看所有cookie
(async()=>{
    let res = await cookieStore.getAll({domain:document.domain})
    console.log( res )
})() ;


