# 网络拨测工具 (测试 公共 CDN 静态资源库 区域可用性)

1. [网络拨测工具](https://zijian.aliyun.com/detect/http)
1. [网站诊断分析工具](https://zijian.aliyun.com/)

## 拨测例子

打开拨测站点： https://zijian.aliyun.com/detect/http 输入如下任意地址

```text

https://fonts.googleapis.cn/css?family=Google+Sans

https://fonts.gstatic.cn/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4.woff2


dig fonts.googleapis.cn
dig fonts.gstatic.cn

```

### 拨测完毕,打开浏览器控制台 执行如下代码，提取到 IP 地址

```javascript
{
    let list = [];
    let table_body = document.querySelectorAll(
        "#app .show-detection-data .ping-result-area .next-table-body table tbody tr"
    );
    table_body.forEach((value, key, parent) => {
        let row = [];
        value.querySelectorAll("td").forEach((v) => {
            console.log(v.innerText);
            row.push(v.innerText);
        });
        list.push(row);
    });
    // 优化，做的就是 查找和排序
    //取第二列数据
    let new_list = list.map((value) => {
        return value[1];
    });
    //去重
    let ip_list = Array.from(new Set(new_list));
    ip_list = ip_list.filter((item) => item !== null && item !== "");
    console.log(ip_list);

    //下载文件
    let blob = new Blob([JSON.stringify(ip_list)], { type: "application/json" });
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "google-ip-" + new Date().toISOString() + ".txt";
    a.click();
    setTimeout(function () {
        window.URL.revokeObjectURL(url);
    }, 3000);
}
```
