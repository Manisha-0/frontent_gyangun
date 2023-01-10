Feature: Is search successful?
  Is search process successfully completed

 Scenario: search a applicant on Gyangun
    Given When I go to Login Page 
    When I search my email 
    When I hi my password
    When I press login
    When I press search
    When I press btn
    Then successfull message is shown

  