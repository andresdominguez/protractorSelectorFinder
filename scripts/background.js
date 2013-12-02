var findSelector = function(info, tab) {

};

chrome.contextMenus.create({
  'title': 'Find protractor selector',
  'onclick': findSelector
}, function() {
  if (chrome.extension.lastError) {
    console.log('Got expected error: ' + chrome.extension.lastError.message);
  }
});
