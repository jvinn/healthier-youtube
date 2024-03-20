Purpose

YouTube can be really useful, but can also be a massive waste of time. When I need to focus I usually use software such as Cold Turkey Blocker to block entire sites like YouTube. But I don't want to block the entire site because there are still videos that are "healthy" for me to view, such as educational content. This is why I created this project. It allows you to create a whitelist of video genres that you allow yourself to view (i.e. "Education" or "Science & Technology) " and will immediately close videos which aren't part of genres on this whitelist (i.e. "Entertainment" or "Thriller").

How it works

The program is very simple. When the URL matches the pattern "https://www.youtube.com/*" the content.js script will run. This file gets the genre of the current YouTube video from the DOM and checks if it is part of the list of allowed genres. If it is not, it will tell the service worker background.js to close the tab. That's it.
