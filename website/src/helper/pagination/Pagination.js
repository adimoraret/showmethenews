export default class Pagination {
  init(configuration) {
    const { visiblePages, itemsPerPage, currentPage, items } = configuration
    this._itemsPerPage = itemsPerPage
    this._currentPage = currentPage
    this._items = items || []

    this._itemsNumber = this._items.length
    this._totalPages = Math.ceil(this._itemsNumber / itemsPerPage)
    this._visiblePages = Math.min(visiblePages, this._totalPages)
  }

  getCurrentPage() {
    return this._currentPage
  }

  nextPage() {
    if (this._currentPage < this._totalPages) {
      this._currentPage++
    }
  }

  prevPage() {
    if (this._currentPage > 1) {
      this._currentPage--
    }
  }

  clickPage(pageNumber) {
    this._currentPage = pageNumber
  }

  getItems() {
    const start = (this._currentPage - 1) * this._itemsPerPage
    return this._items.slice(start, start + Math.min(this._itemsPerPage, this._itemsNumber - start))
  }

  getVisiblePages() {
    if (this._currentPage == 1) {
      return Array.from(new Array(this._visiblePages), (x, i) => (i + 1))
    }
    if (this._currentPage == this._totalPages) {
      return Array.from(new Array(this._visiblePages), (x, i) => this._totalPages - this._visiblePages + i + 1)
    }

    const a = []
    for (var i = this._currentPage - Math.floor(this._visiblePages / 2); i < this._currentPage; i++) {
      if (i >= 1) {
        a.push(i)
      }
    }
    a.push(this._currentPage)
    for (var i = this._currentPage + 1; i <= this._currentPage + Math.floor(this._visiblePages / 2); i++) {
      if (i <= this._totalPages) {
        a.push(i)
      }
    }
    return a
  }
}