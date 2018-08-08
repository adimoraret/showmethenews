import Vue from 'vue'
import BestStoriesHackerNews from './HackerNews/BestStories.vue'
import LatestJobsHackerNews from './HackerNews/LatestJobs.vue'
import SmallPost from './NewYorkTimes/SmallPost.vue'

new Vue({
  el: "#hackernews",
  render: h => h(BestStoriesHackerNews)
});
new Vue({
  el: "#hackernewsjobs",
  render: h => h(LatestJobsHackerNews)
});

new Vue({
  el: "#test123",
  render: h => h(SmallPost)
})


if (ENV_IS_DEVELOPMENT) {
  Vue.config.devtools = true;
}
