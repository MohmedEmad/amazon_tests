import AccountsAndListsPage from './AccountListsPage';

class SignInPage {

    typeEmail(username) {
        cy.get('#ap_email').type(username);
        return this;
    }

    clickContinueButton() {
        cy.get('#continue').click();
        return this;
    }

    typePassword(password) {
        cy.get('#ap_password').type(password);
        return this;
    }

    clickSubmitButton() {
        cy.get('#signInSubmit').click();
        return new AccountsAndListsPage();
    }
}

export default SignInPage;
