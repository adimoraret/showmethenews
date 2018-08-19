<template>
    <div>
      <div class="row card-row">
        <SmallVericalPost v-for="article in articles" :key="article.url" :article="article"></SmallVericalPost>
      </div>
      <nav class="pagination">
        <a v-for="page in pages" :key="page" @click="clickPage(page)"  class="pagination__page" 
          :class="page == CurrentPage ? 'pagination__page--current' : '' ">{{page}}</a>
      </nav>
    </div>
</template>
<script>
  import SmallVericalPost from '../../../components/news/SmallVerticalPost.vue'
  import NewsManager from '../../../../manager/NewsManager.js'
  import Paginaton from '../../../../helper/pagination/Pagination.js'

  const NumberOfArticles = 6
  const newsManager = new NewsManager()
  const pagination = new Paginaton()


  export default {
    components: {
      SmallVericalPost: SmallVericalPost
    },
    methods: {
      clickPage(pageNumber) {
        pagination.clickPage(pageNumber)
        this.pages = pagination.getVisiblePages()
        this.articles = pagination.getItems()
        this.CurrentPage = pagination.getCurrentPage()
      }
    },
    created: async function() {
      const {articles} = await newsManager.getTopNewsArticles(this.section)
      pagination.init({ 
        visiblePages:3, 
        itemsPerPage:NumberOfArticles, 
        currentPage:this.CurrentPage, 
        items:articles })
      
      this.articles = pagination.getItems()
      this.pages = pagination.getVisiblePages()
    },
    data : function(){
      return {
        articles: newsManager.getEmptyArticles(NumberOfArticles),
        pages: [],
        CurrentPage: 1
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
