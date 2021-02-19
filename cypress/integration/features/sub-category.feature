Feature: Results Number Displaying

  Background: Amazon Main Page is opened
    Given I'm at Home Page

  Scenario: Check the total displayed number of results for category Smart Home | Home Entertainment
    Given I open at All Categories list
    And I open "Smart Home" Category
    When I open "Home Entertainment" sub-category Page
    And I click on See all results link
    Then The total number of results should match the total displayed products

  Scenario: Check the total displayed number of results on main sub-category page
    Given I open at All Categories list
    And I open "Smart Home" Category
    When I open "Home Entertainment" sub-category Page
    Then The number of products on the page should match the displayed number on Main page

  Scenario: Check the total displayed number of results on main sub-category page
    Given I open at All Categories list
    And I open "Smart Home" Category
    When I open "Home Entertainment" sub-category Page
    And I click on See all results link
    Then The number of products on the page should match the displayed number on Full page

  Scenario: Check the total displayed number of results on main sub-category page and full sub-category page
    Given I open at All Categories list
    And I open "Smart Home" Category
    When I open "Home Entertainment" sub-category Page
    Then The total number of results should match the total number of results at full sub-category page

