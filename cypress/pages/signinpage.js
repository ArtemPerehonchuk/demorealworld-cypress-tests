const Page = require('../../../redmine-playwright-tests/pages/page');

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

  errorMessageText() {
    return cy.get(errorMessageSelector).should('be.visible').and('contain.text', "can't be blank");
  }

  errorEmailOrPasswordText() {
    return cy.get(errorMessageSelector).should('be.visible').and('contain', "email or password is invalid");
  }
}

module.exports = SignInPage;