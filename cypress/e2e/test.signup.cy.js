const HomePage = require('../pages/homepage');
const SignUpPage = require('../pages/signuppage');
const { faker, fa } = require('@faker-js/faker');

const randomUsername = faker.person.firstName();
const randomPassword = faker.internet.password();
const randomEmail = faker.internet.email();


describe('Sign up tests', () => {
    beforeEach(() => {
        const homePage = new HomePage();
        homePage.navigate('/');
        homePage.clickSignUpLink();
    })

    it('test case D01N: Should sign up with empty username field', () => {
        const signUpPage = new SignUpPage;

        signUpPage.fillEmail(randomEmail);
        signUpPage.fillPassword(randomPassword);
        signUpPage.clickSignUpBtn();
        signUpPage.errorMessageText().should('be.visible');
    })

    it('test case D02N: Should sign up with empty password field', () => {
        const signUpPage = new SignUpPage;

        signUpPage.fillEmail(randomEmail);
        signUpPage.fillUsername(randomUsername);
        signUpPage.clickSignUpBtn();
        signUpPage.errorMessageText().should('be.visible');
    })

    it('test case D03N: Should sign up with empty password field', () => {
        const signUpPage = new SignUpPage;

        signUpPage.fillUsername(randomUsername);
        signUpPage.fillPassword(randomPassword);
        signUpPage.clickSignUpBtn();
        signUpPage.errorMessageText().should('be.visible');
    })

    it('test case D04P: Should sign up with valid credentials', () => {
        const signUpPage = new SignUpPage;
        const homePage = new HomePage;

        signUpPage.fillUsername(randomUsername);
        signUpPage.fillPassword(randomPassword);
        signUpPage.fillEmail(randomEmail);
        signUpPage.clickSignUpBtn();
        homePage.checkUrl();
    })
})