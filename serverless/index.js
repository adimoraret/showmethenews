'use strict';

import NewsCrawler from './news/NewsCrawler'

exports.crawlNewsHttp = (request, response) => {
  response.status(200).send('Hi there from crawl!')
};

exports.crawlNews = (event, callback) => {
  const newsCrawler = new NewsCrawler('NewYorkTimes', 'top_stories', 'technology');
  newsCrawler.crawl();
  callback();
};
