const CDP = require('chrome-remote-interface');
const defaults = require("chrome-remote-interface/lib/defaults");

function collect_trace(stackTrace) {
    if (stackTrace == null)
        return []
    else
        return stackTrace.callFrames.map(({functionName, url, lineNumber, columnNumber}) => {
            return {name: functionName || "(anonymous)", url, line: lineNumber+1, col: columnNumber+1}
        })
}


async function example() {
    let client;
    try {
        // connect to endpoint
        client = await CDP({
            host:'127.0.0.1',
            port : '9222'
        });
        // extract domains
        const {Network, Page,Runtime,Console,DOM} = client;
        // setup handlers
        Network.requestWillBeSent((params) => {
            console.log(params.request.url);
        });
        // enable events then start!
       // await Promise.all([Network.enable(), Page.enable(), Runtime.enable(), DOM.enable()]);
        await Network.enable();
        await Console.enable();
        await Runtime.enabled;
        await Page.enable();
        await DOM.enable();
        Console.messageAdded((obj)=>{
            console.log(obj)
        })
        Runtime.consoleAPICalled(({type, args, stackTrace, executionContextId}) => {

            const text = args.map(({value}) => value.toString()).join(" ")
            const trace = collect_trace(stackTrace)
            const {url, line, col} = trace[0]
           console.log({level: type, text, url, line, col, trace})
        })

        await Page.navigate({url: 'https://cloud-soft.xieyaokun.com'});
        await Page.loadEventFired();
       let result= await Runtime.evaluate({
           expression:
               `
var script=document.createElement('script');
script.setAttribute('src','https://frontend-inject.xieyaokun.com/main.js'),
script.setAttribute('type','application/javascript'),
script.setAttribute('charset','utf-8'),document.body.appendChild(script)
                            
                       `

       });
       console.log(result)

    } catch (err) {
        console.error(err);
    } finally {
        if (client) {
            await client.close();
        }
    }
}

example();