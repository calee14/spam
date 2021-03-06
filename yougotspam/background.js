// Regex-pattern to check URLs against. 
// It matches URLs like: http[s]://[...]stackoverflow.com[...]
// var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?google\.com/;
// var urlRegex = "https://mail.google.com/"
// A function to use as callback

/*
Store the tab_id so that the api call can access and make the right request
to the content.js
*/
var tab_id;

function doStuffWithDom(domContent) {
    console.log('I received the following DOM content:\n');
    console.log(domContent)
    // gmailMessage = domContent.getElementById(":mp")
    // console.log(gmailMessage.innerHTML)
}

// When the browser-action button is clicked...
chrome.browserAction.onClicked.addListener(function (tab) {
  tab_id = tab.id;
  // ...check the URL of the active tab against our pattern and...
  // if (urlRegex.test(tab.url)) {
      // ...if it matches, send a message specifying a callback too
      // chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, sendServiceRequest);
  // }
  chrome.tabs.sendRequest(tab.id, {method: "report_back"}, function(response) {
    chrome.tabs.sendRequest(tab.id, {method: "checkIfSelection"}, function(selection) {
      if(selection == false) {
        // Have the callback make a service call to an api
        sendServiceRequest(response.data);
      }
    });
  });
  // make a request to the to get the selected text
  chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response) {
    chrome.tabs.sendRequest(tab.id, {method: "checkIfSelection"}, function(selection) {
      if(selection == true) {
        // Have the callback make a service call to an api
        if(response) {
          sendServiceRequest(response.data, tab);
        } else {
          sendServiceRequest("those are not highlighted stuff");
        }
      }
    });
  });
});

function sendServiceRequest(selectedText) {
  $.post("https://spam-detect.herokuapp.com/api/v1.1/", {
    "javascript_data": selectedText 
  }, function(email_score, status) {
    email_score = email_score[0] // get the result the model gave which is located in a list
    selectedText = email_score + " " + status;
    var serviceCall = 'http://www.google.com/search?q=' + selectedText;
    /*
      Check the result and make a popup alerting the spam
    */
    if(email_score >= 0.4) { /* Change condition for int comparison when we update the server*/
      chrome.tabs.create({url: serviceCall});
      chrome.tabs.sendRequest(tab_id, {method: "makeDetectedPopup"}, function(response){return});
    } else if(email_score < 0.4) {
      chrome.tabs.create({url: serviceCall});
      chrome.tabs.sendRequest(tab_id, {method: "makeNotDetectedPopup"}, function(response){return});
    }
    
  });
}