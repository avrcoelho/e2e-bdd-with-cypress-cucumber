Feature: WebdriverUniversity - Contact Us Page

  # Execute befere each test - With that you can reduce duplications
  Background:
    Given I navigate to the webdriveruniversity homepage
    When I click on contact us button
    And I type a fisrt name
    And I type a last name

  Scenario: Valid Contact Us Form Submission
    And I enter an email address
    And I type a comment
    And I click on the submit button
    Then I should presented with a successful contact us submisson message

  Scenario: Invalid Contact Us Form Submission
    And I type a comment
    And I click on the submit button
    Then I should presented with a unsuccessful contact us submisson message

  Scenario: Valid Contact Us Form Submission - Using specific data
    Given I navigate to the webdriveruniversity homepage
    When I click on contact us button
    And I type specific fisrt name "Andrew"
    And I type specific last name "Brown"
    And I type specific email address "andrew.brown@email.com"
    And I type specific string "Hello world" and specific number 777 within the comment input filed
    And I click on the submit button
    Then I should presented with a successful contact us submisson message

  Scenario: Valid Contact Us Form Submission - Using specific data
    Given I navigate to the webdriveruniversity homepage
    When I click on contact us button
    And I type specific fisrt name "sdAndrew"
    And I type specific last name "Brddown"
    And I type specific email address "ansdsdrew.brown@email.com"
    And I type specific string "Hello world" and specific number 777 within the comment input filed
    And I click on the submit button
    Then I should presented with a successful contact us submisson message

  Scenario Outline: Validate contact us page
    Given I navigate to the webdriveruniversity homepage
    When I click on contact us button
    And I type a first name <firstName> and a last name '<lastName>'
    And I type a '<emailAddress>' and a cooment '<comment>'
    And I click on the submit button
    Then I should be presented with header text '<message>'

    Examples:
      | firstName | lastName | emailAddress          | comment               | message                      |
      | Andre     | Coelho   | andre.coelho@mail.com | Hello my friends      | Thank You for your Message!  |
      | Leona     | Coelho   | leona.coelho@mail.com | Hello my guy          | Thank You for your Message!  |
      | Luke      | Hudson   | luke.hudson           | Do you like chocolate | Error: Invalid email address |
