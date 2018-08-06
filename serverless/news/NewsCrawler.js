import NewYorkTimesCrawler from './NewYorkTimesCrawler'

export default class NewsCrawler {
  constructor(source, type, category) {
    this._source = source
    this._type = type
    this._category = category
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
        const newYorkTimesCrawler = new NewYorkTimesCrawler(this._type, this._category)
        const newsResponse = await newYorkTimesCrawler.crawl()
        return this.filterNews(newsResponse)
      }
      default: throw new Error(`Invalid source. Expected: NewYorkTimes Got: ${this._source} `)
    }
  }


}