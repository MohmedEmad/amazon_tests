import AccountListsPage from './AccountListsPage';
import SignInPage from './SignInPage';
import SubCategoryMainPage from './SubCategoryMainPage';
import LanguageCurrencyPage from './LanguageCurrencyPage';
import GiftCardsPage from './GiftCardsPage';
import TodayDealsPage from './TodayDealsPage';

export default class HomePage {

  ACCOUNT_AND_LISTS = '#nav-link-accountList-nav-line-1';
  SIGN_IN_BUTTON = '#nav-signin-tooltip';
  ALL_CATEGORIES_MENU = '#nav-hamburger-menu';
  CATEGORIES_LIST = '.hmenu-visible >> .hmenu-item > div';
  SUB_CATEGORIES_LIST = '.hmenu-item';
  LANGUAGE_AND_CURRENCY_LINK = '.icp-nav-flag';
  TOP_MENU_LINKS = 'a[data-csa-c-type = link]';

  clickOnAccountAndLists() {
    cy.get(this.ACCOUNT_AND_LISTS).click();
    return new AccountListsPage();
  }

  clickOnAllCategoriesMenu() {
    cy.get(this.ALL_CATEGORIES_MENU).click();
    return this;
  }

  clickOnLanguageCurrencyLink() {
    cy.get(this.LANGUAGE_AND_CURRENCY_LINK).click();
    return new LanguageCurrencyPage();
  }

  clickOnTodayDealsLink() {
    cy.get(this.TOP_MENU_LINKS).contains('Today\'s Deals').click({force: true});
    return new TodayDealsPage();
  }

  clickOnGiftCardsLink() {
    cy.get(this.TOP_MENU_LINKS).contains('Gift Cards').click({force: true});
    return new GiftCardsPage();
  }

  clickOnCategory(categoryName) {
    cy.get(this.CATEGORIES_LIST).contains(categoryName).wait(1000)
      .click({scrollBehavior: true});
    return this;
  }

  clickOnSubCategoryMenu(subCategoryName) {
    cy.get(this.SUB_CATEGORIES_LIST).contains(subCategoryName).wait(1000)
      .click({scrollBehavior: true});
    return new SubCategoryMainPage();
  }

  clickOnSignInButton() {
    cy.get(this.SIGN_IN_BUTTON).click();
    return new SignInPage();
  }
}
