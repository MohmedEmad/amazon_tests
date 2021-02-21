import SubCategoryFullPage from './SubCategoryFullPage';

class SubCategoryMainPage {

  ALL_PRODUCTS_LIST = '.a-column.a-span4';
  ALL_PRODUCTS_PRICE_CURRENCY_LIST = '.a-price-symbol';

  getAllResultsTextBox() {
    return cy.get('.a-box-inner > .a-color-base');
  }

  clickSeeAllResultsLink() {
    cy.get('.a-box-inner > a > span').contains('See all results')
      .click({scrollBehavior: false, force: true}).wait(2000);
    return new SubCategoryFullPage();
  }

  getAllProductsList() {
    return cy.get(this.ALL_PRODUCTS_LIST);
  }

  getPriceSymbols() {
    return cy.get(this.ALL_PRODUCTS_PRICE_CURRENCY_LIST);
  }
}

export default SubCategoryMainPage;
