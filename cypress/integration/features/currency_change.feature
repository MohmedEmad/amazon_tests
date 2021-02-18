Feature: Currency Change

  Background: Amazon Main Page is opened
    Given I'm at Home Page
    Given I'm at Language & Currency Setup Page
    And I open currencies picker
    And I choose "AED - Arab Emirates Dirham"
    And I click Save Changes Button

  Scenario: Check the selected currency displayed for the products' price at sub-category page
    Given I open at All Categories list
    And I open "Smart Home" Category
    When I open "Home Entertainment" sub-category Page
    Then Currency "AED" should be displayed for the product price at sub-category page


  Scenario: Check the selected currency displayed for the products' price at Today's Deals Page
    When I am at Today's Deals Page
    Then Currency "AED" should be displayed for the product price at Today Deals Page