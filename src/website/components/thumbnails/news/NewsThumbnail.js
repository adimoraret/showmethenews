import Vue from 'vue'
import NewsThumbnail from './NewsThumbnail.vue'

new Vue({
  el: "#app",
  render: h => h(NewsThumbnail)
});

if (ENV_IS_DEVELOPMENT) {
  Vue.config.devtools = true;
}
