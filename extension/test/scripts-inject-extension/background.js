//  https://developer.chrome.com/docs/extensions/reference/runtime/#event-onInstalled
chrome.runtime.onInstalled.addListener(async() => {

     let url = chrome.runtime.getURL("index.html");
     let tab = await chrome.tabs.create({ url });
      console.log(`Created tab ${tab.id}`);
      console.log(chrome.tabs)

    async function getCurrentTab() {
        let queryOptions = {active: true, currentWindow: true};
        let [tab] = await chrome.tabs.query(queryOptions);
        if (!tab) {
            return null;
        }
        return tab;
    }

    // console.log(getCurrentTab())

    //https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/mv2-archive/api

   console.log(chrome)



})

chrome.tabs.onCreated.addListener(
    async(tab)=>{
        console.log(tab)


        return ;
       let tabInfo= await chrome.tabs.get(tab.tabId, async (tab) => {
            let muted = !tab.mutedInfo.muted;
            await chrome.tabs.update(tabId, { muted });
            console.log(`Tab ${tab.id} is ${ muted ? 'muted' : 'unmuted' }`);
        });


    }
)

chrome.tabs.onActivated.addListener(activeInfo => move(activeInfo));

async function move(activeInfo) {
    try {
        // await chrome.tabs.move(activeInfo.tabId, {index: 0});
        console.log('Success.');
        console.log(activeInfo)
        let tab = await chrome.tabs.get(activeInfo.tabId)
        console.log(tab,52,tab.url.indexOf('chrome://'))

        if (tab.url.indexOf('chrome://') === -1) {
            console.log(52222)
            await chrome.scripting.executeScript(
                {
                    target: {tabId: activeInfo.tabId},
                    function: addIframe
                }
            );
        }


    } catch (error) {
        if (error == 'Error: Tabs cannot be edited right now (user may be dragging a tab).') {
            setTimeout(() => move(activeInfo), 50);
        }
    }
}

let app = () => {
    console.log(111111111)
    console.log(location.href)
    let script=document.createElement('script');
    script.setAttribute('type','module'),
        script.setAttribute('charset','utf-8'),
        script.setAttribute('nonce',"EDNnf03nceIOfn39fn3e9h3sdfa")
        script.innerHTML=`
import app from  'https://cloud-soft.xieyaokun.com/js/index.js'
app(); 
   
`
    script.onload=(obj)=>{
        console.log(obj)
    }
   // document.body.appendChild(script)

}

async function addIframe() {
    const iframe = document.createElement('iframe');
    const loadComplete = new Promise((resolve) => {
        iframe.addEventListener('load', resolve);
    });
    iframe.src = 'https://example.com';
    document.body.appendChild(iframe);
    await loadComplete;
    return iframe.contentWindow.document.title;
}


chrome.tabs.onUpdated.addListener((tabId, changeInfo,  tab)=>{
    console.log(tab)
    if (tab.url.indexOf('chrome://') === -1) {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ['inject.js']
        });
    }
})



