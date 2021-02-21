class SubCategoryFullPage {

    ALL_PRODUCTS_LIST = '[data-component-type = s-search-result]'
    LAST_PAGE_NUMBER_BUTTON = '[aria-disabled=true]'
    NEXT_BUTTON = '.a-last'
    ALL_PRODUCTS_PRICE_CURRENCY = '.a-price-symbol'

    getAllProductsList() {
        return cy.get(this.ALL_PRODUCTS_LIST);
    }

    getALastPageNumberButton() {
        return cy.get(this.LAST_PAGE_NUMBER_BUTTON);
    }

    getAllResultsTextBox() {
        return cy.get('.a-section').contains(' results');
    }

    clickOnNextButton() {
        cy.get(this.NEXT_BUTTON).click().wait(2000);
        return this;
    }

    getPriceSymbols() {
        return cy.get(this.ALL_PRODUCTS_PRICE_CURRENCY);
    }
}

export default SubCategoryFullPage;
