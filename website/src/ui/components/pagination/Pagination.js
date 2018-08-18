export default class Pagination {
  constructor(configuration) {
    const { buttons, itemsPerPage, currentPage, items } = configuration
    this._buttons = buttons
    this._itemsPerPage = itemsPerPage
    this._currentPage = currentPage
    this._items = items || []
    this._itemsNumber = this._items.length
    this._totalPages = Math.ceil(this._itemsNumber / itemsPerPage)
  }

  getCurrentPage() {
    return this._currentPage
  }

  nextPage() {
    if (this._currentPage < this._totalPages - 1) {
      this._currentPage++
    }
  }

  prevPage() {
    if (this._currentPage > 0) {
      this._currentPage--
    }
  }

  getItems() {
    const start = this._currentPage * this._itemsPerPage
    return this._items.slice(start, start + Math.min(this._itemsPerPage, this._itemsNumber - start))
  }

  getButtons() {
    return [1]
  }
}