<template>
  <div class="row row-8">
    <div class="col-lg-6">
      <small-horizontal-post v-for="article in articles" :key="article.url" :article="article"></small-horizontal-post>
    </div> 
    <div class="col-lg-3">
      <large-post :article="mainArticle1"></large-post>
    </div>
    <div class="col-lg-3">
      <large-post :article="mainArticle2"></large-post>
    </div>
  </div>
</template>
<script>
  import SmallHorizontalPost from '../../../components/news/SmallHorizontalPost.vue'
  import LargePost from '../../../components/news/LargePost.vue'

  const articles = [];
  for(var i=0; i<3; i++){
    articles.push({
          title: "",
          abstract: "",
          url:""+i,
          image: {
            thumbnail: "",
            main: ""
          },
          publishedDate: ""
        })
  }
  export default {
    components: {
      SmallHorizontalPost: SmallHorizontalPost,
      LargePost: LargePost
    },
    created: async function() {
      const articleResponse = await fetch("resources/news/NewYorkTimes/top_stories/technology/snapshot.json")
      const articles = await articleResponse.json()
      this.articles = articles.slice(0,3)
      this.mainArticle1 = articles[17]
      this.mainArticle2 = articles[18]
    },
    data : function(){
      return {
        articles: articles,
        mainArticle: {
          title: "",
          abstract: "",
          url:"",
          image: {
            thumbnail: "",
            main: ""
          },
          publishedDate: ""
        }
      }
    },  
  }
</script>

