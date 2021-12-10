import { Selector } from "testcafe";
import { nanoid } from "nanoid";

const pw = "nthnthNTH8";

//prettier-ignore
fixture`Test badges earned for number of rounds played`.page`http://localhost:8081`;

test("Unqualified ECP test", async (t) => {
  await t
    //Create account with random name
    .click("#createAccountBtn")
    .typeText("#email", email0)
    .typeText("#password", pw)
    .typeText("#repeatPassword", pw)
    .typeText("#displayName", email0)
    .typeText("#securityQuestion", pw)
    .typeText("#securityAnswer", pw)
    .click("#submitCreateAccountBtn")

    //Logs into App
    .typeText(emailInput, email0)
    .typeText(pwInput, pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode");

  //Set up faux mocks.
  //Set us up such that the next test will only cover the test
  for (let i = 0; i < 20; i++) {
    await t
      .click("#roundsModeActionBtn")
      //Course
      .typeText("#roundCourse", "test_" + nanoid())
      //Minutes
      .click("#roundMinutes")
      .pressKey("ctrl+a delete")
      .typeText("#roundMinutes", "80")
      //Strokes
      .click("#roundStrokes")
      .pressKey("ctrl+a delete")
      .typeText("#roundStrokes", "160")
      //Minutes
      .click("#roundMinutes")
      .pressKey("ctrl+a delete")
      .typeText("#roundMinutes", "85")
      .click("#roundFormSubmitBtnLabel");
  }
  await t

    //Cover the test
    .click("#roundsModeActionBtn")
    .typeText("#roundCourse", "test_" + nanoid())

    //Make an assertion
    .wait(2);
});

test("Brown ECP test", async (t) => {
  await t
    //Create account with random name
    .click("#createAccountBtn")
    .typeText("#email", email1)
    .typeText("#password", pw)
    .typeText("#repeatPassword", pw)
    .typeText("#displayName", email1)
    .typeText("#securityQuestion", pw)
    .typeText("#securityAnswer", pw)
    .click("#submitCreateAccountBtn")

    //Logs into App
    .typeText(emailInput, email1)
    .typeText(pwInput, pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode");

  //Log Brown ECP
  for (let i = 0; i < 30; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
  }

  await t
    //Make an assertion
    .wait(2000);
});

test("Grey ECP test", async (t) => {
  await t
    //Create account with random name
    .click("#createAccountBtn")
    .typeText("#email", email2)
    .typeText("#password", pw)
    .typeText("#repeatPassword", pw)
    .typeText("#displayName", email2)
    .typeText("#securityQuestion", pw)
    .typeText("#securityAnswer", pw)
    .click("#submitCreateAccountBtn")

    //Logs into App
    .typeText(emailInput, email2)
    .typeText(pwInput, pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode");

  //Log Grey ECP
  for (let i = 0; i < 65; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
  }

  await t
    //Make an assertion
    .wait(2000);
});

test("Gold ECP test", async (t) => {
  await t
    //Create account with random name
    .click("#createAccountBtn")
    .typeText("#email", email3)
    .typeText("#password", pw)
    .typeText("#repeatPassword", pw)
    .typeText("#displayName", email3)
    .typeText("#securityQuestion", pw)
    .typeText("#securityAnswer", pw)
    .click("#submitCreateAccountBtn")

    //Logs into App
    .typeText(emailInput, email3)
    .typeText(pwInput, pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode");

  //Log Gold ECP
  for (let i = 0; i < 130; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
  }

  await t
    //Make an assertion
    .wait(2000);
});

test("Blue ECP test", async (t) => {
  await t
    //Create account with random name
    .click("#createAccountBtn")
    .typeText("#email", email4)
    .typeText("#password", pw)
    .typeText("#repeatPassword", pw)
    .typeText("#displayName", email4)
    .typeText("#securityQuestion", pw)
    .typeText("#securityAnswer", pw)
    .click("#submitCreateAccountBtn")

    //Logs into App
    .typeText(emailInput, email4)
    .typeText(pwInput, pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode");

  //Log Blue ECP
  for (let i = 0; i < 260; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
  }

  await t
    //Make an assertion
    .wait(2000);
});

test("Purple ECP test", async (t) => {
  await t
    //Create account with random name
    .click("#createAccountBtn")
    .typeText("#email", email5)
    .typeText("#password", pw)
    .typeText("#repeatPassword", pw)
    .typeText("#displayName", email5)
    .typeText("#securityQuestion", pw)
    .typeText("#securityAnswer", pw)
    .click("#submitCreateAccountBtn")

    //Logs into App
    .typeText(emailInput, email5)
    .typeText(pwInput, pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode");

  //Log Purple ECP
  for (let i = 0; i < 520; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
  }

  await t
    //Make an assertion
    .wait(2000);
});

test("Max ECP test", async (t) => {
  await t
    //Create account with random name
    .click("#createAccountBtn")
    .typeText("#email", email6)
    .typeText("#password", pw)
    .typeText("#repeatPassword", pw)
    .typeText("#displayName", email6)
    .typeText("#securityQuestion", pw)
    .typeText("#securityAnswer", pw)
    .click("#submitCreateAccountBtn")

    //Logs into App
    .typeText(emailInput, email6)
    .typeText(pwInput, pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode");

  //Log Max ECP
  for (let i = 0; i < 521; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
  }

  await t
    //Make an assertion
    .wait(2000);
});
