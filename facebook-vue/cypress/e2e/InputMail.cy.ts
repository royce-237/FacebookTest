describe('Input Email Component', () => {
  
  it('should render the email input and accept a valid email', () => {
    // Visite la page où le champ email est disponible
    cy.visit('/InputEmail'); // Remplacer par la route correcte

    // Trouve le champ email et entre une valeur
    cy.get('input[type="email"]').type('royce@gmail.com');

    // Vérifie qu'aucun message d'erreur n'est visible
    cy.get('span.text-red-500').should('not.exist');
  });
});