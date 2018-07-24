export default class NewYorkTimesCrawler {
  constructor(type, category) {
    this._type = type
    this._category = category
    this.NewYorkApiKey = '';
  }

  crawl() {
    switch (this._type) {
      case 'top_stories': {
        this.crawlTopStories()
      }
      default: throw new Error(`Invalid news type. Expected: top_stories got: ${this._type}`)
    }
  }

  crawlTopStories() {
    const url = `https://api.nytimes.com/svc/topstories/v2/${this._category}.json?api-key=${this.NewYorkApiKey}`;
    const stories = await fetch(url);
    console.log(JSON.stringify(stories));
  }
}