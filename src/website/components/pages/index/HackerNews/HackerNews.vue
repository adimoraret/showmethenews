<template>
  <div class="widget-content">
    <news-thumbnail v-for="article in articles" :key="article.title"
      thumbnail="./assets/img/hackernews-thumbnail.jpg" :article="article"/>
  </div>
</template>
<script>
import NewsThumbnail from '../../../thumbnails/news/NewsThumbnail.vue'
import HackerNewsAccess from '../../../../access/hackernews/HackerNewsAccess.js'

const hackerNewsAccess = new HackerNewsAccess();

export default {
    components: {
      NewsThumbnail: NewsThumbnail
    },
    created: async function(){
      this.articles = await hackerNewsAccess.getBestStories();
      console.log(this.articles);
    },
    data : function(){
      return {
        articles: [],      
      }
    },  
}
</script>
