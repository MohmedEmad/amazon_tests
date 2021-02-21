import {Given, When} from 'cypress-cucumber-preprocessor/steps';
import BasePage from '../page_objects/BasePage';
import HomePage from '../page_objects/HomePage';

const basePage = new BasePage();
const homePage = new HomePage();

Given('I am at Home page', () => {
  basePage.openHomePage();
});

Given('I am logged in as {string} and {string}', (username, password) => {
  cy.login({username: username, password: password});
});

Given('I open All Categories list', () => {
  homePage.clickOnAllCategoriesMenu();
});

And('I open {string} category', (categoryName) => {
  homePage.clickOnCategory(categoryName);
});

And('I open {string} sub-category main page', (subCategoryName) => {
  homePage.clickOnSubCategoryMenu(subCategoryName);
});

And('I am at Gift Cards page', () => {
  homePage.clickOnGiftCardsLink();
});
