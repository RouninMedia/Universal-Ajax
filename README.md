# requestRemoteResponse for Ashiva

**requestRemoteResponse** (also known as **requestRemoteResource** or **r3**) is a concise wrapper for `XMLHttpRequest` (`XHR2`) designed to be deployed everywhere.

The function `requestRemoteResponse` requires 2 parameters:

* remoteURL
* callback

And there is one further *optional* parameter:

* customObject

# The Function
```
const requestRemoteResponse = (remoteURL, callback, customObject = {}) => {

  let httpMethod = (customObject.hasOwnProperty('dataToSend')) ? 'POST' : 'GET';
  if (httpMethod === 'GET') {customObject.dataToSend = null;}

  const XHR = new XMLHttpRequest();
  XHR.open(httpMethod, remoteURL);
  if (remoteURL.substr(-4, 4) === '.mjs') {XHR.overrideMimeType('application/javascript');}
  XHR.send(customObject.dataToSend);
  
  const getResponseText = () => {
  
    if ((XHR.readyState === 4) && (XHR.status === 200)) {

      if (callback !== null) {

        callback(XHR.responseText, customObject);
      }
    }

    else if (XHR.status !== 200) {

      console.log('⚠️ Ashiva Console: requestRemoteResponse() called ' + remoteURL + ' and returned ' + XHR.status);
    }
  }
  
  XHR.addEventListener('readystatechange', getResponseText);
}
```
# Examples of Invoking the Function

```
const myRemoteFile = '/myremotefiles/myremotejson.json';

requestRemoteResponse(myRemoteFile, myFunction);
```
