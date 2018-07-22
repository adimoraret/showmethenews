export default class HackerNewsAccess {

  async getBestStories() {
    return await this.getStories('https://hacker-news.firebaseio.com/v0/beststories.json', 5)
  }

  async getJobStories() {
    return await this.getStories('https://hacker-news.firebaseio.com/v0/jobstories.json', 10)
  }

  async getStories(storyTypeUrl, numberOfStories) {
    const storiesResponse = await fetch(storyTypeUrl)
    const storyIds = await storiesResponse.json()
    const topStoryIds = storyIds.slice(0, numberOfStories)

    const stories = topStoryIds.map(async (storyId) => {
      const storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
      const content = await storyResponse.json()
      return {
        title: content.title,
        url: content.url
      }
    })

    return await Promise.all(stories)
  }

}