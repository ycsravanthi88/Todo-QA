Feature: Todo

Scenario: Add a Todo task
    Given I am on the Todo homepage
    When I create a new Todo task
    Then I should see my task in the list of all tasks