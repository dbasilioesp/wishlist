// https://on.cypress.io/api
import products from '../fixtures/mock-products.json'

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.intercept(
      {
        method: 'GET', // Route all GET requests
        url: '/api/products', // that have a URL that matches '/users/*'
      },
      products, // and force the response to be: []
    )
    cy.visit('/')
    cy.contains('a', 'Home')
  })
})
