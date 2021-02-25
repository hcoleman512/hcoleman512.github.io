
let apiKey = {b671e2d2328c4c51bb811b72df6384bc}

var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2021-02-25&' +
          'sortBy=popularity&' +
          'apiKey=var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2021-02-25&' +
          'sortBy=popularity&' +
          'apiKey=b671e2d2328c4c51bb811b72df6384bc';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('API_KEY');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  sources: 'bbc-news,the-verge',
  q: 'bitcoin',
  category: 'business',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});
// To query /v2/everything
// You must include at least one q, source, or domain
newsapi.v2.everything({
  q: 'bitcoin',
  sources: 'bbc-news,the-verge',
  domains: 'bbc.co.uk, techcrunch.com',
  from: '2017-12-01',
  to: '2017-12-12',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});
// To query sources
// All options are optional
newsapi.v2.sources({
  category: 'technology',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      sources: [...]
    }
  */
});