const Page = require('./page');

const emailFieldSelector = '[placeholder="Email"]';
const passwordFieldSelector = '[type="password"]';
const signInBtnSelector = '[type="submit"]';
const errorMessageSelector = '[ng-repeat="error in errors"]';

class SignInPage extends Page {

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

  clickSignInBtn() {
    cy.get(signInBtnSelector).click().wait(2000);
  }

  checkErrorMessageText() {
    return cy.get(errorMessageSelector).should('be.visible');
  }

  checkErrorEmailOrPasswordText() {
    return cy.get(errorMessageSelector).should('be.visible');
  }
}

module.exports = SignInPage;