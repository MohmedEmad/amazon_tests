import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../../../page_objects/HomePage';
import LanguageCurrencyPage from '../../../../page_objects/LanguageCurrencyPage';
import TodayDealsPage from '../../../../page_objects/TodayDealsPage';
import SubCategoryPage from '../../../../page_objects/SubCategoryPage';

Given(/^I'm at Language & Currency Setup Page$/, () => {
    new HomePage().clickOnLanguageCurrencyLink();
});

Given(/^I open currencies picker$/, () => {
    new LanguageCurrencyPage().clickOnCurrencyButton();
});

Given('I choose {string}', (currencyName) => {
    new LanguageCurrencyPage().chooseCurrency(currencyName);
});

Given(/^I click Save Changes Button$/, () => {
    new LanguageCurrencyPage().clickOnSaveButton();
});

Given('Currency {string} should be displayed for the product price at Today Deals Page', (currencySymbol) => {
    new TodayDealsPage().getPricesList().first()
        .invoke('text')
        .then((text1) => {
            expect(text1).contain(currencySymbol);
        });
});

Given('Currency {string} should be displayed for the product price at sub-category page', (currencySymbol) => {
    new SubCategoryPage().getPriceSymbols().first()
        .invoke('text')
        .then((text1) => {
            expect(text1).contain(currencySymbol);
        });
});

Given(/^I am at Today's Deals Page$/, () => {
    new HomePage().clickOnTodayDealsLink();
});
