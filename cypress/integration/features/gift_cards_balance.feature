@GiftCards
Feature: Gift Cards Balance

  Background: I am logged in on Amazon Home page
    Given I am at Home Page
    And I am logged in as "andre11241986@gmail.com" and "Ama12345!!!"

  Scenario: Check your gift card's balance is $0.00
    When I am at Account & Lists Page
    And I am at Gift Cards section
    Then Gift Card balance at Gift Cards section is "USD 0.00"

  Scenario: Check your gift card's balance is $0.00
    When I am at Account & Lists Page
    And I am at Gift Cards Page
    Then Gift Card balance at Gift Page is "USD 0.00"
