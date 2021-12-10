import { Selector } from "testcafe";
import { nanoid } from "nanoid";

// const email = "Test_" + nanoid() + "@email.com";
const pw = "nthnthNTH8";

const badgeUnlocked = Selector("#badgeUnlocked", { timeout: 200 });

//prettier-ignore
fixture`Tests for 'New Badge Notification Toast'`.page`http://localhost:8081`;

// test("ROUNDS Played Test: Unqualified ECP test", async (t) => {
//   await t
//     //Create account with random name
//     .click("#createAccountBtn")
//     .typeText("#email", email)
//     .typeText("#password", pw)
//     .typeText("#repeatPassword", pw)
//     .typeText("#displayName", email)
//     .typeText("#securityQuestion", pw)
//     .typeText("#securityAnswer", pw)
//     .click("#submitCreateAccountBtn")

//     //Logs into App
//     .typeText("#email", email)
//     .typeText("#password", pw)
//     .click("#loginBtn")

//     //Navigate to Rounds Mode
//     .click("#roundsMode");

//   //Mock behavior

//   //Make assertions

//   //Log 10 rounds and make assertion
//   for (let i = 0; i < 10; i++) {
//     await t
//       .click("#roundsModeActionBtn")
//       .typeText("#roundCourse", "test_" + nanoid())
//       .click("#roundFormSubmitBtnLabel")
//       .expect(badgeUnlocked.visible)
//       .eql(false);
//   }

//   await t.wait(10);
// });

// test("ROUNDS Played Test: Brown ECP test", async (t) => {
//   await t

//     //Logs into App
//     .typeText("#email", email)
//     .typeText("#password", pw)
//     .click("#loginBtn")

//     //Navigate to Rounds Mode
//     .click("#roundsMode");

//   //Log 30 rounds and make assertion
//   for (let i = 0; i < 20; i++) {
//     await t
//       .click("#roundsModeActionBtn")
//       .typeText("#roundCourse", "test_" + nanoid())
//       .click("#roundFormSubmitBtnLabel");
//     if (i % 9 === 0) {
//       await t.expect(badgeUnlocked.visible).eql(false);
//     }
//   }
//   await t.expect(badgeUnlocked.visible).eql(true);

//   await t.wait(10);
// });

// test("ROUNDS Played Test: Brown + 1 ECP test", async (t) => {
//   await t

//     //Logs into App
//     .typeText("#email", email)
//     .typeText("#password", pw)
//     .click("#loginBtn")

//     //Navigate to Rounds Mode
//     .click("#roundsMode");

//   //Log 1 rounds and make assertion
//   await t
//     .click("#roundsModeActionBtn")
//     .typeText("#roundCourse", "test_" + nanoid())
//     .click("#roundFormSubmitBtnLabel")
//     .expect(badgeUnlocked.visible)
//     .eql(false);

//   await t.wait(10);
// });

// test("ROUNDS Played Test: Grey ECP test", async (t) => {
//   await t

//     //Logs into App
//     .typeText("#email", email)
//     .typeText("#password", pw)
//     .click("#loginBtn")

//     //Navigate to Rounds Mode
//     .click("#roundsMode");

//   //Log 30 rounds and make assertion
//   for (let i = 0; i < 34; i++) {
//     await t
//       .click("#roundsModeActionBtn")
//       .typeText("#roundCourse", "test_" + nanoid())
//       .click("#roundFormSubmitBtnLabel");
//     if (i % 10 === 0) {
//       await t.expect(badgeUnlocked.visible).eql(false);
//     }
//   }
//   await t.expect(badgeUnlocked.visible).eql(true);

//   await t.wait(10);
// });

// test("ROUNDS Played Test: Grey + 1 ECP test", async (t) => {
//   await t

//     //Logs into App
//     .typeText("#email", email)
//     .typeText("#password", pw)
//     .click("#loginBtn")

//     //Navigate to Rounds Mode
//     .click("#roundsMode");

//   //Log 1 rounds and make assertion
//   await t
//     .click("#roundsModeActionBtn")
//     .typeText("#roundCourse", "test_" + nanoid())
//     .click("#roundFormSubmitBtnLabel")
//     .expect(badgeUnlocked.visible)
//     .eql(false);

