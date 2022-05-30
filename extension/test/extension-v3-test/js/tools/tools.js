let test_send_message=()=>{


}
let test_performance=()=>{
    let plugins = Array.from(navigator.plugins);
    console.log(plugins)

    window.performance.getEntries().map(x => {
        //console.log(x)
        console.log(x.entryType, x.name, x.type, x.initiatorType, x.nextHopProtocol)

    });
    let element=document.createDocumentFragment();
    let ul=document.createElement('ul');
    element.appendChild(ul);
    let  list=''
    Array.from(window.performance.getEntriesByType("resource")).map(
        function (x) {//遍历
            console.log(x)
            if (x.initiatorType === "script" || x.initiatorType === 'link' ) {
                list  +=`<li>${x.initiatorType}:  ${x.name}</li>`
            }
        }
    );
    ul.innerHTML=list;
    document.body.append(element);
}

let app=()=>{

}
export {app,test_send_message,test_performance}