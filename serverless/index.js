'use strict'

import './env.js'
import News from './news/News'

const news = new News()
export async function crawlNews(event, context, callback) {
  //triggered with this type of message {"source": "NewYorkTimes", "category": "top_stories", "section": "technology"}
  await news.crawlNews(event, callback)
}