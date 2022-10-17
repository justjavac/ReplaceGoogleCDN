/*
*    v2 测试用例
*
*   测试步骤
*   1.  打开 extension/js/background.js
*   2.  修改第138行代码 ,修改结果如下：
*   3.   let suffix_domain = '.proxy.xiaoshuogeng.com'
*   4.  （129-130行 选择去掉相应的注释，打开调用入口）
*   5.   (234-245 行 打开注释 )
*   5.  浏览器更新扩展
*   6.  浏览器打开:  https://summerofcode.withgoogle.com/programs/2022/organizations
*   7.  浏览器打开:  https://source.chromium.org/chromium
*   8.  浏览器打开:   https://gerrit.googlesource.com/gerrit

*   6.  能打开成功--OK-结束！

*/

// 打开替换CDN 功能
/*
// extension/js/background.js （234-245行 选择去掉相应的注释）


//方法一： 使用nginx架设的服务地址替换 (支持N个域名)
return {redirectUrl: use_nginx_proxy(details,'.proxy.domain.com')};


//方法二： 支持指定数目的域名
let des_url;
if ((des_url = repace_cdn_urls(details))) {
     return {redirectUrl: des_url};
}
*/