//   await t.wait(10);
// });

// test("ROUNDS Played Test: Gold ECP test", async (t) => {
//   await t

//     //Logs into App
//     .typeText("#email", email)
//     .typeText("#password", pw)
//     .click("#loginBtn")

//     //Navigate to Rounds Mode
//     .click("#roundsMode");

//   //Log 30 rounds and make assertion
//   for (let i = 0; i < 64; i++) {
//     await t
//       .click("#roundsModeActionBtn")
//       .typeText("#roundCourse", "test_" + nanoid())
//       .click("#roundFormSubmitBtnLabel");
//     if (i % 25 === 0) {
//       await t.expect(badgeUnlocked.visible).eql(false);
//     }
//   }
//   await t.expect(badgeUnlocked.visible).eql(true);

//   await t.wait(10);
// });

// test("ROUNDS Played Test: Gold + 1 ECP test", async (t) => {
//   await t

//     //Logs into App
//     .typeText("#email", email)
//     .typeText("#password", pw)
//     .click("#loginBtn")

//     //Navigate to Rounds Mode
//     .click("#roundsMode");

//   //Log 1 rounds and make assertion
//   await t
//     .click("#roundsModeActionBtn")
//     .typeText("#roundCourse", "test_" + nanoid())
//     .click("#roundFormSubmitBtnLabel")
//     .expect(badgeUnlocked.visible)
//     .eql(false);

//   await t.wait(10);
// });

// test("ROUNDS Played Test: Blue ECP test", async (t) => {
//   await t

//     //Logs into App
//     .typeText("#email", email)
//     .typeText("#password", pw)
//     .click("#loginBtn")

//     //Navigate to Rounds Mode
//     .click("#roundsMode");

//   //Log 30 rounds and make assertion
//   for (let i = 0; i < 129; i++) {
//     await t
//       .click("#roundsModeActionBtn")
//       .typeText("#roundCourse", "test_" + nanoid())
//       .click("#roundFormSubmitBtnLabel");
//     if (i % 25 === 0) {
//       await t.expect(badgeUnlocked.visible).eql(false);
//     }
//   }
//   await t.expect(badgeUnlocked.visible).eql(true);

//   await t.wait(10);
// });

// test("ROUNDS Played Test: Blue + 1 ECP test", async (t) => {
//   await t

//     //Logs into App
//     .typeText("#email", email)
//     .typeText("#password", pw)
//     .click("#loginBtn")

//     //Navigate to Rounds Mode
//     .click("#roundsMode");

//   //Log 1 rounds and make assertion
//   await t
//     .click("#roundsModeActionBtn")
//     .typeText("#roundCourse", "test_" + nanoid())
//     .click("#roundFormSubmitBtnLabel")
//     .expect(badgeUnlocked.visible)
//     .eql(false);

//   await t.wait(10);
// });

// test("ROUNDS Played Test: Purple ECP test", async (t) => {
//   await t

//     //Logs into App
//     .typeText("#email", email)
//     .typeText("#password", pw)
//     .click("#loginBtn")

//     //Navigate to Rounds Mode
//     .click("#roundsMode");

//   //Log 30 rounds and make assertion
//   for (let i = 0; i < 259; i++) {
//     await t
//       .click("#roundsModeActionBtn")
//       .typeText("#roundCourse", "test_" + nanoid())
//       .click("#roundFormSubmitBtnLabel");
//     if (i % 25 === 0) {
//       await t.expect(badgeUnlocked.visible).eql(false);
//     }
//   }
//   await t.expect(badgeUnlocked.visible).eql(true);

//   await t.wait(10);
// });

// test("ROUNDS Played Test: Purple + 1 ECP test", async (t) => {
//   await t

//     //Logs into App
//     .typeText("#email", email)
//     .typeText("#password", pw)
//     .click("#loginBtn")

//     //Navigate to Rounds Mode
//     .click("#roundsMode");

