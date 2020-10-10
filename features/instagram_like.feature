Feature: instagram

   Scenario: Finding some cheese
      Given I visit instagram
      When I see log in form
      Then I log in with "USERNAME" username and "PASSWORD" password
      When I see home button
      Then I click in with "_8-yf5 "
      When I see declaration button
      Then I see button click in with "aOOlW   HoLwm "
      When I see like button
      Then I click in with like button "fr66n"
