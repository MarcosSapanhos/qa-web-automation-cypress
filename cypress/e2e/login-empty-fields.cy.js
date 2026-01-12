describe('Login - Campos vazios', () => {

  it('Não deve permitir login com usuário e senha vazios', () => {

    // Acessa a página de login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Clica no botão de login sem preencher nenhum campo
    cy.get('button[type="submit"]').click();

    // Valida que mensagens de obrigatoriedade aparecem
    cy.contains('Required').should('be.visible');
  });

});
