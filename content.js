let allowedGenres = [
    'Music',
    'Travel & Events',
    'Videoblogging',
    'Howto & Style',
    'Education',
    'Science & Technology',
    'People & Blogs'
  ]
let allowedChannels = [];

// background.js calls this to run whenever the URL changes
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'NEW_URL_VISITED') {
      checkGenreIsAllowed();
    }
});

function checkGenreIsAllowed() {
    let genreScript = document.querySelector("#microformat > player-microformat-renderer > script");

    if(genreScript != null) {
        let genreText = genreScript.textContent;
        let genreJSON = JSON.parse(genreText);
        let genre = genreJSON.genre;
    
        if(!allowedGenres.includes(genre)) {
            console.log(`Genre ${genre} not allowed, closing...`);
            // alert(`Genre ${genre} not allowed, closing...`);
            
            // Send a message to the background script to close the current tab
            chrome.runtime.sendMessage({ action: "closeTab" });
        }
    
        else {
            console.log(`Category ${genre} allowed`);
            alert(`Category ${genre} allowed`);
        }
    }
}

