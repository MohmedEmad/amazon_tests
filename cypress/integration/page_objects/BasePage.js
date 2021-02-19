import HomePage from './HomePage';

class BasePage {

    openHomePage() {
        cy.visit('/');
        return new HomePage();
    }
}

export default BasePage;
