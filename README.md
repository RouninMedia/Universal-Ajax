# Universal-Ajax
A Universal Ajax function requiring 4 parameters. A core Ashiva Component.

The function `getRemoteResponse` requires 4 parameters:

* remoteScript
* callback
* customObject
* toSend

# The Function
`
// GET REMOTE RESPONSE

const getRemoteResponse = (remoteScript, callback, customObject, toSend = null) => {
  
  const XHR = new XMLHttpRequest();
  XHR.open('GET', remoteScript, true);
  XHR.send(toSend);
  
  const getResponseText = () => {
  
    if ((XHR.readyState === 4) && (XHR.status === 200)) {

      callback(XHR.responseText, customObject);
    }
  }
  
  XHR.addEventListener('readystatechange', getResponseText);
}
`
# Examples of Invoking the Function

const myRemoteFile = '/myremotefiles/myremotejson.json';

getRemoteResponse(myRemoteFile, myFunction, {});
