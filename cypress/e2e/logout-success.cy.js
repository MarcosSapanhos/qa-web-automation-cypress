import DashboardPage from '../pages/DashboardPage';

describe('Logout - OrangeHRM', () => {

  beforeEach(() => {
    cy.fixture('users').as('users');
  });

  it('Deve realizar logout com sucesso', function () {

    // Login via custom command (padrão do projeto)
    cy.login(
      this.users.validUser.username,
      this.users.validUser.password
    );

    // Garante que o usuário está logado
    cy.url().should('include', '/dashboard');

    // Executa o logout
    DashboardPage.openUserMenu();
    DashboardPage.clickLogout();

    // Valida retorno para tela de login
    cy.url().should('include', '/auth/login');
  });

});
