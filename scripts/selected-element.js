var clickedEl = null;

document.addEventListener("mousedown", function(event) {
  //right click
  if (event.button == 2) {
    clickedEl = event.target;
  }
}, true);

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request == "getClickedEl") {
    // TODO: find the selector and send it as a response.
    sendResponse({value: 'This is the thing'});
  }
});
