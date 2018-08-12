
export default class NewsManager {

  async getPopularArticles(count) {
    const response = await fetch("resources/news/NewYorkTimes/most_popular/snapshot.json")
    const articles = await response.json()
    return {
      articles: articles.slice(0, count),
    }
  }

  async getTopNewsArticles(section, count) {
    const response = await fetch(`resources/news/NewYorkTimes/top_stories/${section}/snapshot.json`)
    const articles = await response.json()
    return {
      articles: articles.slice(0, count)
    }
  }

  getEmptyArticles(count) {
    if (count <= 1) {
      return [emptyArticle]
    }
    return [...Array(count)]
      .map((value, index) => {
        const article = Object.assign({}, emptyArticle)
        article.url = index
        return article
      })
  }
}

const emptyArticle = {
  title: "",
  abstract: "",
  url: "",
  image: {
    thumbnail: "",
    main: ""
  },
  publishedDate: ""
}
