import Vue from 'vue'
import BestStoriesHackerNews from './HackerNews/BestStories.vue'
import LatestJobsHackerNews from './HackerNews/LatestJobs.vue'
import PopularNewsSection from './PopularNewsSection/PopularNewsSection.vue'
import TopNewsSection from './TopNewsSection/TopNewsSection.vue'

const vueComponents = [
  { el: '#hackernews', render: h => h(BestStoriesHackerNews) },
  { el: '#hackernewsjobs', render: h => h(LatestJobsHackerNews) },
  { el: '#popularnews', render: h => h(PopularNewsSection) },
  { el: '#topnewstechnology', render: h => h(TopNewsSection, { props: { section: 'technology' } }) },
  // { el: '#topnewsscience', render: h => h(TopNewsSection, { props: { section: 'science' } }) },
  // { el: '#topnewsbusiness', render: h => h(TopNewsSection, { props: { section: 'business' } }) },
  // { el: '#topnewshealth', render: h => h(TopNewsSection, { props: { section: 'health' } }) },
  // { el: '#topnewsrealestate', render: h => h(TopNewsSection, { props: { section: 'realestate' } }) },
  // { el: '#topnewsmoives', render: h => h(TopNewsSection, { props: { section: 'movies' } }) },
];
vueComponents.map(v => new Vue(v));

if (ENV_IS_DEVELOPMENT) {
  Vue.config.devtools = true;
}
