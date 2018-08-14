import fetch from 'node-fetch'
import PopularNewsCrawler from './PopularNewsCrawler';
import TopNewsCrawler from './TopNewsCrawler';

export default class NewYorkTimesCrawler {
  constructor(category, section) {
    this._category = category
    this._section = section
    this.NewYorkApiKey = process.env.NewYorkApiKey;
  }

  async crawl() {
    switch (this._category) {
      case 'top_stories': {
        const handler = new TopNewsCrawler()
        return await this.crawlStories(handler)
      }
      case 'most_popular': {
        const handler = new PopularNewsCrawler()
        return await this.crawlStories(handler)
      }
      default: throw new Error(`Invalid news category. Expected: top_stories got: ${this._category}`)
    }
  }

  async crawlStories(storiesHandler) {
    const url = storiesHandler.getUrl(this._section, this.NewYorkApiKey)
    const response = await fetch(url)
    const rawNews = await response.json()
    return storiesHandler.mapToNews(rawNews)
  }
}