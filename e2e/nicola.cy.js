//Membuka Project
describe('Buka Test Page', () => {
  it('passes', () => {
    cy.visit('localhost/RestoUAS')
  })
})

//Login Sebagai Admin 
describe('Login Admin', () => {
  it('passes', () => {
    cy.get('[href="login.html"]').click()
  })
})

//Isi Form Login
describe('Isi login', () => {
  it('passes', () => {
    cy.get('#username').type('administrator')
    cy.get('#password').type('ony123')
    cy.get('[type="submit"]').click()
  })
})

//Test Case 1
describe('Edit Pesanan', () => {
  it('passes', () => {
    cy.get(':nth-child(3) > .nav-link').click()
    cy.get(':nth-child(1) > :nth-child(6) > .btn-success').click()
    cy.get('#nama_masakan').clear()
    cy.get('#nama_masakan').type('Bihun Bakar')
    cy.get('.text-center > button').click({ force: true })
  })
})

//Test Case 2
describe('Edit Pesanan2', () => {
  it('passes', () => {
    cy.get(':nth-child(3) > :nth-child(6) > .btn-success').click()
    cy.get('.text-center > button').click({ force: true })
  })
})

//Test Case 3
describe('Edit Pesanan3', () => {
  it('passes', () => {
    cy.get(':nth-child(2) > :nth-child(6) > .btn-success').click()
    cy.get('#nama_masakan').clear()
    cy.get('.text-center > button').click({ force: true })
  })
})

//Logout
describe('Logout', () => {
  it('passes', () => {
    cy.get('.book-a-table-btn').click()
  })
})