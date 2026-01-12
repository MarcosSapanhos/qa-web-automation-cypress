describe('Acesso à rota protegida - OrangeHRM', () => {
  it.skip('Não deve permitir acesso ao dashboard sem login', () => {
// cenário desativado por instabilidade do OrangeHRM demo

    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard',
      { failOnStatusCode: false }
    );

    // Valida que o conteúdo do dashboard NÃO é exibido
    cy.contains('Dashboard').should('not.exist');

    // Valida que a tela de login está disponível
    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
  });
});
