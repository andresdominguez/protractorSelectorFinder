'use strict';

chrome.runtime.onInstalled.addListener(function(details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function(tabId) {
  chrome.pageAction.show(tabId);
});

chrome.contextMenus.create({
  title: 'Find protractor selector',
  onclick: function(info, tab) {
    console.log('clicked ---', info, tab);
  }
}, function() {

});
