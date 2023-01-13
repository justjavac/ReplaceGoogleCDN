/**
 * 完善本扩展的初衷，获取知识
 * @type {string[]}
 */
let preview_url = [
  "https://source.chromium.org/",
  "https://summerofcode.withgoogle.com/programs/2022/organizations",
  "https://www.chromium.org/chromium-projects/",
  "https://webrtc.org/",
  "https://chromium.googlesource.com/external/webrtc",
  "https://cs.opensource.google/",
  "https://www.kernel.org/",
  "https://android.googlesource.com/",
  "https://www.freertos.org/",
  "https://ffmpeg.org/",
  "https://www.blender.org/",
  "https://opencv.org/",
  "https://www.ovn.org",
  "https://github.com/openvswitch/ovs.git",
  "https://www.unrealengine.com/en-US/unreal-engine-5",
  "https://www.openharmony.cn/",
  "https://www.debian.org/",
  "https://home.uniontech.com/",
  "http://www.wangma.net.cn/",
  "https://www.cncf.io/",
  "https://github.com/riscv",
  "https://docs.ros.org/",
];

let is_iframe = self !== top;
let list_box = document.querySelector(".box");
let list = "";
preview_url.map((value, index) => {
  if (is_iframe) {
    list += `<li data-href="${value}" ><pre>${value}</pre></li>`;
  } else {
    list += `<li data-href="${value}" >
            <a
              target="_blank" 
              rel="noopener noreferrer"
              href="${value}"
            >${value}</a></li>`;
  }
});
list_box.innerHTML = list;

list_box.addEventListener("click", (event) => {
  //console.log(event.target);
  //console.log(event.target.nodeName);
  if (event.target.nodeName === "PRE") {
    let url = event.target.innerText;
    //console.log(self, top);
    if (is_iframe) {
      //'在iframe中'
      console.log("在iframe中");
      window.parent.postMessage(
        JSON.stringify({
          url: url,
        }),
        location.origin + "/options_ui/index.html"
      );
    } else {
      top.open(url, "_blank");
    }
  }
});
