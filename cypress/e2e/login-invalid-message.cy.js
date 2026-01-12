describe('Login - Mensagem de erro', () => {

  it('Deve exibir mensagem de erro ao tentar login inválido', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('input[name="username"]').type('usuario_invalido');
    cy.get('input[name="password"]').type('senha_invalida');

    cy.get('button[type="submit"]').click();

    // Valida mensagem de erro
    cy.contains('Invalid credentials').should('be.visible');

    // Garante que continua na tela de login
    cy.url().should('include', '/auth/login');
  });

});
