import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../../../page_objects/HomePage';
import SubCategoryPage from '../../../../page_objects/SubCategoryPage';
import SubCategoryFullPage from '../../../../page_objects/SubCategoryFullPage';

const subCategoryPage = new SubCategoryPage();
const subCategoryFullPage = new SubCategoryFullPage();

Given(/^I open at All Categories list$/, () => {
    new HomePage().clickOnAllCategoriesMenu();
});

Given('I open {string} Category', (categoryName) => {
    new HomePage().clickOnCategory(categoryName);
});

Given('I open {string} sub-category Page', (subCategoryName) => {
    new HomePage().clickOnSubCategoryMenu(subCategoryName);
});

Given('I click on See all results link', (subCategoryName) => {
    subCategoryPage.clickSeeAllResultsLink();
});

Given('The total number of results should match the total displayed products', () => {
    subCategoryFullPage.getAllResultsTextBox().invoke('text')
        .then((resultsText) => {
            const values = [];
            subCategoryFullPage.getALastPageNumberButton()
                .invoke('text')
                .then(parseFloat)
                .then((pagesQuantity) => {
                    cy.wrap([...Array(pagesQuantity).keys()])
                        .each(() => {
                            subCategoryFullPage.getAllProductsList().its('length')
                                .then((itemsQuantityOnPage) => {
                                    values.push(itemsQuantityOnPage);
                                    subCategoryFullPage.clickOnNextButton();
                                });
                        });
                })
                .then(() => {
                    expect(eval(values.join('+'))).equals(parseInt(resultsText.toString().split(' ')[2]));
                });
        });

    Given('The number of products on the page should match the displayed number', (subCategoryName) => {
        subCategoryPage.getAllResultsTextBox().invoke('text')
            .then((text) => {
                subCategoryPage.getAllProductsList()
                    .should('have.length', parseInt(text.toString().split(' ')[0].replace('1-', '')));
            });
    });

    Given('The total number of results should match the total number of results at full sub-category page', (subCategoryName) => {
        subCategoryPage.getAllResultsTextBox().invoke('text')
            .then((textFromMainPage) => {
                subCategoryPage.clickSeeAllResultsLink().getAllResultsTextBox().invoke('text')
                    .then((textFromFullPage) => {
                        expect(textFromFullPage.toString().split(' ')[2])
                            .equals(textFromMainPage.toString().replace('over ', '').split(' ')[2]);
                    });
            });
    });
});
