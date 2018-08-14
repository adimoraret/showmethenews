export default class TopNewsCrawler {

  getUrl(section, apiKey) {
    return `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`
  }

  mapToNews(rawNews) {
    return rawNews.results.map(n => {
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
}