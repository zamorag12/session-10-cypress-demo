import basePage from './basePage'

const homePage = {
  url: '',
  postTitles: '.post-title',

  // littering a page object with getters is lame...
  posts () {
    return cy.get(this.postTitles)
  }
}
export default { ...basePage, ...homePage }
