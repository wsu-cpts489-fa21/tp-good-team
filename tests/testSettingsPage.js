import { Selector } from "testcafe";
import { nanoid } from "nanoid";

const email = "testUser_" + nanoid() + "@email.com";
const pw = "nthnthNTH8";
const badInput = "u";
const setInput = "AAAAAAAAAA";
const newInput = "BBBBBBBBBB";
const setDateInput = "08181985";
const newDateInput = "11011989";
const setNumber = "40";
const newNumber = "50";

//Input fields
const emailInput = Selector("#email");
const pwInput = Selector("#password");
const spPwInput = Selector("#spPassword");
const spEmail = Selector("#profileEmail");
const spPassword = Selector("#spPassword");
const spSecurityQuestion = Selector("#spSecurityQuestion");
const spSecurityAnswer = Selector("#spSecurityAnswer");
const searchBox = Selector("#searchBox");
const spDisplayNameInput = Selector("#spDisplayName");
const sgBioInput = Selector("#sgBio");
const sgFirstRound = Selector("#sgFirstRound");
const sgHomeCourseInput = Selector("#sgHomeCourse");
const sgBestStrokesInput = Selector("#sgBestStrokes");
const sgBestMinutesInput = Selector("#sgBestMinutes");
const sgBestSecondsInput = Selector("#sgBestSeconds");
const sgBestCourseInput = Selector("#sgBestCourse");
const sgClubCommentsInput = Selector("#sgClubComments");

//Boxes
const sgDriverBox = Selector("#sgDriver");
const sg3WBox = Selector("#sg3W");
const sg4WBox = Selector("#sg4W");
const sg5WBox = Selector("#sg5W");
const sgHybridBox = Selector("#sgHybrid");
const sg1IBox = Selector("#sg1I");
const sg2IBox = Selector("#sg2I");
const sg3IBox = Selector("#sg3I");
const sg4IBox = Selector("#sg4I");
const sg5IBox = Selector("#sg5I");
const sg6IBox = Selector("#sg6I");
const sg7IBox = Selector("#sg7I");
const sg8IBox = Selector("#sg8I");
const sg9IBox = Selector("#sg9I");
const sgPWBox = Selector("#sgPW");
const sgGWBox = Selector("#sgGW");
const sgSWBox = Selector("#sgSW");
const sgLWBox = Selector("#sgLW");
const sgPutterBox = Selector("#sgPutter");

//Buttons
const loginBtn = Selector("#loginBtn");
const profileBtn = Selector("#profileBtn");
const feedModeBtn = Selector("#feedMode");
const searchBtn = Selector("#searchBtn");
const coursesModeBtn = Selector("#coursesMode");
const buddiesModeBtn = Selector("#buddiesMode");
const roundsModeBtn = Selector("#roundsMode");
const menuBtn = Selector("#menuBtn");
const cancelUpdateProfileBtn = Selector("#cancelUpdateProfileBtn");
const submitUpdateProfileBtn = Selector("#submitUpdateProfileBtn");
const accordionAccountSettingsBtn = Selector("#accountSettingsBtn");
const accordionProfileBtn = Selector("#profileSettingsBtn");
const accordionSgBtn = Selector("#sgSettingsBtn");
const logoutBtn = Selector("#logout");

//Dialogs Pages
const profileSettingsDialog = Selector("#profileSettingsDialog");
const roundsModeTab = Selector("#roundsModeTab");
const feedModeTab = Selector("#feedModeTab");
const accordionPanelAccount = Selector("#accountSettingsPanel");
const accordionPanelProfile = Selector("#profileSettingsPanel");
const accordionPanelSg = Selector("#sgSettingsPanel");

//Validation
const spErrorBox = Selector("#spErrorBox");
const spPasswordError = Selector("#spPasswordError");
const spSecurityQuestionError = Selector("#spSecurityQuestionError");
const spSecurityAnswerError = Selector("#spSecurityAnswerError");

