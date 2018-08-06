import NewYorkTimesCrawler from './NewYorkTimesCrawler'

export default class NewsCrawler {
  constructor(source, category, section) {
    this._source = source
    this._category = category
    this._section = section
  }

  filterNews(newsResponse) {
    const news = newsResponse.results
    return news.map(n => {
      const thumbnail = n.multimedia.find(x => x.format == 'thumbLarge')
      const mainImage = n.multimedia.find(x => x.format == 'mediumThreeByTwo210')
      return {
        title: n.title,
        abstract: n.abstract,
        url: n.url,
        image: {
          thumbnail: thumbnail ? thumbnail.url : "",
          main: mainImage ? mainImage.url : ""
        },
        publishedDate: n.published_date,
      }
    })
  }

  async crawl() {
    switch (this._source) {
      case 'NewYorkTimes': {
        const newYorkTimesCrawler = new NewYorkTimesCrawler(this._category, this._section)
        const newsResponse = await newYorkTimesCrawler.crawl()
        return this.filterNews(newsResponse)
      }
      default: throw new Error(`Invalid source. Expected: NewYorkTimes Got: ${this._source} `)
    }
  }
}