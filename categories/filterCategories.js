const json = require("./categories.json");

const categories = json.items.map(item => item.snippet.title);

console.log(categories);

const allCategories = [
    'Film & Animation', 'Autos & Vehicles',
    'Music',            'Pets & Animals',
    'Sports',           'Short Movies',
    'Travel & Events',  'Gaming',
    'Videoblogging',    'People & Blogs',
    'Comedy',           'Entertainment',
    'News & Politics',  'Howto & Style',
    'Education',        'Science & Technology',
    'Movies',           'Anime/Animation',
    'Action/Adventure', 'Classics',
    'Comedy',           'Documentary',
    'Drama',            'Family',
    'Foreign',          'Horror',
    'Sci-Fi/Fantasy',   'Thriller',
    'Shorts',           'Shows',
    'Trailers'
  ]