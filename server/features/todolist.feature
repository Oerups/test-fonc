Feature: Todolist

  Scenario: should return all todolists
    Given I have no resources
    When I call "GET" "/todolist"
    Then I should get a 200 response code
    And I should get an empty array

  Scenario: should create a todolist
    Given I have a payload
      | name | Todolist 1 |
    When I call "POST" "/todolist" with the payload
    Then I should get a 201 response code
    And The property "_id" should be present in the response
    And The property "name" should be "Product 1"

  Scenario: should update a todolist
    Given I have a payload
      | name | Todolist 1.1 |
    And I load "todolist.json"
    When I call "PATCH" "/todolist/{{todolist._id}}" with the payload
    Then I should get a 200 response code
    And The property "_id" should be present in the response
    And The property "name" should be "Todolist 1"
