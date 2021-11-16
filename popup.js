

let DLWR = document.getElementById("DLWR");



function log(logstring) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { message: logstring }, function (response) {
            
        });
    });
}



DLWR.addEventListener("click", async () => {
    console.log("background")
    //chrome.runtime.sendMessage({message:"clicked"}, function(response) {})

    log("logtest");
    //https://www.youtube.com/c/DAVIDLYNCHTHEATER/videos
    //https://en.wikipedia.org/wiki/Main_Page
    //https://www.youtube.com/playlist?list=PLTPQcjlcvvXExy6Ti4TccyRvwntL00b2w
    //https://www.youtube.com/results?search_query=david+lynch%27s+weather+report
    fetch("https://www.youtube.com/c/DAVIDLYNCHTHEATER/videos").then(function (response) {
        //log("got response");
        return response.text();
    }).then(function (html) {
        log(html);
        log("logtest");

        d = new Date();
        dstring = d.toLocaleDateString();
        dformatted = dstring.slice(0, 6) + dstring.slice(8, 10);

        htmltrimmed = html.slice(html.indexOf("David Lynch's Weather Report  " + dformatted) - 300, html.indexOf("David Lynch's Weather Report  " + dformatted));

        urlstart = htmltrimmed.indexOf("i.ytimg.com/vi/");

        url = htmltrimmed.slice(urlstart + 15, urlstart + 50);
        url = url.slice(0, url.indexOf("/"))
        url = "https://www.youtube.com/watch?v=" + url

        //log("David Lynch's Weather Report  " + dformatted);
        //log(d.toString())
        log(htmltrimmed);
        log(url);
        window.open(url);

    }).catch(function (err) {
        log('Fetch Error :-S', err);
    });
    log("done")

    //log(doc);
    

    //window.open("ahhhhh")
    //window.open(request.responseText)
})