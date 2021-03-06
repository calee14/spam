chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    /*
        Listening for popup requests
    */
    if (request.method == "makeDetectedPopup") {
        $.get(chrome.extension.getURL('./detected.html'), function(data) {
            // Or if you're using jQuery 1.8+:
            $($.parseHTML(data)).appendTo('body');
            var s = document.createElement('script');
            // TODO: add "script.js" to web_accessible_resources in manifest.json
            s.src = chrome.runtime.getURL('popup.js');
            s.onload = function() {
                this.remove();
            };
            (document.head || document.documentElement).appendChild(s);
        });
    } 
    if(request.method == "makeNotDetectedPopup") {
        $.get(chrome.extension.getURL('./notdetected.html'), function(data) {
            // Or if you're using jQuery 1.8+:
            $($.parseHTML(data)).appendTo('body');
            var s = document.createElement('script');
            // TODO: add "script.js" to web_accessible_resources in manifest.json
            s.src = chrome.runtime.getURL('popup.js');
            s.onload = function() {
                this.remove();
            };
            (document.head || document.documentElement).appendChild(s);
        });
    }
});

// Listen for messages
chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    // If the received message has the expected format...
    if (request.method == "report_back") {
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
    }/* else {
        sendResponse({});
    }*/
});

// Listen for messages
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	// If the recieived request has the expected format...
    if (request.method == "getSelection") {
		// Call the specified callback, passing
        // the selected text
        console.log(window.getSelection().toString());
		sendResponse({data: window.getSelection().toString()});
    } /*else {
    	// Call the specified callback passing no infomration
    	sendResponse({}); // NOTE: maybe remove this because it will cause unnecessary api requests
    }*/
});

// Listen for messages
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    // If the recieived request has the expected format...
    if (request.method == "checkIfSelection") {
        // Call the specified callback, passing
        // a boolean: true if there is selected text, false for none
        if(window.getSelection().toString().length > 0) {
            console.log('we have selection');
            sendResponse(true);
        } else {
            console.log('we dont have selection');
            sendResponse(false);
        }
    } /*else {
        // Call the specified callback passing no infomration
        sendResponse({}); // snub them.
    }*/
});