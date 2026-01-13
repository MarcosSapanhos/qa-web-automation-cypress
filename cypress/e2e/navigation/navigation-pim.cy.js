describe('Navegação - PIM', () => {

  it('Deve acessar a página PIM pelo menu lateral', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Acessa PIM
    cy.contains('PIM').click();

    // Valida navegação
    cy.url().should('include', '/pim');
  });

});
