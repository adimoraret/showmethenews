import Vue from 'vue'
import BestStoriesHackerNews from './HackerNews/BestStories.vue'
import LatestJobsHackerNews from './HackerNews/LatestJobs.vue'
// import Technology from './NewYorkTimes/Technology.vue'

new Vue({
  el: "#hackernews",
  render: h => h(BestStoriesHackerNews)
});
new Vue({
  el: "#hackernewsjobs",
  render: h => h(LatestJobsHackerNews)
});

// new Vue({
//   el: "#newyorktimestechnology",
//   render: h => h(Technology)
// })


if (ENV_IS_DEVELOPMENT) {
  Vue.config.devtools = true;
}
