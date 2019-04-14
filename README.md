# spam detector
# Notes:
- Must find a way to incoporate model into an app
  - make my own gmail site
  - make my email interface in terminal
  - make an app where you paste text from an email
  - div#:mp.ii.gt - to access the gmail content

# resources
- https://stackoverflow.com/questions/41971587/how-to-convert-predicted-sequence-back-to-text-in-keras
- ~~Can try to make a terminal email viewer and implement my own spam detector~~
  - ~~https://gist.github.com/robulouski/7442321~~
  - ~~https://stackoverflow.com/questions/4908472/how-to-receive-mail-using-python~~
  - ~~https://gist.github.com/robulouski/7441883~~
  - ~~For sending emails~~
  	- ~~https://docs.python.org/3/library/email.examples.html~~
  - https://stackoverflow.com/questions/19164474/chrome-extension-get-selected-text -  highlighting text
  - https://groups.google.com/a/chromium.org/forum/#!topic/chromium-extensions/vt2H2riRLVE
  - https://stackoverflow.com/questions/2626859/chrome-extension-how-to-capture-selected-text-and-send-to-a-web-service
- Can try making a Chrome extension
	- The user can highlight their email and the extentions will analyze the text and send it to a flask server. The flask server will run the model and the return the result in json. The json will hold a numerical value or a boolean represnting the content of the email.
	- Make an automatic check for the email and send the message to a flask server. 
# Author
- **Cap Lee**
