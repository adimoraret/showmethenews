<template>
  <div class="newsticker">
    <ul class="newsticker__list">
      <li class="newsticker__item" v-for="article in articles" :key="article.title">
        <a :href="article.url" class="newsticker__item-url">
          {{article.title}}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import HackerNewsAccess from '../../../../access/hackernews/HackerNewsAccess.js'

const hackerNewsAccess = new HackerNewsAccess();

export default {
    created: async function(){
      this.articles = await hackerNewsAccess.getBestStories();
      
      var $newsTicker = $('.newsticker__list');
      if($newsTicker.length) {
        $newsTicker.newsTicker({
          row_height: 34,
          max_rows: 1,
          prevButton: $('#newsticker-button--prev'),
          nextButton: $('#newsticker-button--next')
        });
      }
  
    },
    data : function(){
      return {
        articles: [{
          title: "Loading from HackerNews..."
        }],      
      }
    },  
}
</script>
