describe('Adding a user', () => {
  it('should render form', () => {
    cy.visit('/');

    cy.get('[data-test=firstname]').type('Robert');
    cy.get('[data-test=lastname]').type('Martin');
    cy.get('[data-test=nickname]').type('Uncle Bob');
    cy.get('[data-test=dob]').type('1952-12-05');
    cy.get('[data-test=email]').type('robert@unclebob.com');

    cy.get('[data-test=user-save-btn]').click();
  });
})