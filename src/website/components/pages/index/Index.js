import Vue from 'vue'
import HackerNews from './HackerNews/HackerNews.vue'

new Vue({
  el: "#hackernews",
  render: h => h(HackerNews)
});

if (ENV_IS_DEVELOPMENT) {
  Vue.config.devtools = true;
}
