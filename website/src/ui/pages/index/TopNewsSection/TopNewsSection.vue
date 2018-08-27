<template>
    <div>
      <div class="row card-row">
        <SmallVericalPost v-for="article in articles" :key="article.url" :article="article"></SmallVericalPost>
      </div>
      
      <Pagination :visiblePages="5" :itemsPerPage="6" :totalItems="totalArticles" @pageChanged="handlePageChange"/>
 
    </div>
</template>
<script>
  import SmallVericalPost from '../../../components/news/SmallVerticalPost.vue'
  import NewsManager from '../../../../manager/NewsManager.js'
  import Pagination from '../../../components/pagination/Pagination.vue'

  const NumberOfArticles = 6
  const newsManager = new NewsManager()

  export default {
    components: {
      SmallVericalPost: SmallVericalPost,
      Pagination: Pagination
    },
    methods: {
      handlePageChange(firstAndLastPosition){
        const {first, last} = firstAndLastPosition
        console.log(`first: ${first} last: ${last}`)
        this.articles = this.articles.slice(first, last)
      }
    },
    created: async function() {
      const {articles} = await newsManager.getTopNewsArticles(this.section)
      this.totalArticles = 32
      this.articles = articles.slice(this.firstPos-1, this.lastPos)
    },
    data : function(){
      return {
        articles: newsManager.getEmptyArticles(NumberOfArticles),
        totalArticles: 1,
        firstPos: 1,
        lastPos: 6
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
