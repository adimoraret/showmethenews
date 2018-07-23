'use strict';

// exports.http = (request, response) => {
//   response.status(200).send('Hi there!');
// };

exports.crawlNewsHttp = (request, response) => {
  response.status(200).send('Hi there from crawl!');
};

exports.crawlNews = (event, callback) => {
  console.log('-------------------------');
  console.log(JSON.stringify(event));
  console.log('-------------------------');
  callback();
};
