let preview_url = [
  "https://source.chromium.org/",
  "https://summerofcode.withgoogle.com/programs/2022/organizations",
  "https://www.chromium.org/chromium-projects/",
  "https://webrtc.org/",
  "https://chromium.googlesource.com/external/webrtc",
  "https://cs.opensource.google/",
  "https://www.kernel.org/",
  "https://fuchsia.googlesource.com/",
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
    console.log(self, top);
    if (self !== top) {
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
