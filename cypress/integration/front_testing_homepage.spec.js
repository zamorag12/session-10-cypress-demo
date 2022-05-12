import homePage from '../pages/homePage'

describe('Home Page', () => {
  beforeEach(() => {
    homePage.goto()
  })

  it('should display 7 posts per page', async () => {
    homePage.posts().should('have.length', 7)
  })
})
