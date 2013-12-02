chrome.contextMenus.create({
  'title': 'Find protractor selector'
}, function() {
  if (chrome.extension.lastError) {
    console.log('Got expected error: ' + chrome.extension.lastError.message);
  }
});
