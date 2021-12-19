import { Selector } from "testcafe";
import { nanoid } from "nanoid";

const pw = "nthnthNTH8";
const feedPostCard = Selector("#feedPostCard");
const feedPostLikes = Selector("#feedPostLikes");
const feedCommentCard = Selector("#feedCommentCard");
const feedCommentSection = Selector("#feedCommentSection");

//prettier-ignore
fixture`Testing UI properties for FeedMode`.page`http://localhost:8081`;

/*****************************************************************
 * When I log in and write a post and click comment,
 * The comment UI should appear
 *****************************************************************/
test("Clicking comment should open comment UI", async (t) => {
  const email = "Test_" + nanoid() + "@email.com";

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

    //Create a post
    .click("#feedModeActionBtn")
    .typeText("#feedPost", nanoid())
    .click("#feedModeActionBtn")

    //Open comment page
    .click("#feedPostCommentImg")

    //Make assumptions
    .expect(feedCommentSection.visible)
    .eql(true)

    .wait(1);
});

/*****************************************************************
 * When I log in and write a post and submit a comment
 * The comment should show up after I click back into the comment
 *****************************************************************/
test("Commenting on a post should show up in the Comment Feed", async (t) => {
  const email = "Test_" + nanoid() + "@email.com";

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

    //Create a post
    .click("#feedModeActionBtn")
    .typeText("#feedPost", nanoid())
    .click("#feedModeActionBtn")

    //Comment on post
    .click("#feedPostCommentImg")
    .click("#commentModeActionBtn")
    .typeText("#commentModeTextBox", nanoid())
    .click("#commentModeConfirmBtn")

    //Refresh page
    .click("#commentModeCloseBtn")
    .click("#feedPostCommentImg")
    .expect(feedCommentCard.exists)
    .eql(true)

    .wait(1);
});

/*****************************************************************
 * When I log in and write a post and click like, the number should increase
 *****************************************************************/
test("Liking a post should increase the like count", async (t) => {
  const email = "Test_" + nanoid() + "@email.com";

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

    //Create a post
    .click("#feedModeActionBtn")
    .typeText("#feedPost", nanoid())
    .click("#feedModeActionBtn")

    //Like the post
    .click("#feedPostLikeImg")
    .wait(3000);

  //Make assumptions
  const likeCount = await feedPostLikes.innerText;
  await t
    .expect(likeCount)
    .eql(" 1")

    //So I can save without BS happening!
    .wait(1);
});

/*****************************************************************
 * When I log in and create a post, I should see the post
 *****************************************************************/
test("Logging a post appears in table", async (t) => {
  const email = "Test_" + nanoid() + "@email.com";

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

    //Create a post
    .click("#feedModeActionBtn")
    .typeText("#feedPost", nanoid())
    .click("#feedModeActionBtn")

    //Make assumptions
    .expect(feedPostCard.exists)
    .eql(true)

    //So I can save without BS happening!
    .wait(1);
});

/*****************************************************************
 * When I log in and post a round, but cancel, the post should not
 * appear in the list
 *****************************************************************/
test("Cancelling a post does not save to table", async (t) => {
  const email = "Test_" + nanoid() + "@email.com";

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

    //Create a post
    .click("#feedModeActionBtn")
    .typeText("#feedPost", nanoid())
    .click("#feedModePostCancelBtn")

    //Make assumptions
    .expect(feedPostCard.exists)
    .eql(false)

    //So I can save without BS happening!
    .wait(1);
});

/*****************************************************************
 * When I log in and log a round, I sohuld see it show up in post
 *****************************************************************/
test("Logging a round shows in the Feed Mode", async (t) => {
  const email = "Test_" + nanoid() + "@email.com";

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

    //Log a round
    .click("#roundsMode")
    .click("#roundsModeActionBtn")
    .typeText("#roundCourse", "test_" + nanoid())
    .click("#roundFormSubmitBtnLabel")

    //Navigate to Feed Mode
    .click("#feedMode")

    //Make assumptions
    .expect(feedPostCard.exists)
    .eql(true)

    //So I can save without BS happening!
    .wait(1);
});

/*****************************************************************
 * When I log in and log a round, and click private, it should not
 * show up in post
 *****************************************************************/
test("Logging a private round should not show in Feed Mode", async (t) => {
  const email = "Test_" + nanoid() + "@email.com";

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

    //Log a round
    .click("#roundsMode")
    .click("#roundsModeActionBtn")
    .typeText("#roundCourse", "test_" + nanoid())
    .click("#roundFormPrivate")
    .click("#roundFormSubmitBtnLabel")

    //Navigate to Feed Mode
    .click("#feedMode")

    //Make assumptions
    .expect(feedPostCard.exists)
    .eql(false)

    //So I can save without BS happening!
    .wait(1);
});

/*****************************************************************
 test("XXX", async (t) => {
  const email = "Test_" + nanoid() + "@email.com";

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


    //So I can save without BS happening!
    .wait(1);
});
 *****************************************************************/
