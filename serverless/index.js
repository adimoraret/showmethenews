'use strict';

import NewsCrawler from './news/NewsCrawler'

export async function crawlNews(event, context, callback) {
  try {
    const pubsubDecodedMessage = Buffer.from(JSON.stringify(event.data), 'base64')
    const { source, type, category } = JSON.parse(pubsubDecodedMessage)
    const newsCrawler = new NewsCrawler(source, type, category)
    const result = await newsCrawler.crawl()
    console.log(result)
    callback(null, 'Success')
  }
  catch (err) {
    callback(err)
  }
}

/*
export async function crawlNews(event, callback) {
  try {
    console.log(`event.data1 = ${event.data}`)
    const pubsubDecodedMessage = Buffer.from(JSON.stringify(event.data), 'base64')
    console.log(`pubsubDecodedMessage = ${pubsubDecodedMessage}`)
    const { source, type, category } = JSON.parse(pubsubDecodedMessage)
    console.log(`source: ${source} type: ${type} category: ${category}`)
    const newsCrawler = new NewsCrawler(source, type, category)
    const result = await newsCrawler.crawl()
    console.log('----------')
    console.log(result)
    console.log('----------')
    callback('Success')
  }
  catch (err) {
    callback(err)
  }
}
*/