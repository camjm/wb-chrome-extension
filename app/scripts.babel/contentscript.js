var commands = {
  cache: function(callback) {
    //TODO:
    console.log('clearing...');
    setTimeout(function() {
      callback('clear cache success!');
    }, 2000);
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

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (typeof commands[message] !== 'function') return false;
  commands[message](sendResponse);
  return true;
});
