Feature: Login page application

Scenario Outline: Login page validation with multiple parameters.

Given Go to the Login page 

When User enters <username> and <password> in the login page
Then user successfully logs in


Examples:
|username|password|
|test1|a123|
|aaa121|pwd01|
|testing   |pxkP3RtPe(X8cWIrlzV)5plu|


