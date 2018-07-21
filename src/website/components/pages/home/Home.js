import Vue from 'vue'
import Home from './Home.vue'

new Vue({
  el: "#app",
  render: h => h(Home)
});

if (ENV_IS_DEVELOPMENT) {
  Vue.config.devtools = true;
}
