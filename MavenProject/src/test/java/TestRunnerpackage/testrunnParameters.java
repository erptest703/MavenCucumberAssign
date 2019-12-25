package TestRunnerpackage;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
//@CucumberOptions(features="src/test/java/features/featureParameters.feature", glue="stepDefination",
//@CucumberOptions(features="src/test/java/features/portfoliofeature.feature", glue="stepDefination",
//plugin={"pretty","html:target/portfolio_report"})

@CucumberOptions(features="src/test/java/features", glue="stepDefination",
plugin={"pretty","html:target/allreport"})
public class testrunnParameters {

}
