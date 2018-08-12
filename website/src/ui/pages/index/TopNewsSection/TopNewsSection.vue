<template>
    <div class="row card-row">
      <SmallVericalPost v-for="article in articles" :key="article.url" :article="article"></SmallVericalPost>
    </div>
</template>
<script>
  import SmallVericalPost from '../../../components/news/SmallVerticalPost.vue'
  import NewsManager from '../../../../manager/NewsManager.js'

  const NumberOfArticles = 6;
  const newsManager = new NewsManager();

  export default {
    components: {
      SmallVericalPost: SmallVericalPost
    },
    created: async function() {
      const {articles} = await newsManager.getTopNewsArticles(this.section)
      
      this.articles = articles.slice(0, NumberOfArticles)
    },
    data : function(){
      return {
        articles: newsManager.getEmptyArticles(6),
      }
    },
    props: {
      section: {
          type: String,
          required: true
      }
    }
  }
</script>
