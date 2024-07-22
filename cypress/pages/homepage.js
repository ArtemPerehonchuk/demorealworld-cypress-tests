const Page = require('./page');

const signUpLinkSelector = ('[href="#/register"]');
const signInLinkSelector = ('[href="#/login"]');
const welcomeTitleSelector = ('/html/body/div/div/div/div[1]/div/h1');
const welcomeMessageSelector = ('.container > p');
const eosTagSelector = ('.sidebar > .tag-list > :nth-child(1)');
const paginatorSelector = ('.pagination');
const selectedTagSelector = ('[ng-show="$ctrl.listConfig.filters.tag"] > .nav-link');
const secontPageSelector = (':nth-child(2) > .page-link');
const eosTagInArticleSelector = (':nth-child(10) > .article-preview > .preview-link > .tag-list > :nth-child(3)');

class HomePage extends Page {

    clickSignUpLink() {
        cy.get(signUpLinkSelector).should('be.visible').click()
    }

    clickSignInLink() {
        cy.get(signInLinkSelector).should('exist').click()
    }

    checkUrl() {
        cy.url()
            .then(url => {
                const expectedUrl = Cypress.config('baseUrl');
                if (url !== expectedUrl) {
                    cy.log(`URL does not match. Expected: ${expectedUrl}, but got: ${url}`);
        }
    });
    }

    checkLoginUrl() {
        cy.url().should('eq', `${Cypress.config('baseUrl')}login`);
    }

    checkWelcomeText() {
        cy.get(welcomeTitleSelector)
        .should('be.visible')
        .and('have.text', 'conduit');

        cy.get(welcomeMessageSelector)
        .should('be.visible')
        .and('have.text', 'A place to share your knowledge.');    
    }

    selectEosTag() {
        cy.get(eosTagSelector)
        .should('be.visible')
        .click();
    }

    checkSelectedTag() {
        cy.get(selectedTagSelector).should('contain.text', 'eos');
    }

    scrollToPaginator() {
        cy.get(paginatorSelector)
        .scrollIntoView();

        cy.get(paginatorSelector)
        .should('be.visible');
    }

    clickSecondPage() {
        cy.get(secontPageSelector)
        .should('be.visible')
        .click();
    }

    checkTagInArticle() {
        cy.get(eosTagInArticleSelector)
        .should('be.visible')
        .and('contain.text', 'eos' );
    }
}

module.exports = HomePage;