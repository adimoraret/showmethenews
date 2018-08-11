import Vue from 'vue'
import BestStoriesHackerNews from './HackerNews/BestStories.vue'
import LatestJobsHackerNews from './HackerNews/LatestJobs.vue'
import PopularNewsSection from './PopularNewsSection/PopularNewsSection.vue'
import TopNewsSection from './TopNewsSection/TopNewsSection.vue'

new Vue({
  el: "#hackernews",
  render: h => h(BestStoriesHackerNews)
})
new Vue({
  el: "#hackernewsjobs",
  render: h => h(LatestJobsHackerNews)
})
new Vue({
  el: "#popularnewssection",
  render: h => h(PopularNewsSection)
})
new Vue({
  el: '#topnewssection',
  render: h => h(TopNewsSection)
})


if (ENV_IS_DEVELOPMENT) {
  Vue.config.devtools = true;
}
