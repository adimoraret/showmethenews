import NewsCrawler from "./NewsCrawler";

export default class News {

  async crawlNews(event) {
    const pubsubDecodedMessage = Buffer.from(JSON.stringify(event.data), 'base64')
    const { source, type, category } = JSON.parse(pubsubDecodedMessage)
    const newsCrawler = new NewsCrawler(source, type, category)
    const news = await newsCrawler.crawl()

    console.log(news)
  }

}