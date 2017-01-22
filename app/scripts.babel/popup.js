'use strict';

(function(tab){

  function execute(file, callback) {
    tab.executeScript({
      file: 'commands/' + file
    }, callback);
  }

  function attach(element, type, listener) {
    element.addEventListener(type, listener, false);
  }

  function attachCommand(id, file) {
    var button = document.getElementById(id);
    attach(button, 'click', function() {
      execute(file, function(result) {
        console.log('command successful!');
      });
    });
  }

  // Attach event handlers to buttons
  attach(document, 'DOMContentLoaded', function() {
    attachCommand('gotoLog', 'gotoLog.js');
    attachCommand('clearCache', 'clearCache.js');
  });

})(chrome.tabs);
