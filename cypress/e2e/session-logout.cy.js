describe('Sessão - Logout invalida sessão', () => {

  it('Não deve permitir acesso após logout', () => {

    // Acessa a tela de login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Realiza login
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Garante que entrou no dashboard
    cy.url().should('include', '/dashboard');

    // Realiza logout
    cy.get('.oxd-userdropdown-tab').click();
    cy.contains('Logout').click();

    // Valida que voltou para a tela de login
    cy.url().should('include', '/auth/login');

    // Tenta voltar para o dashboard via URL
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
      { failOnStatusCode: false }
    );

    // Deve continuar na tela de login
    cy.url().should('include', '/auth/login');
  });

});
