//////////////////////////////////////////////////////////////////////////
//ROUTES FOR AUTHENTICATING USERS WITH PASSPORT
//////////////////////////////////////////////////////////////////////////

import passport from "passport";
import express from "express";
const authRoute = express.Router();

/*****************************************************************
 * GITHUB ROUTES
 *****************************************************************/

//AUTHENTICATE route: Uses passport to authenticate with GitHub.
//Should be accessed when user clicks on 'Login with GitHub' button on
//Log In page.
authRoute.get("/auth/github", passport.authenticate("github"));

//CALLBACK route:  GitHub will call this route after the
//OAuth authentication process is complete.
//req.isAuthenticated() tells us whether authentication was successful.
authRoute.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/"); //sends user back to login screen;
    //req.isAuthenticated() indicates status
  }
);

/*****************************************************************
 * GOOGLE ROUTES
 *****************************************************************/

//AUTHENTICATE route: Uses passport to authenticate with Google.
//Should be accessed when user clicks on 'Login with Google' button on
//Log In page.
authRoute.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

//CALLBACK route:  Google will call this route after the
//OAuth authentication process is complete.
//req.isAuthenticated() tells us whether authentication was successful.
//0101
authRoute.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // console.log("auth/google/callback reached.");
    res.redirect("/"); //sends user back to login screen;
    //req.isAuthenticated() indicates status
  }
);

//LOGOUT route: Use passport's req.logout() method to log the user out and
//redirect the user to the main app page. req.isAuthenticated() is toggled to false.
authRoute.get("/auth/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

//TEST route: Tests whether user was successfully authenticated.
//Should be called from the React.js client to set up app state.
authRoute.get("/auth/test", (req, res) => {
  const isAuth = req.isAuthenticated();

  if (isAuth) {
    // console.log("User record tied to session: " + JSON.stringify(req.user));
  } else {
    //User is not authenticated
  }

  //Return JSON object to client with results.
  res.json({ isAuthenticated: isAuth, user: req.user });
});

//LOGIN route: Attempts to log in user using local strategy
authRoute.post(
  "/auth/login",
  passport.authenticate("local"),
  // passport.authenticate("local", { failWithError: true }),
  (req, res) => {
    //Redirect to app's main page; the /auth/test route should return true
    res.status(200).send("Login successful");
  },
  (err, req, res, next) => {
    if (req.authError) {
      res.status(401).send(req.authError);
    } else {
      res
        .status(401)
        .send(
          "Unexpected error occurred when attempting to authenticate. Please try again."
        );
    }
  }
);

export default authRoute;
