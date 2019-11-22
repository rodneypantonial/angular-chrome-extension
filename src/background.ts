import Tab = chrome.tabs.Tab;

// Run Listener on first installation/update
chrome.runtime.onInstalled.addListener(() => {
  // Run listener on complete of loading a page
  chrome.webNavigation.onCompleted.addListener(
    // Listener
    () => {
      // select the current active tab
      chrome.tabs.query({active: true, currentWindow: true}, (tabs: Tab[]) => {
        chrome.pageAction.show(tabs[0].id);
      });
    },
    // Options and Filters on when to run a listener
    {url: [{urlMatches: 'google.com'}]}
  );
});
