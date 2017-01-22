'use strict';

document.addEventListener('DOMContentLoaded', function() {

  // Go To Log button
  var goToButton = document.getElementById('goTo');
  goToButton.addEventListener('click', function(){
    chrome.tabs.executeScript({
      file: 'commands/gotoLog.js'
    }, function(result) {
      console.log('go to successful!');
    });
  }, false);

  // Clear Cache button
  var clearCacheButton = document.getElementById('clearCache');
  clearCacheButton.addEventListener('click', function(){
    chrome.tabs.executeScript({
      file: 'commands/clearCache.js'
    }, function(result) {
      console.log('clear cache successful!');
    });
  }, false);

}, false);
