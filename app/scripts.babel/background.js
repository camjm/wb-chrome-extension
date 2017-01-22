'use strict';

// When the extension is installed or upgraded...
chrome.runtime.onInstalled.addListener(function() {
  // Replace all the rules...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    /// With a new rule...
    chrome.declarativeContent.onPageChanged.addRules([{
      // That fires when visiting an instance of the Workbench application...
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { pathSuffix: '/Workbench.aspx' },
          css: [ 'html[ng-app=wbApp]' ]
        })
      ],
      /// And shows the Workbench extension page action
      actions: [ new chrome.declarativeContent.ShowPageAction() ]
    }]);
  });
});
