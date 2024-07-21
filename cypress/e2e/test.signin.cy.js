const HomePage = require('../pages/homepage');
const SignInPage = require('../pages/signinpage');
const { faker } = require('@faker-js/faker');

describe('Sign in tests', () => {
  let randomPassword = faker.internet.password();
  let randomEmail = faker.internet.email();
  const userEmail = 'newemail@example.com';
  const userPassword = 'qwerty12'

  beforeEach(() => {
    const homePage = new HomePage();
    homePage.navigate('/');
    homePage.clickSignInLink();
  })

  it('test case D05N: should sign in with empty email field', () => {
    const signInPage = new SignInPage();

    signInPage.fillPassword(randomPassword);
    signInPage.clickSignInBtn();
    signInPage.errorMessageText();
  });

  it('test case D06N: should sign in invalid password', () => {
    const signInPage = new SignInPage();

    signInPage.fillEmail(userEmail);
    signInPage.fillPassword(randomPassword);
    signInPage.clickSignInBtn();
    signInPage.errorEmailOrPasswordText();
  });

  it('test case D07N: should sign in with empty password field', () => {
    const signInPage = new SignInPage();
    
    signInPage.fillEmail(randomEmail);
    signInPage.clickSignInBtn();
    signInPage.errorMessageText();
  });

  it('test case D08N: should sign in with invalid email', () => {
    const signInPage = new SignInPage();

    signInPage.fillEmail(randomEmail);
    signInPage.fillPassword(userPassword);
    signInPage.clickSignInBtn();
    signInPage.errorEmailOrPasswordText();
  });

  it('test case D09N: should sign in with valid credentials', () => {
    const signInPage = new SignInPage();
    const homePage = new HomePage();

    signInPage.fillEmail(userEmail);
    signInPage.fillPassword(userPassword);
    signInPage.clickSignInBtn();
    homePage.checkUrl();
  });
});