const search = require('youtube-search');
const API_KEY = process.env.API_KEY;

const config = {
  maxResults: 10,
  key: API_KEY,
  order: 'viewCount'
}

exports.searchYouTube = (searchTerm) => {
    return new Promise((resolve, reject)=>{
        search(searchTerm, config, function(err, results) {
            if(err) return reject(err);
            resolve(results);
        });
    });
}