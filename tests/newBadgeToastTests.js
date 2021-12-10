import { Selector } from "testcafe";
import { nanoid } from "nanoid";

const email = "Test_" + nanoid() + "@email.com";
const pw = "nthnthNTH8";

const badgeUnlocked = Selector("#badgeUnlocked", { timeout: 200 });

//prettier-ignore
fixture`Tests for 'New Badge Notification Toast'`.page`http://localhost:8081`;

test("Unqualified ECP test", async (t) => {
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
    .click("#roundsMode");

  //Log 10 rounds and make assertion
  for (let i = 0; i < 10; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel")
      .expect(badgeUnlocked.visible)
      .eql(false);
  }

  await t.wait(10);
});

test("Brown ECP test", async (t) => {
  await t

    //Logs into App
    .typeText("#email", email)
    .typeText("#password", pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode");

  //Log 30 rounds and make assertion
  for (let i = 0; i < 20; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
    if (i % 9 === 0) {
      await t.expect(badgeUnlocked.visible).eql(false);
    }
  }
  await t.expect(badgeUnlocked.visible).eql(true);

  await t.wait(10);
});

test("Brown + 1 ECP test", async (t) => {
  await t

    //Logs into App
    .typeText("#email", email)
    .typeText("#password", pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode");

  //Log 1 rounds and make assertion
  await t
    .click("#roundsModeActionBtn")
    .typeText("#roundCourse", "test_" + nanoid())
    .click("#roundFormSubmitBtnLabel")
    .expect(badgeUnlocked.visible)
    .eql(false);

  await t.wait(10);
});

test("Grey ECP test", async (t) => {
  await t

    //Logs into App
    .typeText("#email", email)
    .typeText("#password", pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode");

  //Log 30 rounds and make assertion
  for (let i = 0; i < 34; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
    if (i % 10 === 0) {
      await t.expect(badgeUnlocked.visible).eql(false);
    }
  }
  await t.expect(badgeUnlocked.visible).eql(true);

  await t.wait(10);
});

test("Grey + 1 ECP test", async (t) => {
  await t

    //Logs into App
    .typeText("#email", email)
    .typeText("#password", pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode");

  //Log 1 rounds and make assertion
  await t
    .click("#roundsModeActionBtn")
    .typeText("#roundCourse", "test_" + nanoid())
    .click("#roundFormSubmitBtnLabel")
    .expect(badgeUnlocked.visible)
    .eql(false);

  await t.wait(10);
});

test("Gold ECP test", async (t) => {
  await t

    //Logs into App
    .typeText("#email", email)
    .typeText("#password", pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode");

  //Log 30 rounds and make assertion
  for (let i = 0; i < 64; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
    if (i % 25 === 0) {
      await t.expect(badgeUnlocked.visible).eql(false);
    }
  }
  await t.expect(badgeUnlocked.visible).eql(true);

  await t.wait(10);
});

test("Gold + 1 ECP test", async (t) => {
  await t

    //Logs into App
    .typeText("#email", email)
    .typeText("#password", pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode");

  //Log 1 rounds and make assertion
  await t
    .click("#roundsModeActionBtn")
    .typeText("#roundCourse", "test_" + nanoid())
    .click("#roundFormSubmitBtnLabel")
    .expect(badgeUnlocked.visible)
    .eql(false);

  await t.wait(10);
});

test("Blue ECP test", async (t) => {
  await t

    //Logs into App
    .typeText("#email", email)
    .typeText("#password", pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode");

  //Log 30 rounds and make assertion
  for (let i = 0; i < 129; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
    if (i % 25 === 0) {
      await t.expect(badgeUnlocked.visible).eql(false);
    }
  }
  await t.expect(badgeUnlocked.visible).eql(true);

  await t.wait(10);
});

test("Blue + 1 ECP test", async (t) => {
  await t

    //Logs into App
    .typeText("#email", email)
    .typeText("#password", pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode");

  //Log 1 rounds and make assertion
  await t
    .click("#roundsModeActionBtn")
    .typeText("#roundCourse", "test_" + nanoid())
    .click("#roundFormSubmitBtnLabel")
    .expect(badgeUnlocked.visible)
    .eql(false);

  await t.wait(10);
});

test("Purple ECP test", async (t) => {
  await t

    //Logs into App
    .typeText("#email", email)
    .typeText("#password", pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode");

  //Log 30 rounds and make assertion
  for (let i = 0; i < 259; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
    if (i % 25 === 0) {
      await t.expect(badgeUnlocked.visible).eql(false);
    }
  }
  await t.expect(badgeUnlocked.visible).eql(true);

  await t.wait(10);
});

test("Purple + 1 ECP test", async (t) => {
  await t

    //Logs into App
    .typeText("#email", email)
    .typeText("#password", pw)
    .click("#loginBtn")

    //Navigate to Rounds Mode
    .click("#roundsMode");

  //Log 1 rounds and make assertion
  await t
    .click("#roundsModeActionBtn")
    .typeText("#roundCourse", "test_" + nanoid())
    .click("#roundFormSubmitBtnLabel")
    .expect(badgeUnlocked.visible)
    .eql(false);

  await t.wait(10);
});
