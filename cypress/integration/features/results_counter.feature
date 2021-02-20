@ResultsCounter
Feature: Results Number Displaying

  Background: I am on sub-category page
    Given I am at Home Page
    And I open at All Categories list
    And I open "Smart Home" Category
    When I open "Home Entertainment" sub-category Page

  Scenario: Check the total displayed number of results for category Smart Home | Home Entertainment
    And I click on See all results link
    Then The total number of results should match the total displayed products

  Scenario: Check the total displayed number of results on main sub-category page
    Then The number of products on the page should match the displayed number on Main page

  Scenario: Check the total displayed number of results on full sub-category page
    When I click on See all results link
    Then The number of products on the page should match the displayed number on Full page

  Scenario: Check the total displayed number of results on main sub-category page and full sub-category page
    Then The total number of results should match the total number of results at full sub-category page

