let allowedGenres = [
    'Music',
    'Travel & Events',
    'Videoblogging',
    'Howto & Style',
    'Education',
    'Science & Technology',
  ]
let allowedChannels = [];

function checkGenreIsAllowed() {
    let genreScript = document.querySelector("#microformat > player-microformat-renderer > script");

    if(genreScript != null) {
        let genreText = genreScript.textContent;
        let genreJSON = JSON.parse(genreText);
        let genre = genreJSON.genre;
    
        if(!allowedGenres.includes(genre)) {
            console.log(`Genre ${genre} not allowed, closing...`);
            
            // Send a message to the background script to close the current tab
            chrome.runtime.sendMessage({ action: "closeTab" });
        }
    
        else {
            console.log(`Category ${genre} allowed`);
        }
    }
}

// Runs whenever the DOM changes (a lot)
let observer = new MutationObserver(() => {
    checkGenreIsAllowed(); 
}).observe(document, {childList: true, subtree: true});

checkGenreIsAllowed();
