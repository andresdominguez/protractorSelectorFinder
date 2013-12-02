chrome.contextMenus.create({
  'title': 'Oops'
}, function() {
  if (chrome.extension.lastError) {
    console.log('Got expected error: ' + chrome.extension.lastError.message);
  }
});
