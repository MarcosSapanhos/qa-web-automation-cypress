// Cria um COMMAND CUSTOMIZADO chamado "login"
// Ele poderá ser usado em qualquer teste como: cy.login(usuario, senha)
Cypress.Commands.add('login', (username, password) => {

  // Abre a página de login do OrangeHRM
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Procura o campo de username pelo atributo name
  // timeout garante que o Cypress espere o elemento aparecer
  cy.get('input[name="username"]', { timeout: 10000 })
    .should('be.visible') // Confirma que o campo está visível
    .type(username); // Digita o username recebido por parâmetro

  // Procura o campo de password
  cy.get('input[name="password"]', { timeout: 10000 })
    .should('be.visible') // Confirma que o campo está visível
    .type(password); // Digita a senha recebida por parâmetro

  // Procura o botão de login e clica
  cy.get('button[type="submit"]').click();
});