// prettier-ignore
fixture `Settings Page Tests`.page `http://localhost:8081/`;

// test("Ensure we can run the test", () => {
//   ReactDOM.render(<App />, document.getElementById("root"));
// });

test("Render Settings Page", async (t) => {
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
    .typeText(emailInput, email)
    .typeText(pwInput, pw)
    .click(loginBtn)

    //Clicks profile button
    .click(profileBtn)
    .expect(profileSettingsDialog.visible)
    .eql(true);
});

test("Accordion tabs expand and contract", async (t) => {
  await t

    //Logs into App
    .typeText(emailInput, email)
    .typeText(pwInput, pw)
    .click(loginBtn)

    //Navigate to account settings
    //Click the accordions
    .click(profileBtn)

    //Account accordions
    .click(accordionAccountSettingsBtn)
    .expect(accordionPanelAccount.visible)
    .eql(true)
    .click(accordionAccountSettingsBtn)
    .expect(accordionPanelAccount.visible)
    .eql(false)

    //Profile accordions
    .click(accordionProfileBtn)
    .expect(accordionPanelProfile.visible)
    .eql(true)
    .click(accordionProfileBtn)
    .expect(accordionPanelProfile.visible)
    .eql(false)

    //SG accordions
    .click(accordionSgBtn)
    .expect(accordionPanelSg.visible)
    .eql(true)
    .click(accordionSgBtn)
    .expect(accordionPanelSg.visible)
    .eql(false);
});

test("Cancel returns to previous screen", async (t) => {
  await t

    //Logs into App
    .typeText(emailInput, email)
    .typeText(pwInput, pw)
    .click(loginBtn)

    //Navigate to rounds mode
    //Navigate to profile page
    //Cancel
    .click(roundsModeBtn)
    .click(profileBtn)
    .click(cancelUpdateProfileBtn)

    //Assertion
    .expect(roundsModeTab.visible)
    .eql(true);
});

test("Update returns to previous screen", async (t) => {
  await t

    //Logs into App
    .typeText(emailInput, email)
    .typeText(pwInput, pw)
    .click(loginBtn)

    //Navigate to rounds mode
    //Navigate to profile page
    //Cancel
    .click(roundsModeBtn)
    .click(profileBtn)
    .click(accordionAccountSettingsBtn)
    .typeText(spPwInput, pw)
    .click(submitUpdateProfileBtn)

    //Assertion
    .expect(roundsModeTab.visible)
    .eql(true);
});

// Error handling
test("Validation", async (t) => {
  await t

    //Logs into App
    .typeText(emailInput, email)
    .typeText(pwInput, pw)
    .click(loginBtn)

    .click(profileBtn)
    .click(accordionAccountSettingsBtn)
    .click(spPassword)
    .pressKey("ctrl+a delete")
    .click(spSecurityQuestion)
    .pressKey("ctrl+a delete")
    .click(spSecurityAnswer)
    .pressKey("ctrl+a delete")
    .click(submitUpdateProfileBtn)

    //Assertions
    // Error box and all three errors visible. PW has focus
    .expect(spErrorBox.visible)
    .eql(true)
    .expect(spPasswordError.visible)
    .eql(true)
    .expect(spSecurityQuestionError.visible)
    .eql(true)
    .expect(spSecurityAnswerError.visible)
    .eql(true)
    .expect(spPasswordError.focused)
    .eql(true)

    //Enter accurate PW data
    // Error box and both Security Qs visible. Security Question has focus
    .typeText(spPassword, pw)
    .click(submitUpdateProfileBtn)
    .expect(spErrorBox.visible)
    .eql(true)
    .expect(spPasswordError.visible)
    .eql(false)
    .expect(spSecurityQuestionError.visible)
    .eql(true)
    .expect(spSecurityAnswerError.visible)
    .eql(true)
    .expect(spSecurityQuestionError.focused)
    .eql(true)

    //Enter accurate security question
    // Error box and Secuiryt Answer visible. Security Answer has focus
    .typeText(spSecurityQuestion, pw)
    .click(submitUpdateProfileBtn)
    .expect(spErrorBox.visible)
    .eql(true)
    .expect(spPasswordError.visible)
    .eql(false)
    .expect(spSecurityQuestionError.visible)
    .eql(false)
    .expect(spSecurityAnswerError.visible)
    .eql(true)
    .expect(spSecurityAnswerError.focused)
    .eql(true)

    //Enter accurate security answer
    // Screen should be feedmode
    .typeText(spSecurityAnswer, pw)
    .click(submitUpdateProfileBtn)
    .expect(profileSettingsDialog.visible)
    .eql(false)
    .expect(feedModeTab.visible)
    .eql(true);
});

