class SubCategoryFullPage {

    getAllProductsList() {
        return cy.get('[data-component-type = s-search-result]');
    }

    getALastPageNumberButton() {
        return cy.get('[aria-disabled=true]');
    }

    getAllResultsTextBox() {
        return cy.get('.a-section').contains(' results');
    }

    clickOnNextButton() {
        cy.get('.a-last').click().wait(2000);
        return this;
    }
}

export default SubCategoryFullPage;
