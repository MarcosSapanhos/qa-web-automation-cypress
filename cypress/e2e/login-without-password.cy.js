describe('Login - Sem senha', () => {

  it('Não deve permitir login sem informar a senha', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('input[name="username"]').type('Admin');

    cy.get('button[type="submit"]').click();

    // Valida mensagem de campo obrigatório
    cy.contains('Required').should('be.visible');
  });

});
