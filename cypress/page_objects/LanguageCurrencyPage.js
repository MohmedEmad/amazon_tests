import HomePage from './HomePage';

class LanguageCurrencyPage {

  clickOnCurrencyButton() {
    cy.get('[data-action = a-dropdown-button]').click();
    return this;
  }

  chooseCurrency(currencyName) {
    cy.get('.a-dropdown-item').contains(currencyName).click();
    return this;
  }

  clickOnSaveButton() {
    cy.get('.a-button-input').click({force: true, scrollBehavior: false});
    return new HomePage();
  }
}

export default LanguageCurrencyPage;