//   //Log 1 rounds and make assertion
//   await t
//     .click("#roundsModeActionBtn")
//     .typeText("#roundCourse", "test_" + nanoid())
//     .click("#roundFormSubmitBtnLabel")
//     .expect(badgeUnlocked.visible)
//     .eql(false);

//   await t.wait(10);
// });

test("ROUNDS Played Test: Unqualified ECP test", async (t) => {
  const email = "Test-Unq_" + nanoid() + "@email.com";
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

  //Mock behavior
  //Log 9 rounds and make assertion
  for (let i = 0; i < 9; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
  }
  await t.expect(badgeUnlocked.visible).eql(false);

  await t.wait(10);
});

test("ROUNDS Played Test: Brown ECP test", async (t) => {
  const email = "Test-Brown_" + nanoid() + "@email.com";
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

  //Log 30 rounds and make assertion
  for (let i = 0; i < 17; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
  }
  await t.expect(badgeUnlocked.visible).eql(true);

  await t.wait(10);
});

test("ROUNDS Played Test: Brown + 1 ECP test", async (t) => {
  const email = "Test-Brown-1_" + nanoid() + "@email.com";
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

  //Log 1 rounds and make assertion
  for (let i = 0; i < 18; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
  }
  await t.expect(badgeUnlocked.visible).eql(true);

  await t.wait(10);
});

test("ROUNDS Played Test: Grey ECP test", async (t) => {
  const email = "Test-Grey_" + nanoid() + "@email.com";
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

  //Log 30 rounds and make assertion
  for (let i = 0; i < 21; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
  }
  await t.expect(badgeUnlocked.visible).eql(true);

  await t.wait(10);
});

test("ROUNDS Played Test: Grey + 1 ECP test", async (t) => {
  const email = "Test-Grey-1_" + nanoid() + "@email.com";
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

  //Log 1 rounds and make assertion
  for (let i = 0; i < 22; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
  }
  await t.expect(badgeUnlocked.visible).eql(true);

  await t.wait(10);
});

test("ROUNDS Played Test: Gold ECP test", async (t) => {
  const email = "Test-Gold_" + nanoid() + "@email.com";
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

  //Log 30 rounds and make assertion
  for (let i = 0; i < 25; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
  }
  await t.expect(badgeUnlocked.visible).eql(true);

  await t.wait(10);
});

test("ROUNDS Played Test: Gold + 1 ECP test", async (t) => {
  const email = "Test-Gold-1_" + nanoid() + "@email.com";
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

  //Log 1 rounds and make assertion
  for (let i = 0; i < 26; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
  }
  await t.expect(badgeUnlocked.visible).eql(true);

  await t.wait(10);
});

test("ROUNDS Played Test: Blue ECP test", async (t) => {
  const email = "Test-Blue_" + nanoid() + "@email.com";
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

  //Log 30 rounds and make assertion
  for (let i = 0; i < 30; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
  }
  await t.expect(badgeUnlocked.visible).eql(true);

  await t.wait(10);
});

test("ROUNDS Played Test: Blue + 1 ECP test", async (t) => {
  const email = "Test-Blue-1_" + nanoid() + "@email.com";
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

  //Log 1 rounds and make assertion
  for (let i = 0; i < 31; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
  }
  await t.expect(badgeUnlocked.visible).eql(true);

  await t.wait(10);
});

test("ROUNDS Played Test: Purple ECP test", async (t) => {
  const email = "Test-Purple_" + nanoid() + "@email.com";
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

  //Log 30 rounds and make assertion
  for (let i = 0; i < 35; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
  }
  await t.expect(badgeUnlocked.visible).eql(true);

  await t.wait(10);
});

test("ROUNDS Played Test: Purple + 1 ECP test", async (t) => {
  const email = "Test-Purple-1_" + nanoid() + "@email.com";
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

  //Log 1 rounds and make assertion
  for (let i = 0; i < 36; i++) {
    await t
      .click("#roundsModeActionBtn")
      .typeText("#roundCourse", "test_" + nanoid())
      .click("#roundFormSubmitBtnLabel");
  }
  await t.expect(badgeUnlocked.visible).eql(true);

  await t.wait(10);
});

/*****************************************************************
 *
 *
 * Fast time badges
 *
 *
 *****************************************************************/

