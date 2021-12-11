import { Selector } from "testcafe";
import { nanoid } from "nanoid";

const pw = "nthnthNTH8";

//prettier-ignore
fixture`Test badges earned for number of rounds played`.page`http://localhost:8081`;

/*****************************************************************
 * 56
 * 55
 * 50
 * 45
 * 35
 * 25
 * 24
 *****************************************************************/

test("Unqualified ECP test", async (t) => {
  const email = "Unqualified_" + nanoid() + "@email.com";
  await t
    //Create account with random name
    .click("#createAccountBtn")
    .typeText("#email", email)
    .typeText("#password", pw)
    .typeText("#repeatPassword", pw)
    .typeText("#displayName", email)
    .typeText("#securityQuestion", pw)
    .typeText("#securityAnswer", pw)
    .click("#submitCreateAccountBtn")

    //Logs into App
    .typeText("#email", email)
    .typeText("#password", pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode")

    //Cover the test
    .click("#roundsModeActionBtn")
    .typeText("#roundCourse", "test_" + nanoid())
    .click("#roundMinutes")
    .pressKey("ctrl+a delete")
    .typeText("#roundMinutes", "56")
    .click("#roundFormSubmitBtnLabel");

  //Make assertions
});

test("Brown ECP test", async (t) => {
  const email = "Brown_" + nanoid() + "@email.com";
  await t
    //Create account with random name
    .click("#createAccountBtn")
    .typeText("#email", email)
    .typeText("#password", pw)
    .typeText("#repeatPassword", pw)
    .typeText("#displayName", email)
    .typeText("#securityQuestion", pw)
    .typeText("#securityAnswer", pw)
    .click("#submitCreateAccountBtn")

    //Logs into App
    .typeText("#email", email)
    .typeText("#password", pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode")

    //Cover the test
    .click("#roundsModeActionBtn")
    .typeText("#roundCourse", "test_" + nanoid())
    .click("#roundMinutes")
    .pressKey("ctrl+a delete")
    .typeText("#roundMinutes", "55")
    .wait(4000)
    .click("#roundFormSubmitBtnLabel");

  //Make assertions
});

test("Grey ECP test", async (t) => {
  const email = "Grey_" + nanoid() + "@email.com";
  await t
    //Create account with random name
    .click("#createAccountBtn")
    .typeText("#email", email)
    .typeText("#password", pw)
    .typeText("#repeatPassword", pw)
    .typeText("#displayName", email)
    .typeText("#securityQuestion", pw)
    .typeText("#securityAnswer", pw)
    .click("#submitCreateAccountBtn")

    //Logs into App
    .typeText("#email", email)
    .typeText("#password", pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode")

    //Cover the test
    .click("#roundsModeActionBtn")
    .typeText("#roundCourse", "test_" + nanoid())
    .click("#roundMinutes")
    .pressKey("ctrl+a delete")
    .typeText("#roundMinutes", "50")
    .click("#roundFormSubmitBtnLabel");

  //Make assertions
});

test("Gold ECP test", async (t) => {
  const email = "Gold" + nanoid() + "@email.com";
  await t
    //Create account with random name
    .click("#createAccountBtn")
    .typeText("#email", email)
    .typeText("#password", pw)
    .typeText("#repeatPassword", pw)
    .typeText("#displayName", email)
    .typeText("#securityQuestion", pw)
    .typeText("#securityAnswer", pw)
    .click("#submitCreateAccountBtn")

    //Logs into App
    .typeText("#email", email)
    .typeText("#password", pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode")

    //Cover the test
    .click("#roundsModeActionBtn")
    .typeText("#roundCourse", "test_" + nanoid())
    .click("#roundMinutes")
    .pressKey("ctrl+a delete")
    .typeText("#roundMinutes", "45")
    .click("#roundFormSubmitBtnLabel");

  //Make assertions
});

test("Blue ECP test", async (t) => {
  const email = "Blue_" + nanoid() + "@email.com";
  await t
    //Create account with random name
    .click("#createAccountBtn")
    .typeText("#email", email)
    .typeText("#password", pw)
    .typeText("#repeatPassword", pw)
    .typeText("#displayName", email)
    .typeText("#securityQuestion", pw)
    .typeText("#securityAnswer", pw)
    .click("#submitCreateAccountBtn")

    //Logs into App
    .typeText("#email", email)
    .typeText("#password", pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode")

    //Cover the test
    .click("#roundsModeActionBtn")
    .typeText("#roundCourse", "test_" + nanoid())
    .click("#roundMinutes")
    .pressKey("ctrl+a delete")
    .typeText("#roundMinutes", "35")
    .click("#roundFormSubmitBtnLabel");

  //Make assertions
});

test("Purple ECP test", async (t) => {
  const email = "Purple_" + nanoid() + "@email.com";
  await t
    //Create account with random name
    .click("#createAccountBtn")
    .typeText("#email", email)
    .typeText("#password", pw)
    .typeText("#repeatPassword", pw)
    .typeText("#displayName", email)
    .typeText("#securityQuestion", pw)
    .typeText("#securityAnswer", pw)
    .click("#submitCreateAccountBtn")

    //Logs into App
    .typeText("#email", email)
    .typeText("#password", pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode")

    //Cover the test
    .click("#roundsModeActionBtn")
    .typeText("#roundCourse", "test_" + nanoid())
    .click("#roundMinutes")
    .pressKey("ctrl+a delete")
    .typeText("#roundMinutes", "25")
    .click("#roundFormSubmitBtnLabel");

  //Make assertions
});

test("Max ECP test", async (t) => {
  const email = "Max_" + nanoid() + "@email.com";
  await t
    //Create account with random name
    .click("#createAccountBtn")
    .typeText("#email", email)
    .typeText("#password", pw)
    .typeText("#repeatPassword", pw)
    .typeText("#displayName", email)
    .typeText("#securityQuestion", pw)
    .typeText("#securityAnswer", pw)
    .click("#submitCreateAccountBtn")

    //Logs into App
    .typeText("#email", email)
    .typeText("#password", pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode")

    //Cover the test
    .click("#roundsModeActionBtn")
    .typeText("#roundCourse", "test_" + nanoid())
    .click("#roundMinutes")
    .pressKey("ctrl+a delete")
    .typeText("#roundMinutes", "24")
    .click("#roundFormSubmitBtnLabel");

  //Make assertions
});
