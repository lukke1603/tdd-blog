const getFirstname = () => cy.get('[data-test=firstname]');
const getLastname = () => cy.get('[data-test=lastname]');
const getNickname = () => cy.get('[data-test=nickname]');
const getDob = () => cy.get('[data-test=dob]');
const getEmail = () => cy.get('[data-test=email]');


describe('Adding a user', () => {
  it('should render form', () => {
    cy.visit('/');

    getFirstname().type('Robert');
    getLastname().type('Martin');
    getNickname().type('Uncle Bob');
    getDob().type('1952-12-05');
    getEmail().type('robert@unclebob.com');

    cy.get('[data-test=user-save-btn]').click();

    getFirstname().find('input').should('have.value', '');
    getLastname().find('input').should('have.value', '');
    getNickname().find('input').should('have.value', '');
    getDob().find('input').should('have.value', '');
    getEmail().find('input').should('have.value', '');
  });
})