test("No unnecessary buttons render", async (t) => {
  await t

    //Logs into App
    .typeText(emailInput, email)
    .typeText(pwInput, pw)
    .click(loginBtn)

    //Navigate to profile page
    .click(profileBtn)

    // We should no longer see:
    // - Menu
    // - Search bar
    // - Feed Courses Rounds Buddies mode tab buttons
    // - Profile button
    .expect(menuBtn.visible)
    .eql(false)
    .expect(feedModeBtn.visible)
    .eql(false)
    .expect(searchBtn.visible)
    .eql(false)
    .expect(coursesModeBtn.visible)
    .eql(false)
    .expect(roundsModeBtn.visible)
    .eql(false)
    .expect(buddiesModeBtn.visible)
    .eql(false)
    .expect(profileBtn.visible)
    .eql(false);
});

test("Data is saved", async (t) => {
  // This first section is setting all input to 'setInput'
  // Unable to test the date field
  await t

    //Logs into App
    .typeText(emailInput, email)
    .typeText(pwInput, pw)
    .click(loginBtn)

    //Navigate to profile page
    .click(profileBtn)

    //Account Accordion
    //Click on the fields
    //Clear field
    //Enter new data
    .click(accordionAccountSettingsBtn)
    .click(spPwInput)
    .pressKey("ctrl+a delete")
    .typeText(spPwInput, pw)

    .click(spSecurityQuestion)
    .pressKey("ctrl+a delete")
    .typeText(spSecurityQuestion, setInput)

    .click(spSecurityAnswer)
    .pressKey("ctrl+a delete")
    .typeText(spSecurityAnswer, setInput)

    //Name & Picture
    //Click on the fields
    //Clear field
    //Enter new data
    .click(accordionProfileBtn)
    .click(spDisplayNameInput)
    .pressKey("ctrl+a delete")
    .typeText(spDisplayNameInput, setInput)

    //Speedgolf Info
    //Click on the fields
    //Clear field
    //Enter new data
    .click(accordionSgBtn)
    .click(sgBioInput)
    .pressKey("ctrl+a delete")
    .typeText(sgBioInput, setInput)

    // .click(sgFirstRound)
    // .typeText(sgFirstRound, setDateInput)

    .click(sgHomeCourseInput)
    .pressKey("ctrl+a delete")
    .typeText(sgHomeCourseInput, setInput)

    .click(sgBestStrokesInput)
    .pressKey("ctrl+a delete")
    .typeText(sgBestStrokesInput, setNumber)

    .click(sgBestMinutesInput)
    .pressKey("ctrl+a delete")
    .typeText(sgBestMinutesInput, setNumber)

    .click(sgBestSecondsInput)
    .pressKey("ctrl+a delete")
    .typeText(sgBestSecondsInput, setNumber)

    .click(sgBestCourseInput)
    .pressKey("ctrl+a delete")
    .typeText(sgBestCourseInput, setInput)

    .click(sgClubCommentsInput)
    .pressKey("ctrl+a delete")
    .typeText(sgClubCommentsInput, setInput)

    //Click all the clubs
    .click(sgDriverBox)
    .click(sg3WBox)
    .click(sg4WBox)
    .click(sg5WBox)
    .click(sgHybridBox)
    .click(sg1IBox)
    .click(sg2IBox)
    .click(sg3IBox)
    .click(sg4IBox)
    .click(sg5IBox)
    .click(sg6IBox)
    .click(sg7IBox)
    .click(sg8IBox)
    .click(sg9IBox)
    .click(sgPWBox)
    .click(sgGWBox)
    .click(sgSWBox)
    .click(sgLWBox)
    .click(sgPutterBox)
    .click(submitUpdateProfileBtn)
    .click(menuBtn)
    .click(logoutBtn)

    //Log back into the app
    //Logs into App
    .typeText(emailInput, email)
    .typeText(pwInput, pw)
    .click(loginBtn)

    //Navigate to profile page
    .click(profileBtn)
    .click(accordionAccountSettingsBtn)
    .click(accordionProfileBtn)
    .click(accordionSgBtn)

    //Assert that everything has initial values
    .expect(spSecurityQuestion.value)
    .eql(setInput)
    .expect(spSecurityAnswer.value)
    .eql(setInput)
    .expect(spDisplayNameInput.value)
    .eql(setInput)
    .expect(sgBioInput.value)
    .eql(setInput)
    .expect(sgHomeCourseInput.value)
    .eql(setInput)
    .expect(sgBestStrokesInput.value)
    .eql(setNumber)
    .expect(sgBestMinutesInput.value)
    .eql(setNumber)
    .expect(sgBestSecondsInput.value)
    .eql(setNumber)
    .expect(sgBestCourseInput.value)
    .eql(setInput)
    .expect(sgClubCommentsInput.value)
    .eql(setInput)
    .expect(sgDriverBox.checked)
    .eql(true)
    .expect(sg3WBox.checked)
    .eql(true)
    .expect(sg4WBox.checked)
    .eql(true)
    .expect(sg5WBox.checked)
    .eql(true)
    .expect(sgHybridBox.checked)
    .eql(true)
    .expect(sg1IBox.checked)
    .eql(true)
    .expect(sg2IBox.checked)
    .eql(true)
    .expect(sg3IBox.checked)
    .eql(true)
    .expect(sg4IBox.checked)
    .eql(true)
    .expect(sg5IBox.checked)
    .eql(true)
    .expect(sg6IBox.checked)
    .eql(true)
    .expect(sg7IBox.checked)
    .eql(true)
    .expect(sg8IBox.checked)
    .eql(true)
    .expect(sg9IBox.checked)
    .eql(true)
    .expect(sgPWBox.checked)
    .eql(true)
    .expect(sgGWBox.checked)
    .eql(true)
    .expect(sgSWBox.checked)
    .eql(true)
    .expect(sgLWBox.checked)
    .eql(true)
    .expect(sgPutterBox.checked)
    .eql(true)

    /*****************************************************************
     * Now change all values to newInput and make assertions
     *****************************************************************   */

    //Account Accordion
    //Click on the fields
    //Clear field
    //Enter new data
    .click(spPwInput)
    .pressKey("ctrl+a delete")
    .typeText(spPwInput, pw)

    .click(spSecurityQuestion)
    .pressKey("ctrl+a delete")
    .typeText(spSecurityQuestion, newInput)

    .click(spSecurityAnswer)
    .pressKey("ctrl+a delete")
    .typeText(spSecurityAnswer, newInput)

    //Name & Picture
    //Click on the fields
    //Clear field
    //Enter new data
    .click(spDisplayNameInput)
    .pressKey("ctrl+a delete")
    .typeText(spDisplayNameInput, newInput)

    //Speedgolf Info
    //Click on the fields
    //Clear field
    //Enter new data
    .click(sgBioInput)
    .pressKey("ctrl+a delete")
    .typeText(sgBioInput, newInput)

    // .click(sgFirstRound)
    // .typeText(sgFirstRound, setDateInput)

    .click(sgHomeCourseInput)
    .pressKey("ctrl+a delete")
    .typeText(sgHomeCourseInput, newInput)

    .click(sgBestStrokesInput)
    .pressKey("ctrl+a delete")
    .typeText(sgBestStrokesInput, newNumber)

    .click(sgBestMinutesInput)
    .pressKey("ctrl+a delete")
    .typeText(sgBestMinutesInput, newNumber)

    .click(sgBestSecondsInput)
    .pressKey("ctrl+a delete")
    .typeText(sgBestSecondsInput, newNumber)

    .click(sgBestCourseInput)
    .pressKey("ctrl+a delete")
    .typeText(sgBestCourseInput, newInput)

    .click(sgClubCommentsInput)
    .pressKey("ctrl+a delete")
    .typeText(sgClubCommentsInput, newInput)

    //Click all the clubs
    .click(sgDriverBox)
    .click(sg3WBox)
    .click(sg4WBox)
    .click(sg5WBox)
    .click(sgHybridBox)
    .click(sg1IBox)
    .click(sg2IBox)
    .click(sg3IBox)
    .click(sg4IBox)
    .click(sg5IBox)
    .click(sg6IBox)
    .click(sg7IBox)
    .click(sg8IBox)
    .click(sg9IBox)
    .click(sgPWBox)
    .click(sgGWBox)
    .click(sgSWBox)
    .click(sgLWBox)
    .click(sgPutterBox)
    .click(submitUpdateProfileBtn)
    .click(menuBtn)
    .click(logoutBtn)

    //Log back into the app
    //Logs into App
    .typeText(emailInput, email)
    .typeText(pwInput, pw)
    .click(loginBtn)

    //Navigate to profile page
    .click(profileBtn)
    .click(accordionAccountSettingsBtn)
    .click(accordionProfileBtn)
    .click(accordionSgBtn)

    //Assert that everything has initial values
    .expect(spSecurityQuestion.value)
    .eql(newInput)
    .expect(spSecurityAnswer.value)
    .eql(newInput)
    .expect(spDisplayNameInput.value)
    .eql(newInput)
    .expect(sgBioInput.value)
    .eql(newInput)
    .expect(sgHomeCourseInput.value)
    .eql(newInput)
    .expect(sgBestStrokesInput.value)
    .eql(newNumber)
    .expect(sgBestMinutesInput.value)
    .eql(newNumber)
    .expect(sgBestSecondsInput.value)
    .eql(newNumber)
    .expect(sgBestCourseInput.value)
    .eql(newInput)
    .expect(sgClubCommentsInput.value)
    .eql(newInput)
    .expect(sgDriverBox.checked)
    .eql(false)
    .expect(sg3WBox.checked)
    .eql(false)
    .expect(sg4WBox.checked)
    .eql(false)
    .expect(sg5WBox.checked)
    .eql(false)
    .expect(sgHybridBox.checked)
    .eql(false)
    .expect(sg1IBox.checked)
    .eql(false)
    .expect(sg2IBox.checked)
    .eql(false)
    .expect(sg3IBox.checked)
    .eql(false)
    .expect(sg4IBox.checked)
    .eql(false)
    .expect(sg5IBox.checked)
    .eql(false)
    .expect(sg6IBox.checked)
    .eql(false)
    .expect(sg7IBox.checked)
    .eql(false)
    .expect(sg8IBox.checked)
    .eql(false)
    .expect(sg9IBox.checked)
    .eql(false)
    .expect(sgPWBox.checked)
    .eql(false)
    .expect(sgGWBox.checked)
    .eql(false)
    .expect(sgSWBox.checked)
    .eql(false)
    .expect(sgLWBox.checked)
    .eql(false)
    .expect(sgPutterBox.checked)
    .eql(false);
});
