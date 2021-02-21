import HomePage from './HomePage';

class SignInPage {

  USERNAME_TEXT_FIELD = '#ap_email';
  CONTINUE_BUTTON = '#continue';
  PASSWORD_TEST_FIELD = '#ap_password';
  SUBMIT_BUTTON = '#signInSubmit';

  typeEmail(username) {
    cy.get(this.USERNAME_TEXT_FIELD).type(username);
    return this;
  }

  clickContinueButton() {
    cy.get(this.CONTINUE_BUTTON).click();
    return this;
  }

  typePassword(password) {
    cy.get(this.PASSWORD_TEST_FIELD).type(password);
    return this;
  }

  clickSubmitButton() {
    cy.get(this.SUBMIT_BUTTON).click();
    return new HomePage();
  }
}

export default SignInPage;
