// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        var list= document.getElementsByClassName("ii");
		for (var i = 0; i < list.length; i++) {
		    console.log(list[i].innerText);
		}
        var domContent = document.getElementById(":mp");
        // console.log(document.all[0].textContent);
        console.log('I received the following DOM content:\n');
	    console.log(domContent)
	    console.log(domContent.innerHTML)
        sendResponse(document.all[0].outerHTML);
        
    }
});

// Listen for messages
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	// If the recieived request has the expected format...
    if (request.method == "getSelection")
		// Call the specified callback, passing
        // the selected text
		sendResponse({data: window.getSelection().toString()});
    else
    	// Call the specified callback passing no infomration
    	sendResponse({}); // snub them.
});