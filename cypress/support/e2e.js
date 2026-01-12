// Este arquivo é executado ANTES de qualquer teste E2E
// Ele funciona como um "arquivo de inicialização" do Cypress

// Importa os commands customizados definidos em commands.js
// Sem essa linha, comandos como cy.login() NÃO funcionam
import './commands';

// Aqui você pode colocar configurações globais
// Exemplo: interceptações, hooks globais, plugins, etc.

// Exemplo (NÃO obrigatório):
// beforeEach(() => {
//   // código que deve rodar antes de todos os testes
// });

Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignora erros não tratados da aplicação (OrangeHRM Demo)
  if (err.message.includes('Cannot read properties of undefined')) {
    return false;
  }
});
