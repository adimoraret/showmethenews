<template>
  <div class="row row-8">
    <div class="col-lg-6">
      <small-horizontal-post v-for="article in articles" :key="article.url" :article="article"></small-horizontal-post>
    </div> 
    <div class="col-lg-3">
      <large-post :article="firstMainArticle"></large-post>
    </div>
    <div class="col-lg-3">
      <large-post :article="secondMainArticle"></large-post>
    </div>
  </div>
</template>
<script>
  import SmallHorizontalPost from '../../../components/news/SmallHorizontalPost.vue'
  import LargePost from '../../../components/news/LargePost.vue'
  import NewsManager from '../../../../manager/NewsManager.js'
  
  const NumberOfHorizontalArticles = 3;
  const newsManager = new NewsManager();

  export default {
    components: {
      SmallHorizontalPost: SmallHorizontalPost,
      LargePost: LargePost
    },
    created: async function() {
      const {articles} = await newsManager.getPopularArticles(5)
      
      this.articles = articles.slice(0, NumberOfHorizontalArticles)
      this.firstMainArticle = articles[NumberOfHorizontalArticles]
      this.secondMainArticle = articles[NumberOfHorizontalArticles+1]
    },
    data : function(){
      return {
        articles: newsManager.getEmptyArticles(3),
        firstMainArticle: newsManager.getEmptyArticles(1)[0],
        secondMainArticle: newsManager.getEmptyArticles(1)[0]
      }
    },  
  }
</script>

