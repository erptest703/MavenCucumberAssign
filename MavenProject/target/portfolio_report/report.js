$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/portfoliofeature.feature");
formatter.feature({
  "line": 1,
  "name": "portlogio tab",
  "description": "",
  "id": "portlogio-tab",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "navigate when you click on porfolio",
  "description": "",
  "id": "portlogio-tab;navigate-when-you-click-on-porfolio",
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
  "duration": 11795501300,
  "status": "passed"
});
formatter.match({
  "location": "stepdefParameters.user_clicks_portfolio()"
});
formatter.result({
  "duration": 4581144000,
  "status": "passed"
});
formatter.match({
  "location": "stepdefParameters.portfolio_open_page()"
});
formatter.result({
  "duration": 640656600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefParameters.user_clicks_prsen()"
});
formatter.result({
  "duration": 3393012100,
  "status": "passed"
});
});