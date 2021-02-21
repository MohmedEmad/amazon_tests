@CurrencyChange
Feature: Currency Symbol Change

  Background: I am at Amazon main page with changed currency
    Given I am at Home page
    And I am at Language & Currency Setup page
    And I open currencies picker
    And I choose "AED - Arab Emirates Dirham"
    And I click Save Changes Button

  Scenario: Selected currency is displayed near products price at sub-category main page
    Given I open All Categories list
    And I open "Smart Home" category
    When I open "Home Entertainment" sub-category main page
    Then Currency "AED" should be displayed near product price at "sub-category main" page

  Scenario: Selected currency is displayed near products price at sub-category full page
    Given I open All Categories list
    And I open "Smart Home" category
    And I open "Home Entertainment" sub-category main page
    When I click on See all results link
    Then Currency "AED" should be displayed near product price at "sub-category full" page

  Scenario: Selected currency is displayed for the products price at Gift Cards page
    When I am at Gift Cards page
    Then Currency "AED" should be displayed near product price at "Gift Cards" page

  Scenario: Selected currency is displayed near products price at Today Deals page
    When I am at Today Deals page
    Then Currency "AED" should be displayed near products price at Today Deals page