// fastTimeBadges
test("Time Toast Test: Unqualified", async (t) => {
  const email = "Test-unq_" + nanoid() + "@email.com";
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

  //Mock behavior
  await t
    .click("#roundMinutes")
    .pressKey("ctrl+a delete")
    .typeText("#roundMinutes", "90")

    //Submit
    .click("#roundFormSubmitBtnLabel")

    //Make assertions
    .expect(badgeUnlocked.visible)
    .eql(false);
});
test("Time Toast Test: Brown", async (t) => {
  const email = "Test-Brown_" + nanoid() + "@email.com";
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

  //Mock behavior
  await t
    .click("#roundMinutes")
    .pressKey("ctrl+a delete")
    .typeText("#roundMinutes", "80")

    //Submit
    .click("#roundFormSubmitBtnLabel")

    //Make assertions
    .expect(badgeUnlocked.visible)
    .eql(true);
});
test("Time Toast Test: Brown + 1", async (t) => {
  const email = "Test-Brown-1_" + nanoid() + "@email.com";
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

  //Mock behavior
  await t
    .click("#roundMinutes")
    .pressKey("ctrl+a delete")
    .typeText("#roundMinutes", "79")

    //Submit
    .click("#roundFormSubmitBtnLabel")

    //Make assertions
    .expect(badgeUnlocked.visible)
    .eql(false);
});
test("Time Toast Test: Grey", async (t) => {
  const email = "Test-Grey_" + nanoid() + "@email.com";
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

  //Mock behavior
  await t
    .click("#roundMinutes")
    .pressKey("ctrl+a delete")
    .typeText("#roundMinutes", "60")

    //Submit
    .click("#roundFormSubmitBtnLabel")

    //Make assertions
    .expect(badgeUnlocked.visible)
    .eql(true);
});
test("Time Toast Test: Grey + 1", async (t) => {
  const email = "Test-Grey-1_" + nanoid() + "@email.com";
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

  //Mock behavior
  await t
    .click("#roundMinutes")
    .pressKey("ctrl+a delete")
    .typeText("#roundMinutes", "59")

    //Submit
    .click("#roundFormSubmitBtnLabel")

    //Make assertions
    .expect(badgeUnlocked.visible)
    .eql(false);
});
test("Time Toast Test: Gold", async (t) => {
  const email = "Test-Gold_" + nanoid() + "@email.com";
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

  //Mock behavior
  await t
    .click("#roundMinutes")
    .pressKey("ctrl+a delete")
    .typeText("#roundMinutes", "50")

    //Submit
    .click("#roundFormSubmitBtnLabel")

    //Make assertions
    .expect(badgeUnlocked.visible)
    .eql(true);
});
test("Time Toast Test: Gold + 1", async (t) => {
  const email = "Test-Gold-1_" + nanoid() + "@email.com";
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

  //Mock behavior
  await t
    .click("#roundMinutes")
    .pressKey("ctrl+a delete")
    .typeText("#roundMinutes", "49")

    //Submit
    .click("#roundFormSubmitBtnLabel")

    //Make assertions
    .expect(badgeUnlocked.visible)
    .eql(false);
});
test("Time Toast Test: Blue", async (t) => {
  const email = "Test-Blue_" + nanoid() + "@email.com";
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

  //Mock behavior
  await t
    .click("#roundMinutes")
    .pressKey("ctrl+a delete")
    .typeText("#roundMinutes", "45")

    //Submit
    .click("#roundFormSubmitBtnLabel")

    //Make assertions
    .expect(badgeUnlocked.visible)
    .eql(true);
});
test("Time Toast Test: Blue + 1", async (t) => {
  const email = "Test-Blue-1_" + nanoid() + "@email.com";
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

  //Mock behavior
  await t
    .click("#roundMinutes")
    .pressKey("ctrl+a delete")
    .typeText("#roundMinutes", "44")

    //Submit
    .click("#roundFormSubmitBtnLabel")

    //Make assertions
    .expect(badgeUnlocked.visible)
    .eql(false);
});
test("Time Toast Test: Purple", async (t) => {
  const email = "Test-Purple_" + nanoid() + "@email.com";
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

  //Mock behavior
  await t
    .click("#roundMinutes")
    .pressKey("ctrl+a delete")
    .typeText("#roundMinutes", "35")

    //Submit
    .click("#roundFormSubmitBtnLabel")

    //Make assertions
    .expect(badgeUnlocked.visible)
    .eql(true);
});
test("Time Toast Test: Purple + 1", async (t) => {
  const email = "Test-Purple-1_" + nanoid() + "@email.com";
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

  //Mock behavior
  await t
    .click("#roundMinutes")
    .pressKey("ctrl+a delete")
    .typeText("#roundMinutes", "34")

    //Submit
    .click("#roundFormSubmitBtnLabel")

    //Make assertions
    .expect(badgeUnlocked.visible)
    .eql(false);
});

