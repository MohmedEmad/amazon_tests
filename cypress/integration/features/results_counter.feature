@ResultsCounter
Feature: Results Number Displaying

  Background: I am at category page
    Given I am at Home page
    And I open All Categories list
    And I open "Smart Home" category

  Scenario: Displayed products number at all sub-category full pages should match the total results counter at first sub-category full page
    Given I open "Home Entertainment" sub-category main page
    When I click on See all results link
    Then Displayed products number at all sub-category full pages should match the total results counter at first sub-category full page

  Scenario: Displayed products number at sub-category main page should match the page results counter
    When I open "Home Entertainment" sub-category main page
    Then Displayed products number at "sub-category main" page should match the page results counter

  Scenario: Displayed products number at sub-category full page should math the page results counter
    Given I open "Home Entertainment" sub-category main page
    When I click on See all results link
    Then Displayed products number at "sub-category full" page should match the page results counter

  Scenario: Total results counter on sub-category main page should match total results counter at first sub-category full page
    When I open "Home Entertainment" sub-category main page
    Then Total results counter on sub-category main page should match total results counter at first sub-category full page

