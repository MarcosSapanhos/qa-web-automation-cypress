describe('Navegação - Admin', () => {

  it('Deve acessar a página Admin pelo menu lateral', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Acessa Admin
    cy.contains('Admin').click();

    // Valida navegação
    cy.url().should('include', '/admin');
  });

});
