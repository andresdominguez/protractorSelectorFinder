//background
function findSelector(info, tab) {
  chrome.tabs.sendRequest(tab.id, "getClickedEl", function(clickedEl) {
    elt.value = clickedEl.value;
  });
}

chrome.contextMenus.create({
  'title': 'Find protractor selector',
  'onclick': findSelector
}, function() {
  if (chrome.extension.lastError) {
    console.log('Got expected error: ' + chrome.extension.lastError.message);
  }
});
