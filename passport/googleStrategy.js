//////////////////////////////////////////////////////////////////////////
//GoogleStrategy.js
//The following code sets up the app with OAuth authentication using
//////////////////////////////////////////////////////////////////////////
import passportGoogle from "passport-google-oauth20";
import User from "../models/User.js";

const googleStrategy = new passportGoogle.Strategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.DEPLOY_URL + "/auth/google/callback",
  },

  /*****************************************************************
   * - Construct unique id
   * - Use MongoDB `findOne()` to search collection for matching `accountData.email` that's equal to `userId`
   * - No User? Add using (asynchronous) `new User({...}).save()`, setting result to `currentUser`.
   * - Existing User? `currentUser` has user recod.
   * - `serealizeUser()` on `currentUser`
   ***************************************************************** */
  async (accessToken, refreshToken, profile, done) => {
    console.log("User authenticated through Google. In passport callback.");
    //Our convention is to build userId from displayName and provider
    const userId = `${profile.id}@${profile.provider}`;
    //See if document with this unique userId exists in database
    let currentUser = await User.findOne({ "accountData.id": userId });
    console.log("CURRENTUSER: " + currentUser);
    if (!currentUser) {
      //Add this user to the database
      currentUser = await new User({
        accountData: { id: userId },
        identityData: {
          displayName: profile.displayName,
          profilePic: profile.photos[0].value,
        },
        speedgolfData: {
          bio: "",
          homeCourse: "",
          personalBest: {},
          clubs: {},
          clubComments: "",
        },
      }).save();
    }
    return done(null, currentUser);
  }
);

export default googleStrategy;