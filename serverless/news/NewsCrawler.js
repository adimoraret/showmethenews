import NewYorkTimesCrawler from './NewYorkTimes/NewYorkTimesCrawler'

export default class NewsCrawler {
  constructor(source, category, section) {
    this._source = source
    this._category = category
    this._section = section
  }

  async crawl() {
    switch (this._source) {
      case 'NewYorkTimes': {
        const newYorkTimesCrawler = new NewYorkTimesCrawler(this._category, this._section)
        return await newYorkTimesCrawler.crawl()
      }
      default: throw new Error(`Invalid source. Expected: NewYorkTimes Got: ${this._source} `)
    }
  }
}