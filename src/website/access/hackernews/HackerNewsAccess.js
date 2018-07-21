export default class HackerNewsAccess {

  async getBestStories() {
    const bestStoriesResponse = await fetch('https://hacker-news.firebaseio.com/v0/beststories.json')
    const bestStoryIds = await bestStoriesResponse.json()
    const top5BestStoryIds = bestStoryIds.slice(0, 5)

    const stories = top5BestStoryIds.map(async (storyId) => {
      const storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
      const content = await storyResponse.json()
      return {
        title: content.title,
        url: content.url
      }
    });

    return await Promise.all(stories);
  }

}