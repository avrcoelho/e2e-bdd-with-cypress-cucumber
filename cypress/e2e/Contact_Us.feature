Feature: WebdriverUniversity - Contact Us Page

  Scenario: Valid Contact Us Form Submission
    Given I navigate to the webdriveruniversity homepage
    When I click on contact us button
    And I type a fisrt name
    And I type a last name
    And I enter an email address
    And I type a comment
    And I click on the submit button
    Then I should presented with a successful contact us submisson message

  Scenario: Invalid Contact Us Form Submission
    Given I navigate to the webdriveruniversity homepage
    When I click on contact us button
    And I type a fisrt name
    And I type a last name
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