import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../page_objects/HomePage';
import LanguageCurrencyPage from '../page_objects/LanguageCurrencyPage';
import TodayDealsPage from '../page_objects/TodayDealsPage';
import SubCategoryPage from '../page_objects/SubCategoryPage';

const homePage = new HomePage();
const languageCurrenctPage = new LanguageCurrencyPage();
const todayDealsPage = new TodayDealsPage();
const subCategoryPage = new SubCategoryPage();

Given('I am at Language & Currency Setup Page', () => {
    homePage.clickOnLanguageCurrencyLink();
});

Given('I open currencies picker', () => {
    languageCurrenctPage.clickOnCurrencyButton();
});

Given('I choose {string}', (currencyName) => {
    languageCurrenctPage.chooseCurrency(currencyName);
});

Given('I click Save Changes Button', () => {
    languageCurrenctPage.clickOnSaveButton();
});

Given('Currency {string} should be displayed for the product price at Today Deals Page', (currencySymbol) => {
    todayDealsPage.getPricesList().first()
        .invoke('text')
        .then((text1) => {
            expect(text1).contain(currencySymbol);
        });
});

Given('Currency {string} should be displayed for the product price at sub-category page', (currencySymbol) => {
    subCategoryPage.getPriceSymbols().first()
        .invoke('text')
        .then((text1) => {
            expect(text1).contain(currencySymbol);
        });
});

Given('I am at Todays Deals Page', () => {
homePage.clickOnTodayDealsLink();
});
