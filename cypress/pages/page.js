class Page {
    navigate(path = '') {
      cy.visit(path);
    }
  }
  
  module.exports = Page;