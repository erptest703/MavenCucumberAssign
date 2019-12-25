package stepDefination;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepdefParameters {

	WebDriver driver;
	public static WebDriverWait wait;
	//wait = new WebDriverWait(driver, 20);// wait for portfolio
	
@Given("^Go to the Login page$")
public void go_to_the_Login_page() throws Throwable {
	String Chromepath = "C:\\Users\\isham\\OneDrive\\ERP training\\chromedriver_win32\\\\chromedriver.exe";
	System.setProperty("webdriver.chrome.driver", Chromepath);
	driver = new ChromeDriver();

	// implicit wait
	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	driver.get("http://sethuonline.com/lms");
	driver.manage().window().maximize();
	//driver.findElement(By.linkText("Login")).click();
}


@When("^User enters (.+) and (.+) in the login page$")
public void user_enters_username_and_password_in_the_login_page(String arg1,String arg2) throws Throwable {
	driver.findElement(By.linkText("Login")).click();
	
	String actual="testing";
	driver.findElement(By.name("user_login")).sendKeys(arg1);// enter in login text box.
  
	driver.findElement(By.name("user_password")).sendKeys(arg2);// enter in password text box.
	//driver.findElement(By.id("rememberme")).click();
	driver.findElement(By.id("wp-submit")).click();
	// assertEquals(arg1, actual);//assert to check whether username is testing.
	 
	
	

}

@Then("^user successfully logs in$")
public void user_successfully_logs_in() throws Throwable {

	driver.quit();
}
//portfolio code sarts here
@And("^User clikcs on Portfolio$")
public void user_clicks_portfolio() throws Throwable
{
	wait = new WebDriverWait(driver, 20);// wait for portfolio
	WebElement Portfcl = wait.until(
			ExpectedConditions.elementToBeClickable(By.xpath("(//a[contains(@href,'portfolio-masonry')])[1]")));
	Portfcl.click();
	
	}


@When("^Portfolio page is opened$")
public void portfolio_open_page() throws Throwable
{
	wait = new WebDriverWait(driver, 20);// wait for presenation
	WebElement Presentck = wait.until(
			ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"post-4424\"]/div/div/div/div/div/div/div/div[1]/ul/li[2]/a")));
			Presentck.click();
	}

@Then("^User clicks on Presenation tab$")
public void user_clicks_prsen() throws Throwable
{
	// use actions interface to handle mouse hovering on the image
	Actions act = new Actions(driver);
	WebElement hoveronpage = driver.findElement(By.xpath(
			"//img[contains(@src,'http://sethuonline.com/lms/wp-content/uploads/2016/03/presentation-2.jpg')]"));
	act.moveToElement(hoveronpage).perform();
	// use the actions interface to click on a link on the image.
	WebElement clickimage = driver.findElement(By.linkText("Up your skill"));
	act.moveToElement(clickimage).click().build().perform();


}
}