console.log("content active")

chrome.runtime.onMessage.addListener(
    function gotMessage(request, sender, sendResponse) {
        console.log(request.message);
        return true;
    }
)