chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "closeTab") {
    chrome.tabs.remove(sender.tab.id);
    console.log("Tab closed");
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // If changeInfo.url exists it means the url has changed

  if(changeInfo.url) {
    chrome.tabs.sendMessage(tabId, {
      message: 'NEW_URL_VISITED',
      url: changeInfo.url,
    });
  }
});