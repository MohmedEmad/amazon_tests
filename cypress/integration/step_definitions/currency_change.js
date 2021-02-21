import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../page_objects/HomePage';
import LanguageCurrencyPage from '../page_objects/LanguageCurrencyPage';
import TodayDealsPage from '../page_objects/TodayDealsPage';
import SubCategoryPage from '../page_objects/SubCategoryPage';
import SubCategoryFullPage from '../page_objects/SubCategoryFullPage';
import GiftCardsPage from '../page_objects/GiftCardsPage';

const homePage = new HomePage();
const languageCurrenctPage = new LanguageCurrencyPage();
const todayDealsPage = new TodayDealsPage();
const subCategoryPage = new SubCategoryPage();
const subCategoryFullPage = new SubCategoryFullPage();
const giftCardsPage = new GiftCardsPage();

Given('I am at Language & Currency Setup Page', () => {
  homePage.clickOnLanguageCurrencyLink();
});

And('I open currencies picker', () => {
  languageCurrenctPage.clickOnCurrencyButton();
});

And('I choose {string}', (currencyName) => {
  languageCurrenctPage.chooseCurrency(currencyName);
});

And('I click Save Changes Button', () => {
  languageCurrenctPage.clickOnSaveButton();
});

Then('Currency {string} should be displayed for the product price at Today Deals Page',
  (currencySymbol) => {
    todayDealsPage.getPricesList().first()
      .invoke('text')
      .then((text1) => {
        expect(text1).contain(currencySymbol);
      });
  });

Then('Currency {string} should be displayed for the product price at {string} page',
  (currencySymbol, pageType) => {
    let page;
    switch (pageType) {
      case 'sub-category full':
        page = subCategoryFullPage;
        break;
      case 'sub-category main':
        page = subCategoryPage;
        break;
      case 'Gift Cards':
        page = giftCardsPage;
        break;
    }

    page.getPriceSymbols().first()
      .invoke('text')
      .then((text1) => {
        expect(text1).contain(currencySymbol);
      });
  });

Given('I am at Today Deals Page', () => {
  homePage.clickOnTodayDealsLink();
});

Then('Currency {string} should be displayed for the product price at Today Deals page',
  (currencySymbol) => {
    todayDealsPage.getPricesList().first().should('contain.text', currencySymbol);
  });
