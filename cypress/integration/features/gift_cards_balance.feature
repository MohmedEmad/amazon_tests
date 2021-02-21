@GiftCards
Feature: Initial Gift Cards Balance

  Background: I am at Amazon Home page
    Given I am at Home page

  Scenario: Your initial gift card's balance is $0.00 at Gift Cards section
    Given I am logged in as "andre11241986@gmail.com" and "Ama12345!!!!"
    When I am at Account & Lists page
    And I am at Gift Cards section
    Then Gift Card balance at Gift Cards section is "USD 0.00"

  Scenario: Your initial gift card's balance is $0.00 at Gift Cards page
    Given I am logged in as "andre11241986@gmail.com" and "Ama12345!!!!"
    When I am at Gift Cards page
    Then Gift Card balance at Gift Cards page is "USD 0.00"

  Scenario: Your initial gift card's balance is not shown at Gift Cards page if you are not logged in
    When I am at Gift Cards page
    Then Gift Card balance at Gift Cards page is not shown
