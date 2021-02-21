import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../page_objects/HomePage';
import AccountListsPage from '../page_objects/AccountListsPage';
import GiftCardsPage from '../page_objects/GiftCardsPage';

const homePage = new HomePage();
const accountListsPage = new AccountListsPage();
const giftCardsPage = new GiftCardsPage();

Given('I am at Account & Lists page', () => {
  homePage.clickOnAccountAndLists();
});

And('I am at Gift Cards section', () => {
  accountListsPage.clickOnGiftCardsCard();
});

Then('Gift Card balance at Gift Cards section is {string}', (balance) => {
  accountListsPage.giftCardsBalanceTextBox().should('contain.text', balance);
});

Then('Gift Card balance at Gift Cards page is {string}', (balance) => {
  giftCardsPage.giftCardsBalanceTextBox().should('contain.text', balance);
});

Then('Gift Card balance at Gift Cards page is not shown', () => {
  giftCardsPage.giftCardsBalanceTextBox().should('not.exist');
});