// strokesBadges
// streakBadges
// highScoreBadges

/*****************************************************************

More complete Templates

test("XXX Test: Unqualified", async (t) => {
  const email = "Test-unq_" + nanoid() + "@email.com";
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

  //Mock behavior

  //Make assertions
});
test("XXX Test: Brown", async (t) => {
  const email = "Test-Brown_" + nanoid() + "@email.com";
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

  //Mock behavior

  //Make assertions
});
test("XXX Test: Brown + 1", async (t) => {
  const email = "Test-Brown-1_" + nanoid() + "@email.com";
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

  //Mock behavior

  //Make assertions
});
test("XXX Test: Grey", async (t) => {
  const email = "Test-Grey_" + nanoid() + "@email.com";
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

  //Mock behavior

  //Make assertions
});
test("XXX Test: Grey + 1", async (t) => {
  const email = "Test-Grey-1_" + nanoid() + "@email.com";
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

  //Mock behavior

  //Make assertions
});
test("XXX Test: Gold", async (t) => {
  const email = "Test-Gold_" + nanoid() + "@email.com";
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

  //Mock behavior

  //Make assertions
});
test("XXX Test: Gold + 1", async (t) => {
  const email = "Test-Gold-1_" + nanoid() + "@email.com";
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

  //Mock behavior

  //Make assertions
});
test("XXX Test: Blue", async (t) => {
  const email = "Test-Blue_" + nanoid() + "@email.com";
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

  //Mock behavior

  //Make assertions
});
test("XXX Test: Blue + 1", async (t) => {
  const email = "Test-Blue-1_" + nanoid() + "@email.com";
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

  //Mock behavior

  //Make assertions
});
test("XXX Test: Purple", async (t) => {
  const email = "Test-Purple_" + nanoid() + "@email.com";
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

  //Mock behavior

  //Make assertions
});
test("XXX Test: Purple + 1", async (t) => {
  const email = "Test-Purple-1_" + nanoid() + "@email.com";
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

  //Mock behavior

  //Make assertions
});






 *****************************************************************/

//Templates:
/*****************************************************************
 
 test("XXX Test: Unqualified", async (t) => {
  await t
    //Create account with random name
    .click("#createAccountBtn")
    .typeText("#email", XXXXX)
    .typeText("#password", pw)
    .typeText("#repeatPassword", pw)
    .typeText("#displayName", XXXXX)
    .typeText("#securityQuestion", pw)
    .typeText("#securityAnswer", pw)
    .click("#submitCreateAccountBtn")
    
    //Logs into App
    .typeText("#email", XXXXX)
    .typeText("#password", pw)
    .click("#loginBtn")
    
    //Navigate to Rounds Mode
    .click("#roundsMode");
    
    //Mock behavior
    
  //Make assertions
});
test("XXX Test: Brown", async (t) => {});
test("XXX Test: Brown + 1", async (t) => {});
test("XXX Test: Grey", async (t) => {});
test("XXX Test: Grey + 1", async (t) => {});
test("XXX Test: Gold", async (t) => {});
test("XXX Test: Gold + 1", async (t) => {});
test("XXX Test: Blue", async (t) => {});
test("XXX Test: Blue + 1", async (t) => {});
test("XXX Test: Purple", async (t) => {});
test("XXX Test: Purple + 1", async (t) => {});
*****************************************************************/
