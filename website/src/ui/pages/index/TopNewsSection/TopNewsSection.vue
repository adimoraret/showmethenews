<template>
    <div>
      <div class="row card-row">
        <SmallVericalPost v-for="article in articles" :key="article.url" :article="article"></SmallVericalPost>
      </div>
      
      <nav class="pagination">
        <a v-if="CurrentPage != 1" href="#latest-news" @click="prevPage()"
        class="pagination__page pagination__icon pagination__page--next">
          <i class="ui-arrow-left"></i>
        </a>
        <span v-else class="pagination__page pagination__icon pagination__page--next">
          <i class="ui-arrow-left"></i>
        </span>

        <span v-for="page in pages" :key="page">
          <span v-if="CurrentPage === page" class="pagination__page pagination__page--current">{{CurrentPage}}</span>
          <a v-else href="#latest-news" 
            @click="clickPage(page)"  
            class="pagination__page">{{page}}</a>
        </span>

        <a v-if="CurrentPage != LastPage" href="#latest-news" @click="nextPage()"
        class="pagination__page pagination__icon pagination__page--next">
          <i class="ui-arrow-right"></i>
        </a>
        <span v-else class="pagination__page pagination__icon pagination__page--next">
          <i class="ui-arrow-right"></i>
        </span>

      </nav>

    </div>
</template>
<script>
  import SmallVericalPost from '../../../components/news/SmallVerticalPost.vue'
  import NewsManager from '../../../../manager/NewsManager.js'
  import Paginaton from '../../../../helper/pagination/Pagination.js'

  const NumberOfArticles = 6
  const newsManager = new NewsManager()

  export default {
    components: {
      SmallVericalPost: SmallVericalPost
    },
    watch: {
      CurrentPage: function(newPage, oldPage){
        console.log('changed')
        this.pagination.clickPage(newPage)
        this.articles = this.pagination.getItems()
        this.pages = this.pagination.getVisiblePages()
      }
    },
    methods: {
      clickPage(pageNumber) {
        this.CurrentPage = pageNumber
      },
      prevPage(){
        this.pagination.prevPage()
        this.CurrentPage = this.pagination.getCurrentPage()
      },
      nextPage(){
        this.pagination.nextPage()
        this.CurrentPage = this.pagination.getCurrentPage()
      }
    },
    created: async function() {
      const {articles} = await newsManager.getTopNewsArticles(this.section)
      this.pagination.init({ 
        visiblePages:3, 
        itemsPerPage:NumberOfArticles, 
        currentPage:this.CurrentPage, 
        items:articles })
      
      this.articles = this.pagination.getItems()
      this.pages = this.pagination.getVisiblePages()
      this.LastPage = this.pagination.getLastPage()
    },
    data : function(){
      return {
        articles: newsManager.getEmptyArticles(NumberOfArticles),
        pages: [],
        CurrentPage: 1,
        LastPage: 1,
        pagination: new Paginaton()
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
