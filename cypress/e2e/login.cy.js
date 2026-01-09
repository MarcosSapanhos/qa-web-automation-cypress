describe('Login - OrangeHRM', () => {

  beforeEach(() => {
    cy.fixture('users').as('users');
  });

  it('Login successfully with valid credentials', function () {
    cy.login(this.users.validUser.username, this.users.validUser.password);

    cy.url({ timeout: 10000 }).should('include', '/dashboard');
    cy.contains('Dashboard').should('be.visible');
  });

  it('Show error message with invalid credentials', function () {
    cy.login(this.users.invalidUser.username, this.users.invalidUser.password);

    cy.contains('Invalid credentials', { timeout: 10000 })
      .should('be.visible');
  });

});
