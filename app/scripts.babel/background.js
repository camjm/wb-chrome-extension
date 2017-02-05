'use strict';

(function(runtime, pageAction) {

  // When the extension is installed or upgraded...
  runtime.onInstalled.addListener(function() {
    // Replace all the rules...
    pageAction.onPageChanged.removeRules(undefined, function() {
      /// With a new rule...
      pageAction.onPageChanged.addRules([{
        // That fires when visiting an instance of the Workbench application...
        conditions: [
          new pageAction.PageStateMatcher({
            pageUrl: {
              pathSuffix: '/Workbench.aspx'
            },
            css: ['html[ng-app=wbApp]']
          })
        ],
        /// And enables the Workbench extension page action
        actions: [new pageAction.ShowPageAction()]
      }]);
    });
  });

})(chrome.runtime, chrome.declarativeContent);
