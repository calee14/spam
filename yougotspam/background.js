// Regex-pattern to check URLs against. 
// It matches URLs like: http[s]://[...]stackoverflow.com[...]
// var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?google\.com/;
// var urlRegex = "https://mail.google.com/"
// A function to use as callback
function doStuffWithDom(domContent) {
    console.log('I received the following DOM content:\n');
    console.log(domContent)
    // gmailMessage = domContent.getElementById(":mp")
    // console.log(gmailMessage.innerHTML)
}

// When the browser-action button is clicked...
chrome.browserAction.onClicked.addListener(function (tab) {
    // ...check the URL of the active tab against our pattern and...
    // if (urlRegex.test(tab.url)) {
        // ...if it matches, send a message specifying a callback too
        chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
    // }
});
// // When the browser-action button, the extension icon, is clicked...
// chrome.browserAction.onClicked.addListener(function(tab) {
// 	// make a request to the to get the selected text
//   	chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response) {
//   		// Have the callback make a service call to an api
//      	sendServiceRequest(response.data);
//   	});
// });

function sendServiceRequest(selectedText) {
  var serviceCall = 'http://www.google.com/search?q=' + selectedText;
  chrome.tabs.create({url: serviceCall});
}