import fetch from 'node-fetch'

export default class NewYorkTimesCrawler {
  constructor(type, category) {
    this._type = type
    this._category = category
    this.NewYorkApiKey = process.env.NewYorkApiKey;
    console.log(`Key: ${this.NewYorkApiKey}`);
  }

  async crawl() {
    switch (this._type) {
      case 'top_stories': {
        return await this.crawlTopStories()
      }
      default: throw new Error(`Invalid news type. Expected: top_stories got: ${this._type}`)
    }
  }

  async crawlTopStories() {
    const url = `https://api.nytimes.com/svc/topstories/v2/${this._category}.json?api-key=${this.NewYorkApiKey}`;
    const response = await fetch(url);
    return await response.json();
  }
}