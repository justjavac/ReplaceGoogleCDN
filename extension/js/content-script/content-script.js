chrome.runtime.sendMessage({
    "action":'get_extension_info',
    "content":{},
    "namespace": 'jingjingxyk'
}, function(response) {
    console.log(response);
    if(response && response.code===200 && response.data) {
        console.log( response.data)
        document.querySelector('#extension_id').value=JSON.stringify(response.data)
    }

});