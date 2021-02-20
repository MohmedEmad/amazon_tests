import HomePage from './HomePage';

class LanguageCurrencyPage {

  CURRENCY_BUTTON = '[data-action = a-dropdown-button]'
  CURRENCY_DROP_DOWN_LIST = '.a-dropdown-item'
  SAVE_BUTTON = '.a-button-input'

  clickOnCurrencyButton() {
    cy.get(this.CURRENCY_BUTTON).click();
    return this;
  }

  chooseCurrency(currencyName) {
    cy.get(this.CURRENCY_DROP_DOWN_LIST).contains(currencyName).click();
    return this;
  }

  clickOnSaveButton() {
    cy.get(this.SAVE_BUTTON).click({force: true, scrollBehavior: false});
    return new HomePage();
  }
}

export default LanguageCurrencyPage;
