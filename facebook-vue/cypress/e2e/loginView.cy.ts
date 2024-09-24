describe('LoginView Form Validation E2E', () => {

  it('renders the title Facebook', () => {
    cy.visit('http://localhost:5173/'); 
    cy.get('h2').should('contain', 'Facebook');
  });

  it('shows error when the form is not correctly filled', () => {
    cy.visit('http://localhost:5173/');

    cy.get('input[type="email"]').type('invalid-email');
    cy.get('input[type="password"]').type('short12');

    cy.get('form').submit();

    cy.get('.text-red-500').should('exist');
  });

  it('submits successfully with valid informations and redirects to loginSuccess', () => {
    cy.visit('http://localhost:5173/');

    cy.get('input[type="email"]').type('valid@example.com');
    cy.get('input[type="password"]').type('ValidPassword123!');

    cy.get('form').submit();

    cy.get('.text-red-500').should('not.exist');

    cy.url().should('include', '/loginSuccess');
  });

});
