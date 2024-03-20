Purpose

YouTube can be really useful, but can also be a massive waste of time. When I need to focus I usually use software such as Cold Turkey Blocker to block entire sites like YouTube. But I don't want to block the entire site because there are still videos that are "healthy" for me to view, such as educational content. This is why I created this project. It allows you to create a whitelist of video genres that you allow yourself to view (i.e. "Education" or "Science & Technology) " and will immediately close videos which aren't part of genres on this whitelist (i.e. "Entertainment" or "Thriller").

How it works

The program is very simple. When the URL matches the pattern "https://www.youtube.com/*" the content.js script will run. This file gets the genre of the current YouTube video from the DOM and checks if it is part of the list of allowed genres. If it is not, it will tell the service worker background.js to close the tab. To specify which genres you want to allow, copy genres you want to allow from the list below and paste them in the allowedGenres variable in the content.js file.

What are the genres?

'Film & Animation', 'Autos & Vehicles', 'Music', 'Pets & Animals', 'Sports', 'Short Movies', 'Travel & Events', 'Gaming','Videoblogging', 'People & Blogs', 'Comedy', 'Entertainment', 'News & Politics', 'Howto & Style', 'Education', 'Science & Technology', 'Movies', 'Anime/Animation', 'Action/Adventure', 'Classics', 'Comedy', 'Documentary', 'Drama', 'Family', 'Foreign', 'Horror','Sci-Fi/Fantasy', 'Thriller', 'Shorts', 'Shows', 'Trailers'

These are taken from YouTube's API and are specific to Australia, however every country has pretty much the same categories. Interestingly the only difference between Australia and the US is that the US has the additional genre "Nonprofits & Activism".

To get the list of genres manually go to:
https://developers.google.com/youtube/v3/docs/videoCategories/list and specify the parameters part=snippet and regionCode=AU (for Australia)

To get the list of genres via JavaScript add the following code:
fetch("https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode={REGION_CODE}&key={API_KEY}").then(r => r.text()).then(result => {
const json = JSON.parse(result);
const genres = json.items.map(item => item.snippet.title);
console.log(genres);
})
