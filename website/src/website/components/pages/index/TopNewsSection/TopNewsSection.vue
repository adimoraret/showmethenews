<template>
  <div class="tabs__content-pane tabs__content-pane--active" id="tab-all" style="display: block;">
    <div class="row card-row">
      <SmallVericalPost v-for="article in articles" :key="article.url" :article="article"></SmallVericalPost>
    </div>
  </div>
</template>
<script>
  import SmallVericalPost from './SmallVerticalPost.vue'

  const articles = [];
  for(var i=0; i<6; i++){
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
      SmallVericalPost: SmallVericalPost
    },
    created: async function() {
      const articleResponse = await fetch("resources/news/NewYorkTimes/top_stories/technology/snapshot.json")
      const articles = await articleResponse.json()
      this.articles = articles.slice(4,4+6)
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
    }
  }
</script>
