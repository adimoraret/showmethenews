export default class PopularNewsCrawler {

  getUrl(section, apiKey) {
    return `https://api.nytimes.com/svc/mostpopular/v2/mostviewed/${section}/1.json?api-key=${apiKey}`;
  }

  mapToNews(rawNews) {
    return rawNews.results.map(n => {
      const thumbnail = n.media[0]['media-metadata'].find(x => x.format == 'Standard Thumbnail')
      const mainImage = n.media[0]['media-metadata'].find(x => x.format == 'mediumThreeByTwo210')
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