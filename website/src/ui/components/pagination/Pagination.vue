<template>
  <nav class="pagination">
    
  </nav>
</template>
<script>
  
export default {
  name: 'Pagination',
  computed: {
    getVisiblePages(){
      if (this.currentPage === 1){
        return this.createConsecutiveArray(this.visiblePages, 1)
      }
      if (this.currentPage === this.totalPages) {
        return this.createConsecutiveArray(this.visiblePages, this.totalPages - this.visiblePages + 1)
      }
      

    }
  },
  methods: {
    createConsecutiveArray(numberOfElements, start){
      return Array.from(new Array(this._visiblePages), (x, i) => (i + start))
    },
    clickPage(pageNumber) {
      this.currentPage = pageNumber
    },
    prevPage(){
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    nextPage(){
      if (this.currentPage < totalPages) {
        this.currentPage++
      }
    }
  },
  props : ['currentPage', 'visiblePages', 'totalPages']
}
</script>
