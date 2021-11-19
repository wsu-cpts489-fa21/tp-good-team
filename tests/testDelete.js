import { Selector } from "testcafe";

fixture`Test Delete`.page`http://localhost:3000`;

test("Test delete", async (t) => {
  await t
    .click("#createAccountBtn")
    .click("#acctEmail")
    .typeText("#acctEmail", "ezalvarez796@gmail.com")
    .click("#acctPassword")
    .typeText("#acctPassword", "Lastfirst1")
    .click("#acctPasswordRepeat")
    .typeText("#acctPasswordRepeat", "Lastfirst1")
    .click("#acctDisplayName")
    .typeText("#acctDisplayName", "kagekey5")

    .click("#acctSecurityQuestion")
    .typeText("#acctSecurityQuestion", "name?")
    .click("#acctSecurityAnswer")
    .typeText("#acctSecurityAnswer", "eric")
    .click("#submitCreateAccountBtn")
    .click("#email")
    .typeText("#email", "ezalvarez796@gmail.com")
    .click("#password")
    .typeText("#password", "Lastfirst1")
    .click("#loginBtn")
    .expect(Selector("#feedMode").visible)
    .eql(true)
    .click("#roundsMode")
    .click("#roundsModeActionBtn")
    .click("#roundCourse")
    .typeText("#roundCourse", "Course")
    .click("#roundFormSubmitBtnLabel")
    .click("#roundsModeActionBtn")
    .click("#roundCourse")
    .typeText("#roundCourse", "Eric's Course")
    .click("#roundFormSubmitBtnLabel")
    .expect(Selector(".row-item").count)
    .eql(2)
    .click("#deleteBtn1")
    .click("#deleteRoundBtn")
    .expect(Selector(".row-item").count)
    .eql(1);
});