describe('Login - Invalid Credentials', () => { // Agrupa os testes relacionados ao login com credenciais inválidas

  beforeEach(() => { // Executa este bloco antes de cada teste (it)
    cy.fixture('users').as('users'); // Carrega o arquivo users.json e cria um alias chamado "users"
  });

  it('Should show error message with invalid credentials', function () { // Define o cenário de teste para login com credenciais inválidas
    cy.login(
      this.users.invalidUser.username, // Obtém o username inválido do arquivo users.json
      this.users.invalidUser.password  // Obtém a senha inválida do arquivo users.json
    ); // Executa o comando customizado de login

    cy.contains('Invalid credentials', { timeout: 10000 }) // Procura a mensagem de erro "Invalid credentials", aguardando até 10 segundos
      .should('be.visible'); // Valida que a mensagem de erro está visível para o usuário
  });

}); // Finaliza o bloco de testes do describe
