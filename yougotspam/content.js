// Listen for messages
chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    // If the received message has the expected format...
    if (request.method === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        var message = "";
        var list = document.getElementsByClassName("ii");
		for (var i = 0; i < list.length; i++) {
            message += list[i].innerText.toString().replace(/(\r\n|\n|\r)/gm, "");
		    // console.log(list[i].innerText);
		}
        console.log(message)
        sendResponse({data: message});
    } else {
        sendResponse({});
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
    	sendResponse({}); // NOTE: maybe remove this because it will cause unnecessary api requests
});

// Listen for messages
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    // If the recieived request has the expected format...
    if (request.method == "checkIfSelection")
        // Call the specified callback, passing
        // a boolean: true if there is selected text, false for none
        if(window.getSelection().toString().length > 0) {
            sendResponse({selection: true});
        } else {
            sendResponse({selection: false})
        }
    else
        // Call the specified callback passing no infomration
        sendResponse({}); // snub them.
});