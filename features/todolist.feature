Feature: Todolist

  Scenario: should return all todolists
    Given I have no resources
    When I call "GET" "/todolist"
    Then I should get a 200 response code
    And I should get an array
