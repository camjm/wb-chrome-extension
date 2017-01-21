'use strict';

var cmds = [
  'clear cache',
  'log',
  'system information'
];

function resetDefaultSuggestion() {
  chrome.omnibox.setDefaultSuggestion({
    description: '<url><match>workbench:</match></url> command'
  });
}

function updateDefaultSuggestion(text) {
  var isRegex = /^re:/.test(text);
  var isFile = /^file:/.test(text);
  var isHalp = (text == 'halp');
  var isPlaintext = text.length && !isRegex && !isFile && !isHalp;

  var description = '<match><url>src</url></match><dim> [</dim>';
  description +=
      isPlaintext ? ('<match>' + text + '</match>') : 'plaintext-search';
  description += '<dim> | </dim>';
  description += isRegex ? ('<match>' + text + '</match>') : 're:regex-search';
  description += '<dim> | </dim>';
  description += isFile ? ('<match>' + text + '</match>') : 'file:filename';
  description += '<dim> | </dim>';
  description += isHalp ? '<match>halp</match>' : 'halp';
  description += '<dim> ]</dim>';

  chrome.omnibox.setDefaultSuggestion({
    description: description
  });
}

function navigate(text) {
  console.log(text);
}

chrome.omnibox.onInputStarted.addListener(
  function() {
    updateDefaultSuggestion('');
  }
);

chrome.omnibox.onInputEntered.addListener(
  function(text) {
    navigate(text);
  }
);

chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    updateDefaultSuggestion(text);

    var results = [];
    results.push({
      content: text + '<match>' + text + '</match>',
      description: text + '<match>' + text + '</match>'
    },
    {
      content: 'cont 1',
      description: 'desc 1'
    },
    {
      content: 'cont 2',
      description: 'desc 2'
    });

    suggest(results);
  }
);

chrome.omnibox.onInputCancelled.addListener(
  function() {
    resetDefaultSuggestion();
  }
);

resetDefaultSuggestion();









/*


chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(tabId => {
  chrome.pageAction.show(tabId);
});

function updateDefaultSuggestion(text) {
  var isRegex = /^re:/.test(text);
  var isFile = /^file:/.test(text);
  var isHalp = (text == 'halp');
  var isPlaintext = text.length && !isRegex && !isFile && !isHalp;

  var description = '<match><url>workbench</url></match><dim> [</dim>';
  description +=
      isPlaintext ? ('<match>' + text + '</match>') : 'plaintext-search';
  description += '<dim> | </dim>';
  description += isRegex ? ('<match>' + text + '</match>') : 're:regex-search';
  description += '<dim> | </dim>';
  description += isFile ? ('<match>' + text + '</match>') : 'file:filename';
  description += '<dim> | </dim>';
  description += isHalp ? '<match>halp</match>' : 'halp';
  description += '<dim> ]</dim>';

  chrome.omnibox.setDefaultSuggestion({
    description: description
  });
}
function resetDefaultSuggestion() {
  chrome.omnibox.setDefaultSuggestion({
    description: '<url><match>workbench:</match></url> command'
  });
}

resetDefaultSuggestion();

chrome.omnibox.onInputStarted.addListener(function() {
  updateDefaultSuggestion('');
});

chrome.omnibox.onInputChanged.addListener(function(text, suggest){
  text = text.replace(' ', '');
  var suggestions = [];
  suggestions.push({ content: 'cont1', description: 'desc 1'});
  suggestions.push({ content: 'cont2', description: 'desc 2'});
  suggest(suggestions);
});

chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    console.log('inputChanged: ' + text);
    suggest([
      {content: text + ' one', description: 'the first one'},
      {content: text + ' number two', description: 'the second entry'}
    ]);
  });

chrome.omnibox.setDefaultSuggestion({
  'description': 'clear cache'
});

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
    console.log('inputEntered: ' + text);
    alert('You just typed "' + text + '"');
  });

console.log('\'Allo \'Allo! Event Page for Page Action');

*/
