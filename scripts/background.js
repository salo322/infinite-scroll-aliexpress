chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.greeting == "hello"){
        chrome.tabs.create({ url: request.url});
}
    });
