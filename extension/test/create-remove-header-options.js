let csp_list_item=[
    "content-security-policy",
    "content-security-policy-report-only",
    "expect-ct",
    "report-to",
    "x-content-security-policy",
    "x-webkit-csp",
    "x-xss-protection",
    "x-permitted-cross-domain-policies",
    "x-content-type-options",
    "x-frame-options",
    "permissions-policy",
    "timing-allow-origin"
];
let remote_csp_options=csp_list_item.map((currentValue,index,arr)=>{
    console.log(currentValue.toUpperCase())
    return {
        "header": currentValue,
        "operation" : "remove"
    } ;

});

//批量生成需要移除的CSP选项
console.log(JSON.stringify(remote_csp_options))