@GiftCards
Feature: Gift Cards

  Background: Amazon Main Page is opened
    Given I am at Home Page

  Scenario: Check your gift card's balance is $0.00
    Given I am logged in as "andre11241986@gmail.com" and "Ama12345!!!"
    And I am at Account & Lists Page
    When I am at Gift Cards Page
    Then Gift Card balance is "USD 0.00"
