import AccountsAndListsPage from './AccountListsPage';
import SignInPage from './SignInPage';
import SubCategoryPage from './SubCategoryPage';
import LanguageCurrencyPage from './LanguageCurrencyPage';

export default class HomePage {

  ACCOUNT_AND_LISTS = '#nav-link-accountList-nav-line-1';
  SIGN_IN_BUTTON = '#nav-signin-tooltip';
  allCategoriesMenu = '#nav-hamburger-menu';
  CATEGORIES_LIST = '.hmenu-visible >> .hmenu-item > div';
  SUB_CATEGORIES_LIST = '.hmenu-item';
  LANGUAGE_AND_CURRENCY_LINK = '.icp-nav-flag';
  TOP_MENU_LINKS = 'a[data-csa-c-type = link]';

  clickOnAccountAndLists() {
    cy.get(ACCOUNT_AND_LISTS).click();
    return new AccountsAndListsPage();
  }

  clickOnAllCategoriesMenu() {
    cy.get(allCategoriesMenu).click();
    return this;
  }

  clickOnLanguageCurrencyLink() {
    cy.get(LANGUAGE_AND_CURRENCY_LINK).click();
    return new LanguageCurrencyPage();
  }

  clickOnTodayDealsLink() {
    cy.get(TOP_MENU_LINKS).contains('Today\'s Deals').click();
    return new LanguageCurrencyPage();
  }

  clickOnCategory(categoryName) {
    cy.get(CATEGORIES_LIST).contains(categoryName).wait(1000)
        .click({scrollBehavior: true});
    return this;
  }

  clickOnSubCategoryMenu(subCategoryName) {
    cy.get(SUB_CATEGORIES_LIST).contains(subCategoryName).wait(1000)
        .click({scrollBehavior: true});
    return new SubCategoryPage();
  }

  clickOnSignInButton() {
    cy.get(SIGN_IN_BUTTON).click();
    return new SignInPage();
  }
}
