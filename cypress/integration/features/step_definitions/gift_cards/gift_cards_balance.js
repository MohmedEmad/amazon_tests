import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import BasePage from '../../../../page_objects/BasePage';
import HomePage from '../../../../page_objects/HomePage';
import AccountListsPage from '../../../../page_objects/AccountListsPage';
import GiftCardsPage from '../../../../page_objects/GiftCardsPage';

Given(/^I'm at Home Page$/, () => {
    new BasePage().openHomePage();
});

Given('I am logged in as {string} and {string}', (username, password) => {
    cy.login({username: username, password: password});
});

Given(/^I'm at Account & Lists Page$/, () => {
    new HomePage().clickOnAccountAndLists();
});

When(/^I'm at Gift Cards Page$/, () => {
    new AccountListsPage().clickOnGiftCardsCard();
});

Then('Gift Card balance is {string}', (balance) => {
    new GiftCardsPage().giftCardsBalanceTextBox().should('contain.text', balance);;
});
