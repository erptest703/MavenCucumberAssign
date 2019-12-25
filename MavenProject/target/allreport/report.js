$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featureParameters.feature");
formatter.feature({
  "line": 1,
  "name": "Login page application",
  "description": "",
  "id": "login-page-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login page validation with multiple parameters.",
  "description": "",
  "id": "login-page-application;login-page-validation-with-multiple-parameters.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Go to the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \u003cusername\u003e and \u003cpassword\u003e in the login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user successfully logs in",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-page-application;login-page-validation-with-multiple-parameters.;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "login-page-application;login-page-validation-with-multiple-parameters.;;1"
    },
    {
      "cells": [
        "test1",
        "a123"
      ],
      "line": 13,
      "id": "login-page-application;login-page-validation-with-multiple-parameters.;;2"
    },
    {
      "cells": [
        "aaa121",
        "pwd01"
      ],
      "line": 14,
      "id": "login-page-application;login-page-validation-with-multiple-parameters.;;3"
    },
    {
      "cells": [
        "testing",
        "pxkP3RtPe(X8cWIrlzV)5plu"
      ],
      "line": 15,
      "id": "login-page-application;login-page-validation-with-multiple-parameters.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Login page validation with multiple parameters.",
  "description": "",
  "id": "login-page-application;login-page-validation-with-multiple-parameters.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Go to the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters test1 and a123 in the login page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user successfully logs in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefParameters.go_to_the_Login_page()"
});
formatter.result({
  "duration": 12334179100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1",
      "offset": 12
    },
    {
      "val": "a123",
      "offset": 22
    }
  ],
  "location": "stepdefParameters.user_enters_username_and_password_in_the_login_page(String,String)"
});
formatter.result({
  "duration": 443513500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefParameters.user_successfully_logs_in()"
});
formatter.result({
  "duration": 660741900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login page validation with multiple parameters.",
  "description": "",
  "id": "login-page-application;login-page-validation-with-multiple-parameters.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Go to the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters aaa121 and pwd01 in the login page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user successfully logs in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefParameters.go_to_the_Login_page()"
});
formatter.result({
  "duration": 9204162000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aaa121",
      "offset": 12
    },
    {
      "val": "pwd01",
      "offset": 23
    }
  ],
  "location": "stepdefParameters.user_enters_username_and_password_in_the_login_page(String,String)"
});
formatter.result({
  "duration": 399058600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefParameters.user_successfully_logs_in()"
});
formatter.result({
  "duration": 676667600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login page validation with multiple parameters.",
  "description": "",
  "id": "login-page-application;login-page-validation-with-multiple-parameters.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Go to the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters testing and pxkP3RtPe(X8cWIrlzV)5plu in the login page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user successfully logs in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefParameters.go_to_the_Login_page()"
});
formatter.result({
  "duration": 11856579200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing",
      "offset": 12
    },
    {
      "val": "pxkP3RtPe(X8cWIrlzV)5plu",
      "offset": 24
    }
  ],
  "location": "stepdefParameters.user_enters_username_and_password_in_the_login_page(String,String)"
});
formatter.result({
  "duration": 501023600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefParameters.user_successfully_logs_in()"
});
formatter.result({
  "duration": 634403600,
  "status": "passed"
});
formatter.uri("portfoliofeature.feature");
formatter.feature({
  "line": 1,
  "name": "portfolio tab",
  "description": "",
  "id": "portfolio-tab",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "navigate when you click on porfolio",
  "description": "",
  "id": "portfolio-tab;navigate-when-you-click-on-porfolio",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Go to the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clikcs on Portfolio",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Portfolio page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Presenation tab",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefParameters.go_to_the_Login_page()"
});
formatter.result({
  "duration": 9191181700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefParameters.user_clicks_portfolio()"
});
formatter.result({
  "duration": 6518979200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefParameters.portfolio_open_page()"
});
formatter.result({
  "duration": 623975500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefParameters.user_clicks_prsen()"
});
formatter.result({
  "duration": 3299045700,
  "status": "passed"
});
});