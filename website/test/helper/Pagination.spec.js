import { expect } from 'chai';

import Pagination from "../../src/ui/components/pagination/Pagination";

describe('Navigation', () => {

  it('current page should not change if no action is peformed', () => {
    const pagination = new Pagination({
      currentPage: 3
    });

    const currentPage = pagination.getCurrentPage()
    expect(currentPage).to.equal(3)
  })

  it('first page should not change when navigating backwards', () => {
    const pagination = new Pagination({
      currentPage: 0
    });

    pagination.prevPage()

    const currentPage = pagination.getCurrentPage()
    expect(currentPage).to.equal(0)
  })

  it('last page should not change when navigating forward', () => {
    const pagination = new Pagination({
      itemsPerPage: 5,
      items: [1, 2, 3, 4, 5],
      currentPage: 1
    });

    pagination.nextPage()

    const currentPage = pagination.getCurrentPage()
    expect(currentPage).to.equal(1)
  })

  it('should navigate one page forward', () => {
    const pagination = new Pagination({
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      itemsPerPage: 13,
      currentPage: 0
    });

    pagination.nextPage()

    const currentPage = pagination.getCurrentPage()
    expect(currentPage).to.equal(1)
  })

  it('should navigate one page backwards', () => {
    const pagination = new Pagination({
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      itemsPerPage: 3,
      currentPage: 2
    });

    pagination.prevPage()

    const currentPage = pagination.getCurrentPage()
    expect(currentPage).to.equal(1)
  })

})

describe('Items pagination', () => {

  it('should get all items when they fit on a single page', () => {
    const pagination = new Pagination({
      itemsPerPage: 5,
      items: [1, 2, 3, 4, 5],
      currentPage: 0
    });

    const items = pagination.getItems()
    expect(items).to.deep.equal([1, 2, 3, 4, 5])
  })

  it('should get all items from the first page', () => {
    const pagination = new Pagination({
      itemsPerPage: 5,
      items: [1, 2, 3, 4, 5, 6],
      currentPage: 0
    });

    const items = pagination.getItems()
    expect(items).to.deep.equal([1, 2, 3, 4, 5])
  })

  it('should get all items from the second page', () => {
    const pagination = new Pagination({
      itemsPerPage: 5,
      items: [1, 2, 3, 4, 5, 6, 7],
      currentPage: 1
    });

    const items = pagination.getItems()
    expect(items).to.deep.equal([6, 7])
  })

  it('should get items from the first page and then, after changing the page, items from the second page', () => {
    const pagination = new Pagination({
      itemsPerPage: 5,
      items: [1, 2, 3, 4, 5, 6, 7],
      currentPage: 0
    });

    let items = pagination.getItems()

    expect(items).to.deep.equal([1, 2, 3, 4, 5])

    pagination.nextPage()
    items = pagination.getItems()
    expect(items).to.deep.equal([6, 7])
  })

})

describe('Visiblle buttons', () => {

  it('should show a single button when all items are on the same page', () => {
    const pagination = new Pagination({
      itemsPerPage: 5,
      items: [1, 2, 3, 4, 5],
      buttons: 3,
    });

    const buttons = pagination.getButtons()
    expect(buttons).to.deep.equal([1])
  })

  it('should show two buttons when items are on two pages', () => {
    const pagination = new Pagination({
      itemsPerPage: 3,
      items: [1, 2, 3, 4, 5],
      buttons: 3,
    });

    const buttons = pagination.getButtons()
    expect(buttons).to.deep.equal([1, 2])
  })

})
