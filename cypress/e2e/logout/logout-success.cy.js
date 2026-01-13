describe('Logout - OrangeHRM', () => {
  it('Deve realizar logout com sucesso', () => {

    // Login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Garante que entrou no dashboard
    cy.url().should('include', '/dashboard');

    // Abre menu do usuário
    cy.get('.oxd-userdropdown-tab').click();

    // Clica em Logout
    cy.contains('Logout').click();

    // Valida que voltou para login
    cy.url().should('include', '/auth/login');
    cy.get('input[name="username"]').should('be.visible');
  });
});
