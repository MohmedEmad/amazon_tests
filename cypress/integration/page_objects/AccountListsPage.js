class AccountListsPage {

  GIFT_CARDS_CARD = 'div[data-card-identifier=GiftCards]';
  CARDS_BALANCE_TEXT = '#gc-ui-balance-gc-balance-value';

  clickOnGiftCardsCard() {
    cy.get(this.GIFT_CARDS_CARD).click();
    return this;
  }

  giftCardsBalanceTextBox() {
    return cy.get(this.CARDS_BALANCE_TEXT);
  }

}

export default AccountListsPage;
