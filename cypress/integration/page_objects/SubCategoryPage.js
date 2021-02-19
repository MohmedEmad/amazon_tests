import SubCategoryFullPage from './SubCategoryFullPage';

class SubCategoryPage {

    getAllResultsTextBox() {
        return cy.get('.a-box-inner > .a-color-base');
    }

    clickSeeAllResultsLink() {
        cy.get('.a-box-inner > a > span').contains('See all results')
            .click({scrollBehavior: false, force: true});
        return new SubCategoryFullPage();
    }

    getAllProductsList() {
        return cy.get('.a-column.a-span4');
    }

    getPriceSymbols() {
        return cy.get('.a-price-symbol');
    }
}

export default SubCategoryPage;
