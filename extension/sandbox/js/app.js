let preview_url = [
  "https://www.chromium.org/chromium-projects/",
  "https://source.chromium.org/",
  "https://summerofcode.withgoogle.com/programs/2022/organizations",
  "https://cs.opensource.google/",
  "https://webrtc.org/",
  "https://chromium.googlesource.com/external/webrtc",
];
let list_box = document.querySelector(".box");
let list = "";
preview_url.map((value, index) => {
  list += `<li data-href="${value}" ><pre>${value}</pre></li>`;
});
list_box.innerHTML = list;

list_box.addEventListener("click", (event) => {
  //console.log(event.target);
  //console.log(event.target.nodeName);
  if (event.target.nodeName === "PRE") {
    let url = event.target.innerText;
    //top.open(url, "_blank");
    window.parent.postMessage(
      JSON.stringify({
        url: url,
      }),
      location.origin + "/options_ui/index.html"
    );
  }
});
/*
document.querySelector('.sync-remote-rule').addEventListener('click',(event)=>{
    let rule_url='https://www.jingjingxyk.com/chromium-extension/extension-v3-test/rules/auth.json'
    fetch(rule_url).then((response)=>{return response.json()}).then((response)=>{
        console.log(response)
        console.log(JSON.stringify(response))
        console.log(location)
        window.parent.postMessage(JSON.stringify(response),location.origin+'/options_ui/index.html')
    })
})

 */
