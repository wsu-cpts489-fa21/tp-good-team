import { Selector } from "testcafe";
import { ClientFunction } from "testcafe";

fixture`updateTests`.page`http://localhost:8081`;

test("Test Update", async (t) => {
  await t

    .click("#createAccountBtn")
    .click("#email")
    .typeText("#email", "h@yahoo.com")
    .click("#password")
    .typeText("#password", "Lastfirst1")
    .click("#repeatPassword")
    .typeText("#repeatPassword", "Lastfirst1")
    .click("#displayName")
    .typeText("#displayName", "kagekey5")
    .click("#securityQuestion")
    .typeText("#securityQuestion", "name?")
    .click("#securityAnswer")
    .typeText("#securityAnswer", "eric")
    .click("#submitCreateAccountBtn")
    .click("#email")
    .typeText("#email", "h@yahoo.com")
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
    .expect(Selector("tbody").count)
    .eql(1)
    .click("#edit")
    .click("#roundNotes")
    .typeText("#roundNotes", "fun game of golf")
    .click("#updateRoundBtn")
    .click("#edit")
    .click("#roundNotes")
    .expect(Selector("#roundNotes").innerText)
    .notEql(" ");
});
