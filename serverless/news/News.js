import NewsCrawler from "./NewsCrawler"
import NewsCloudStorage from "../resource/CloudStorage/NewsCloudStorage"

export default class News {

  _extractMessage(message) {
    const pubsubDecodedMessage = Buffer.from(JSON.stringify(message), 'base64')
    return JSON.parse(pubsubDecodedMessage)
  }

  async crawlNews(event, callback) {
    try {
      const { source, category, section } = this._extractMessage(event.data)

      const newsCrawler = new NewsCrawler(source, category, section)
      const news = await newsCrawler.crawl()

      const newsCloudStorage = new NewsCloudStorage(
        (err) => { callback(`Error while uploading snapshot for ${source} ${category} ${section}. Got: ${err}`) },
        () => { callback(null, 'Snapshot uploaded successfully for ${source} ${category} ${section}.') }
      )
      newsCloudStorage.uploadNewsFile(source, category, section, news)
    }
    catch (err) {
      callback(err)
    }
  }

}