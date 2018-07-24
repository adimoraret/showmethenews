import NewYorkTimesCrawler from './NewYorkTimesCrawler';

export default class NewsCrawler {
  constructor(source, type, category) {
    this._source = source;
    this._type = type;
    this._category = category;
  }

  crawl() {
    switch (this._source) {
      case 'NewYorkTimes': {
        const newYorkTimesCrawler = new NewYorkTimesCrawler(this._type, this._category);
      }
      default: throw new Error(`Invalid source. Expected: NewYorkTimes. Got: ${this._source} `);
    }
  }
}