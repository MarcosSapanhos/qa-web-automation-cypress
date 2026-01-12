class DashboardPage {

  openUserMenu() {
    cy.get('.oxd-userdropdown-tab').click();
  }

  clickLogout() {
    cy.contains('Logout').click();
  }

}

export default new DashboardPage();
