import GiftCardsPage from './GiftCardsPage';

class AccountListsPage {

    clickOnGiftCardsCard() {
        cy.get('div[data-card-identifier=GiftCards]').click();
        return new GiftCardsPage();
    }
}

export default AccountListsPage;
