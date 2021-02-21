@CurrencyChange
Feature: Currency Symbol Change

  Background: Amazon Main Page is opened
    Given I am at Home Page
    Given I am at Language & Currency Setup Page
    And I open currencies picker
    And I choose "AED - Arab Emirates Dirham"
    And I click Save Changes Button

  Scenario: Check the selected currency displayed for the products' price at sub-category page
    Given I open at All Categories list
    And I open "Smart Home" Category
    When I open "Home Entertainment" sub-category Page
    Then Currency "AED" should be displayed for the product price at "sub-category main" page

  Scenario: Check the selected currency displayed for the products' price at sub-category full page
    Given I open at All Categories list
    And I open "Smart Home" Category
    And I open "Home Entertainment" sub-category Page
    When I click on See all results link
    Then Currency "AED" should be displayed for the product price at "sub-category full" page

  Scenario: Check the selected currency displayed for the products' price at Today Deals Page
    When I am at Gift Cards Page
    Then Currency "AED" should be displayed for the product price at "Gift Cards" page

  Scenario: Check the selected currency displayed for the products' price at Today Deals Page
    When I am at Today Deals Page
    Then Currency "AED" should be displayed for the product price at Today Deals page

