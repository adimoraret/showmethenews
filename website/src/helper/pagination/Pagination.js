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

  getLastPage() {
    return this._totalPages
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

  generateConsecutiveArray(size, start) {
    return Array.from(new Array(size), (x, i) => (i + start))
  }

  getVisiblePages() {
    if (this._currentPage <= Math.floor(this._visiblePages / 2) + 1) {
      return this.generateConsecutiveArray(this._visiblePages, 1)
    }
    else if (this._currentPage >= this._totalPages - Math.floor(this._visiblePages / 2)) {
      return this.generateConsecutiveArray(this._visiblePages, this._totalPages - this._visiblePages + 1)
    }
    else {
      return this.generateConsecutiveArray(this._visiblePages, this._currentPage - Math.floor(this._visiblePages / 2))
    }
  }
}