import fetch from 'node-fetch'

export default class NewYorkTimesCrawler {
  constructor(category, section) {
    this._category = category
    this._section = section
    this.NewYorkApiKey = process.env.NewYorkApiKey;
  }

  async crawl() {
    switch (this._category) {
      case 'top_stories': {
        return await this.crawlTopStories()
      }
      default: throw new Error(`Invalid news category. Expected: top_stories got: ${this._category}`)
    }
  }

  async crawlTopStories() {
    const url = `https://api.nytimes.com/svc/topstories/v2/${this._section}.json?api-key=${this.NewYorkApiKey}`;
    const response = await fetch(url);
    return await response.json();
  }
}