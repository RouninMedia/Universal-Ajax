# Universal-Ajax

A concise wrapper for XMLHttpRequest requiring 4 parameters and designed to be deployed everywhere.

The function `getRemoteResponse` requires 4 parameters:

* remoteScript
* callback
* customObject
* toSend

# The Function
```
// GET REMOTE RESPONSE

const getRemoteResponse = (remoteScript, callback, customObject, toSend = null) => {
  
  const XHR = new XMLHttpRequest();
  XHR.open('GET', remoteScript, true);
  XHR.send(toSend);
  
  const getResponseText = () => {
  
    if ((XHR.readyState === 4) && (XHR.status === 200)) {

      callback(XHR.responseText, customObject);
    }

    else if (XHR.status !== 200) {

      console.log('Ajax Error: getRemoteResponse() called ' + remoteScript + ' and returned ' + XHR.status);
    }
  }
  
  XHR.addEventListener('readystatechange', getResponseText);
}
```
# Examples of Invoking the Function

```
const myRemoteFile = '/myremotefiles/myremotejson.json';

getRemoteResponse(myRemoteFile, myFunction, {});
```
