# spam detector
# todo:
- [ ] update server code to return boolean saying whether the email is spam or not.
- [ ] the request data type: ```params -> String[][] returns -> Double[][]```
- [ ] update the server code to receive the data in double arrays
- [ ] analyze and label data for ml
# notes:
- Must find a way to incoporate model into an app
  - ~~make my own gmail site~~ NOTE: Too complicated
  - ~~make my email interface in terminal~~ sort of similar to 
  - make an app where you paste text from an email
  - [X] browser extension NOTE: Bingo!
  - div#:mp.ii.gt - to access the gmail content

# resources:
- https://stackoverflow.com/questions/41971587/how-to-convert-predicted-sequence-back-to-text-in-keras
- https://machinelearningmastery.com/sequence-classification-lstm-recurrent-neural-networks-python-keras/
- https://www.tensorflow.org/alpha/tutorials/sequences/text_classification_rnn
- ~~Can try to make a terminal email viewer and implement my own spam detector~~
  - ~~https://gist.github.com/robulouski/7442321~~
  - ~~https://stackoverflow.com/questions/4908472/how-to-receive-mail-using-python~~
  - ~~https://gist.github.com/robulouski/7441883~~
  - ~~For sending emails~~
  	- ~~https://docs.python.org/3/library/email.examples.html~~
  - https://stackoverflow.com/questions/19164474/chrome-extension-get-selected-text -  highlighting text
  - https://groups.google.com/a/chromium.org/forum/#!topic/chromium-extensions/vt2H2riRLVE
  - https://stackoverflow.com/questions/2626859/chrome-extension-how-to-capture-selected-text-and-send-to-a-web-service
- [X] Can try making a Chrome extension
	- The user can highlight their email and the extentions will analyze the text and send it to a flask server. The flask server will run the model and the return the result in json. The json will hold a numerical value or a boolean represnting the content of the email. response type: 1=spam, 0=not spam.
	- Make an automatic check for the email and send the message to a flask server.
- need to find a way to upload long strings:
  - https://medium.freecodecamp.org/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa
  - https://stackoverflow.com/questions/10434599/how-to-get-data-received-in-flask-request
  - https://stackoverflow.com/questions/29987323/how-do-i-send-data-from-js-to-python-with-flask
  - https://www.w3schools.com/jquery/jquery_ajax_get_post.asp
# author
- **Cap Lee**
