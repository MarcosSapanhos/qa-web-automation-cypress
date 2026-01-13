describe('Login - Success', () => { // Agrupa os testes relacionados ao login com sucesso

  beforeEach(() => { // Executa este bloco antes de cada teste
    cy.fixture('users').as('users'); // Carrega o arquivo users.json e cria o alias "users"
  });

  it('Should login successfully with valid credentials', function () { // Cenário de login com credenciais válidas
    cy.login(
      this.users.validUser.username, // Username válido vindo do fixture
      this.users.validUser.password  // Password válido vindo do fixture
    ); // Executa o login usando o comando customizado que já funcionava

    cy.url({ timeout: 10000 }) // Aguarda até 10 segundos pela URL atual
      .should('include', '/dashboard'); // Valida redirecionamento para o dashboard

    cy.contains('Dashboard') // Procura o texto "Dashboard"
      .should('be.visible'); // Valida que o dashboard está visível
  });

});
