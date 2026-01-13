describe('Navegação - Menu lateral', () => {

  it('Deve exibir o menu lateral após login', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Menu lateral visível
    cy.get('aside').should('be.visible');
  });

});
