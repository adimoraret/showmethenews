<template>
  <nav class="pagination">

    <a v-if="currentPage != 1" href="#latest-news" @click="prevPage()" class="pagination__page pagination__icon pagination__page--next">
      <i class="ui-arrow-left"></i>
    </a>
    <span v-else class="pagination__page pagination__icon pagination__page--next">
      <i class="ui-arrow-left"></i>
    </span>

    <span v-for="page in pages" :key="page">
      <span v-if="currentPage === page" class="pagination__page pagination__page--current">{{currentPage}}</span>
      <a v-else href="#latest-news" @click="clickPage(page)" class="pagination__page">{{page}}</a>
    </span>

    <a v-if="currentPage != lastPage" href="#latest-news" @click="nextPage()" class="pagination__page pagination__icon pagination__page--next">
      <i class="ui-arrow-right"></i>
    </a>
    <span v-else class="pagination__page pagination__icon pagination__page--next">
      <i class="ui-arrow-right"></i>
    </span>

  </nav>
</template>
<script>
import Pagination from '../../../helper/pagination/Pagination';

export default {
  name: 'Pagination',
  computed: {
    
  },
  watch: {
    totalItems: function(val) {
      this.pagination = new Pagination(this.visiblePages, this.itemsPerPage, this.currentPage, val)
      this.pages = this.pagination.getVisiblePages()
    }
  },
  methods: {
    refreshPagination(){
      this.pages = this.pagination.getVisiblePages()
      this.currentPage = this.pagination.getCurrentPage()
      this.lastPage = this.pagination.getLastPage()
      this.$emit('pageChanged', this.pagination.getFirstAndLastPosition())
    },
    clickPage(pageNumber) {
      this.pagination.clickPage(pageNumber)
      this.refreshPagination()
    },
    prevPage() {
      this.pagination.prevPage()
      this.refreshPagination()
    },
    nextPage() {
      this.pagination.nextPage()
      this.refreshPagination()
    }
  },
  data() {
    return {
      pagination: {},
      pages: [],
      currentPage: 1,
      lastPage: 1
    }
  },
  props: {
      visiblePages: {
          type: Number,
          required: true
      },
      itemsPerPage: {
          type: Number,
          required: true
      },
      totalItems: {
          type: Number,
          required: true
      },            
    }
}
</script>
