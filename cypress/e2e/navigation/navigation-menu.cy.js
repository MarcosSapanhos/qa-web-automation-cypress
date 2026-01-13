describe('Navegação - Menu lateral', () => {

  it('Deve acessar uma página interna após login', () => {

    // Login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Garante que está logado
    cy.url().should('include', '/dashboard');

    // Valida que o menu lateral está visível
    cy.get('aside').should('be.visible');

    // Acessa uma opção do menu (PIM)
    cy.contains('PIM').click();

    // Valida que navegou para a página correta
    cy.url().should('include', '/pim');
  });

});
