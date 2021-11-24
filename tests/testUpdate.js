// import { Selector } from "testcafe";
// import { ClientFunction } from "testcafe";
// import { nanoid } from "nanoid";

// fixture`updateTests`.page`http://localhost:8081/`;

// const email = "testUser_" + nanoid() + "@email.com";
// const pw = "nthnthNTH8";

// //Input fields
// const emailInput = Selector("#email");
// const pwInput = Selector("#password");
// const typeInput = Selector("#roundType");
// const courseInput = Selector("#roundCourse");
// const holesInput = Selector("#roundHoles");
// const strokesInput = Selector("#roundStrokes");
// const minutesInput = Selector("#roundMinutes");
// const secondsInput = Selector("#roundSeconds");
// const notesInput = Selector("#roundNotes");

// //Buttons
// const loginBtn = Selector("#loginBtn");
// const profileBtn = Selector("#profileBtn");
// const feedModeBtn = Selector("#feedMode");
// const searchBtn = Selector("#searchBtn");
// const coursesModeBtn = Selector("#coursesMode");
// const buddiesModeBtn = Selector("#buddiesMode");
// const roundsModeBtn = Selector("#roundsMode");
// const menuBtn = Selector("#menuBtn");
// const cancelUpdateProfileBtn = Selector("#cancelUpdateProfileBtn");
// const submitUpdateProfileBtn = Selector("#submitUpdateProfileBtn");
// const accordionAccountSettingsBtn = Selector("#accountSettingsBtn");
// const accordionProfileBtn = Selector("#profileSettingsBtn");
// const accordionSgBtn = Selector("#sgSettingsBtn");
// const logoutBtn = Selector("#logout");
// const roundsModeActionBtn = Selector("#roundsModeActionBtn");
// const roundFormSubmitBtn = Selector("#roundFormSubmitBtnLabel");

// //Dialogs Pages
// const profileSettingsDialog = Selector("#profileSettingsDialog");
// const roundsModeTab = Selector("#roundsModeTab");
// const feedModeTab = Selector("#feedModeTab");
// const accordionPanelAccount = Selector("#accountSettingsPanel");
// const accordionPanelProfile = Selector("#profileSettingsPanel");
// const accordionPanelSg = Selector("#sgSettingsPanel");

// //Validation
// const spErrorBox = Selector("#spErrorBox");
// const spPasswordError = Selector("#spPasswordError");
// const spSecurityQuestionError = Selector("#spSecurityQuestionError");
// const spSecurityAnswerError = Selector("#spSecurityAnswerError");

// const setNumber = "40";
// const setInput = "AAAAAAAAAA";
// const setType = "Practice";
// const setHoles = "18";
// const setHolesA = "1";
// const setHolesB = "8";

// const newNumber = "50";
// const newInput = "BBBBBBBBBB";
// const newType = "Tournament";
// const newHoles = "9";

// test("Update a table with one entry", async (t) => {
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

//     //Logs into App and navigates to Rounds
//     .typeText(emailInput, email)
//     .typeText(pwInput, pw)
//     .click(loginBtn)
//     .click(roundsModeBtn)
//     .click(roundsModeActionBtn)

//     //Add a round
//     .typeText(courseInput, setInput)
//     // .click(typeInput)
//     // .pressKey(setType)
//     // .pressKey("enter")
//     .typeText(typeInput, setType)
//     .typeText(holesInput, setHoles)
//     .click(strokesInput)
//     .pressKey("ctrl+a delete")
//     .typeText(strokesInput, setNumber)
//     // .click(holesInput)
//     // .pressKey(setHolesA)
//     // .pressKey(setHolesB)
//     // .click(holesInput)
//     // .pressKey(newHoles)

//     .click(minutesInput)
//     .pressKey("ctrl+a delete")
//     .typeText(minutesInput, setNumber)
//     .click(secondsInput)
//     .pressKey("ctrl+a delete")
//     .typeText(secondsInput, setNumber)
//     .pressKey("backspace")
//     .typeText(notesInput, setInput)
//     .click(roundFormSubmitBtn)

//     //Log out and back in
//     .click(menuBtn)
//     .click(logoutBtn)
//     .typeText(emailInput, email)
//     .typeText(pwInput, pw)
//     .click(loginBtn)
//     .click(roundsModeBtn);

//   // (numCols * 4) + (numCols - 1)

//   //Click edit on 1st row
//   // let table = Selector("#roundsTable");
//   // let numCols = await table.find("td").count;
//   // let editId = numCols * 4 + (numCols - 1);
//   // let currentEdit = numCols.nth(.nth(editId);

//   const table = Selector("#roundsTable");
//   const ithRow = table.find("tr"); //Add 1 to this
//   const numRows = (await table.find("tr").count) - 1;
//   await t.expect(numRows).eql(1);

//   const currentRow = ithRow.nth(1);
//   const currentButton = currentRow.child("td").nth(3);

//   await t
//     .click(currentButton)
//     .wait(6000)

//     // Make assertions on values
//     .expect(courseInput.value)
//     .eql(setInput)
//     .expect(typeInput.value)
//     .eql(setType)
//     .expect(holesInput.value)
//     .eql(setHoles)
//     .expect(strokesInput.value)
//     .eql(setNumber)
//     .expect(minutesInput.value)
//     .eql(setNumber)
//     .expect(secondsInput.value)
//     .eql(setNumber)
//     .expect(notesInput.value)
//     .eql(setInput)

//     .wait(200);
// });

// var focusUpdateBtn = ClientFunction(() => {
//   document.getElementById("Update Button").focus();
// });
