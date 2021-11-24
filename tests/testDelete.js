import { Selector } from "testcafe";

fixture`Test Delete`.page`http://localhost:8081`;

test("Test delete", async (t) => {
  await t
    .click("#createAccountBtn")
    .click("#email")
    .typeText("#email", "ezalvarez796@gmail.com")
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
    .typeText("#email", "ezalvarez796@gmail.com")
    .click("#password")
    .typeText("#password", "Lastfirst1")
    .click("#loginBtn")
    .expect(Selector("#feedMode").visible)
    .eql(true)
    .click("#roundsMode");
  let table = Selector("#roundsTable");
  const rowCountInit = (await table.find("td").count) + 1;

  await t
    .expect(rowCountInit)
    .eql(rowCountInit)
    .click("#roundsModeActionBtn")
    .click("#roundCourse")
    .typeText("#roundCourse", "Course")
    .click("#roundFormSubmitBtnLabel");

  table = Selector("#roundsTable");
  const rowCount1 = await table.find("td").count;

  await t
    .expect(rowCount1)
    .eql(rowCountInit + 5)
    .click("#trash")
    .click("#deleteRoundBtn");

  table = Selector("#roundsTable");
  const rowCount2 = await table.find("td").count;
  await t.expect(rowCount2).eql(rowCountInit);
});
