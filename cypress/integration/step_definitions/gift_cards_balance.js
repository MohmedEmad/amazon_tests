import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import BasePage from '../page_objects/BasePage';
import HomePage from '../page_objects/HomePage';
import AccountListsPage from '../page_objects/AccountListsPage';
import GiftCardsPage from '../page_objects/GiftCardsPage';

const basePage = new BasePage();
const homePage = new HomePage();
const accountListsPage = new AccountListsPage();
const giftCardsPage = new GiftCardsPage();

Given('I am at Home Page', () => {
    basePage.openHomePage();
});

Given('I am logged in as {string} and {string}', (username, password) => {
    cy.login({username: username, password: password});
});

Given('I am at Account & Lists Page', () => {
    homePage.clickOnAccountAndLists();
});

When('I am at Gift Cards Page', () => {
    accountListsPage.clickOnGiftCardsCard();
});

Then('Gift Card balance is {string}', (balance) => {
    giftCardsPage.giftCardsBalanceTextBox().should('contain.text', balance);;
});
