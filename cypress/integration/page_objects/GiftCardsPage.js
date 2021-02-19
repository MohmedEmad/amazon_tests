class GiftCardsPage {

    CARDS_BALANCE_TEXT = '#gc-ui-balance-gc-balance-value'

    giftCardsBalanceTextBox() {
        return cy.get(CARDS_BALANCE_TEXT);
    }
}

export default GiftCardsPage;
