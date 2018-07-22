import Vue from 'vue'
import BestStoriesHackerNews from './HackerNews/BestStories.vue'
import LatestJobsHackerNews from './HackerNews/LatestJobs.vue'

new Vue({
  el: "#hackernews",
  render: h => h(BestStoriesHackerNews)
});

new Vue({
  el: "#hackernewslatestjobs",
  render: h => h(LatestJobsHackerNews)
});


if (ENV_IS_DEVELOPMENT) {
  Vue.config.devtools = true;
}
