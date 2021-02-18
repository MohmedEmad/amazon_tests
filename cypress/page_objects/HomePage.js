// Locators' section (we can use aliases here also)
import AccountsAndListsPage from './AccountListsPage';
import SignInPage from './SignInPage';
import SubCategoryPage from './SubCategoryPage';
import LanguageCurrencyPage from './LanguageCurrencyPage';

const ACCOUNT_AND_LISTS = '#nav-link-accountList-nav-line-1';
const SING_IN_BUTTON = '#nav-signin-tooltip';
const ALL_CATEGORIES_MENU = '#nav-hamburger-menu';
const CATEGORIES_LIST = '.hmenu-visible >> .hmenu-item > div';
const SUB_CATEGORIES_LIST = '.hmenu-item';
const LANGUAGE_AND_CURRENCY_LINK = '.icp-nav-flag';
const TOP_MENU_LINKS = 'a[data-csa-c-type = link]';

class HomePage {
  clickOnAccountAndLists() {
    cy.get(ACCOUNT_AND_LISTS).click();
    return new AccountsAndListsPage();
  }


  clickOnAllCategoriesMenu() {
    cy.get(ALL_CATEGORIES_MENU).click();
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
    //   cy.get(CATEGORIES_LIST).contains(categoryName).click();

    //  cy.get('').contains(categoryName).click( {scrollBehavior: true });
    // cy.scrollTo('top')
    cy.get(CATEGORIES_LIST).contains(categoryName).wait(1000)
        .click({scrollBehavior: true});
    return this;
  }

  clickOnSubCategoryMenu(subCategoryName) {
    //  cy.get(SUB_CATEGORIES_LIST).contains(subCategoryName).wait(150).click({ force: true });
    //   cy.get('.hmenu-visible > :nth-child(9) > .hmenu-item').click();
    cy.get(SUB_CATEGORIES_LIST).contains(subCategoryName).wait(1000)
        .click({scrollBehavior: true});
    return new SubCategoryPage();
  }

  clickOnSignInButton() {
    cy.get(SING_IN_BUTTON).click();
    return new SignInPage();
  }
}

export default HomePage;
