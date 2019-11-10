const getRemoteResponse = (remoteURL, callback, customObject = {}) => {

  if (!customObject.hasOwnProperty('dataToSend')) {customObject.dataToSend = null;}

  const XHR = new XMLHttpRequest();
  let httpMethod = (customObject.dataToSend === null) ?  'GET' : 'POST';
  XHR.open(httpMethod, remoteURL, true);

  if (customObject.dataToSend !== null) {
    
    XHR.send(customObject.dataToSend);
  }
  
  const getResponseText = () => {
  
    if ((XHR.readyState === 4) && (XHR.status === 200)) {

      callback(XHR.responseText, customObject);
    }

    else if (XHR.status !== 200) {

      console.log('Ajax Error: getRemoteResponse() called ' + remoteURL + ' and returned ' + XHR.status);
    }
  }
  
  XHR.addEventListener('readystatechange', getResponseText);
}
