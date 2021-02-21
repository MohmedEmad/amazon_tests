class GiftCardsPage {

    CARDS_BALANCE_TEXT = '#asv-gclp-balance-widget-desktop > ul > li > span > a > span'
    All_GIFT_CARDS_PRICE_CURRENCY = '.a-price-symbol'


    giftCardsBalanceTextBox() {
        return cy.get(this.CARDS_BALANCE_TEXT);
    }

    getPriceSymbols() {
        return cy.get(this.All_GIFT_CARDS_PRICE_CURRENCY);
    }
}

export default GiftCardsPage;
