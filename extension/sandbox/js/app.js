let preview_url = [
  "https://source.chromium.org/",
  "https://summerofcode.withgoogle.com/programs/2022/organizations",
  "https://www.chromium.org/chromium-projects/",
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
