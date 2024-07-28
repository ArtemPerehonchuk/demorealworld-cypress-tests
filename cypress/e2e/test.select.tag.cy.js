const HomePage = require('../pages/homepage');

describe('Demo.realworld.io test', () => {
    it('test case D10P: Should select a tag', () => {
        const homePage = new HomePage();

        homePage.navigate('/');
        homePage.selectEosTag();
        homePage.checkSelectedTagContainsTextEos();
        homePage.scrollToPaginator();
        homePage.clickSecondPage();
        homePage.checkTagInArticleContainsTextEos();
    })
})