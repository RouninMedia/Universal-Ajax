const getRemoteResponse = (remoteURL, callback, customObject = {}) => {

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

      console.log('Ajax Error: getRemoteResponse() called ' + remoteURL + ' and returned ' + XHR.status);
    }
  }
  
  XHR.addEventListener('readystatechange', getResponseText);
}
