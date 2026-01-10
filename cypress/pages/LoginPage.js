class LoginPage { // Define a classe LoginPage responsável por centralizar os elementos e ações da tela de login

  visit() { // Método responsável por acessar a página de login
    cy.visit('/auth/login'); // Navega para a rota de login da aplicação OrangeHRM
  }

  fillUsername(username) { // Método responsável por preencher o campo de usuário
    cy.get('input[name="username"]') // Localiza o campo de username pelo atributo "name"
      .clear() // Limpa qualquer valor que já esteja no campo
      .type(username); // Digita o username informado como parâmetro
  }

  fillPassword(password) { // Método responsável por preencher o campo de senha
    cy.get('input[name="password"]') // Localiza o campo de senha pelo atributo "name"
      .clear() // Limpa qualquer valor que já esteja no campo
      .type(password); // Digita a senha informada como parâmetro
  }

  submit() { // Método responsável por submeter o formulário de login
    cy.get('button[type="submit"]') // Localiza o botão de login pelo atributo "type"
      .click(); // Clica no botão para realizar o login
  }

}

export default LoginPage; // Exporta a classe LoginPage para ser utilizada nos testes
