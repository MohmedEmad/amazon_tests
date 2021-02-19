import GiftCardsPage from './GiftCardsPage';

class AccountListsPage {

    GIFT_CARDS_CARD = 'div[data-card-identifier=GiftCards]'

    clickOnGiftCardsCard() {
        cy.get(GIFT_CARDS_CARD).click();
        return new GiftCardsPage();
    }
}

export default AccountListsPage;
