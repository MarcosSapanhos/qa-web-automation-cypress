describe('Sessão - Refresh mantém sessão', () => {

  it('Deve manter o usuário logado após refresh da página', () => {

    // Login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Garante que está no dashboard
    cy.url().should('include', '/dashboard');

    // Atualiza a página
    cy.reload();

    // Continua logado
    cy.url().should('include', '/dashboard');
  });

});
