'use strict'

import './env.js'
import News from './news/News'

const news = new News()
export async function crawlNews(event, context, callback) {
  await news.crawlNews(event, callback)
}