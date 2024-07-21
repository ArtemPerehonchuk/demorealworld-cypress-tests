const Page = require('./page');

const usernameFieldSelector = '[placeholder="Username"]';
const emailFieldSelector = '[type="email"]';
const passwordFieldSelector = '[type="password"]';
const signUpBtnSelector = '[type="submit"]';
const errorMessageSelector = '[ng-repeat="error in errors"]';

class SignUpPage extends Page {
  fillUsername(username) {
    cy.get(usernameFieldSelector)
      .type(username)
      .should('have.value', username);
  }

  fillPassword(password) {
    cy.get(passwordFieldSelector)
      .type(password)
      .should('have.value', password);
  }

  fillEmail(email) {
    cy.get(emailFieldSelector)
      .type(email)
      .should('have.value', email);
  }

  clickSignUpBtn() {
    cy.get(signUpBtnSelector).click();
  }

  signUp(username, email, password) {
    this.fillUsername(username);
    this.fillEmail(email);
    this.fillPassword(password);
    this.clickSignUpBtn();
  }

  errorMessageText() {
    return cy.get(errorMessageSelector).should('be.visible').and('contain.text', "can't be blank");
  }
}

module.exports = SignUpPage;