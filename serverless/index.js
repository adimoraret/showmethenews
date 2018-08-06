'use strict'

import './env.js'
import News from './news/News'

const news = new News()
export async function crawlNews(event, context, callback) {
  try {
    await news.crawlNews(event)
    callback(null, 'Success')
  }
  catch (err) {
    callback(err)
  }
}