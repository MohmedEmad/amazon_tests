class TodayDealsPage {

  ALL_PRICES_LIST = '.dealPriceText';

  getPricesList() {
    return cy.get(this.ALL_PRICES_LIST);
  }
}

export default TodayDealsPage;
