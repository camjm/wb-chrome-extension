'use strict';

(function(tab){

  function execute(file, callback) {
    tab.executeScript({
      file: 'scripts/commands/' + file
    }, callback);
  }

})(chrome.tabs);
