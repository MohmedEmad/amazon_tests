import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import SubCategoryMainPage from '../page_objects/SubCategoryMainPage';
import SubCategoryFullPage from '../page_objects/SubCategoryFullPage';

const subCategoryPage = new SubCategoryMainPage();
const subCategoryFullPage = new SubCategoryFullPage();

And('I click on See all results link', (subCategoryName) => {
  subCategoryPage.clickSeeAllResultsLink();
});

Then('Displayed products number at all sub-category full pages should match the total results counter at first sub-category full page', () => {
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

  Then('Displayed products number at {string} page should match the page results counter', (pageName) => {

    let page;
    if (pageName === 'sub-category main') {
      page = subCategoryPage;
    } else if (pageName === 'sub-category full') page = subCategoryFullPage;

    page.getAllResultsTextBox().invoke('text')
      .then((text) => {
        page.getAllProductsList()
          .should('have.length', parseInt(text.toString().split(' ')[0].replace('1-', '')));
      });
  });

  Then('Total results counter on sub-category main page should match total results counter at first sub-category full page', (subCategoryName) => {
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
