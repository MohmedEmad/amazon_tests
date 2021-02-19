import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../page_objects/HomePage';
import SubCategoryPage from '../page_objects/SubCategoryPage';
import SubCategoryFullPage from '../page_objects/SubCategoryFullPage';

const homePage = new HomePage();
const subCategoryPage = new SubCategoryPage();
const subCategoryFullPage = new SubCategoryFullPage();

Given('I open at All Categories list', () => {
    homePage.clickOnAllCategoriesMenu();
});

Given('I open {string} Category', (categoryName) => {
    homePage.clickOnCategory(categoryName);
});

Given('I open {string} sub-category Page', (subCategoryName) => {
    homePage.clickOnSubCategoryMenu(subCategoryName);
});

Given('I click on See all results link', (subCategoryName) => {
    subCategoryPage.clickSeeAllResultsLink();
});

Then('The total number of results should match the total displayed products', () => {
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

    Then('The number of products on the page should match the displayed number on Main page', (subCategoryName) => {
        subCategoryPage.getAllResultsTextBox().invoke('text')
            .then((text) => {
                subCategoryPage.getAllProductsList()
                    .should('have.length', parseInt(text.toString().split(' ')[0].replace('1-', '')));
            });
    });


    Then('The number of products on the page should match the displayed number on Full page', (subCategoryName) => {
        subCategoryFullPage.getAllResultsTextBox().invoke('text')
            .then((text) => {
                subCategoryFullPage.getAllProductsList()
                    .should('have.length', parseInt(text.toString().split(' ')[0].replace('1-', '')));
            });
    });

    Then('The total number of results should match the total number of results at full sub-category page', (subCategoryName) => {
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
