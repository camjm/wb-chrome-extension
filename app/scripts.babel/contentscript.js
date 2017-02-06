'use strict';

/*
 * Content scripts execute in a special environment called an isolated world. They have
 * access to the DOM of the page they are injected into, but not to any JavaScript
 * variables or functions created by the page. It looks to each content script as if
 * there is no other JavaScript executing on the page it is running on.
 */

(function(runtime){

  function makeRequest(method, url,  callback) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        callback({
          status: xhr.status,
          body: xhr.responseText
        });
      }
    };
    xhr.send();
  }

  function getUrl(path) {
    var base = location.pathname.replace(/Workbench.aspx$/, '');
    return base + path;
  }

  var commands = {

    cache: function(callback) {
      var url = getUrl('Admin/Cache.aspx/ClearCache');
      makeRequest('POST', url, function(response) {
        var json = JSON.parse(response.body);
        callback(json);
      });
    },

    restart: function(callback) {
      //TODO:
      console.log('restarting...');
      setTimeout(function() {
        callback('restart success!');
      }, 2000);
    },

    install: function(callback) {
      //TODO:
      console.log('installing...');
      setTimeout(function() {
        callback('install success!');
      }, 2000);
    }

  };

  runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (typeof commands[message] !== 'function') return false;
    commands[message](sendResponse);
    // respond asynchronously
    return true;
  });

})(chrome.runtime);
