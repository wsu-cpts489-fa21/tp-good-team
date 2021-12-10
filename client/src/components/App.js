import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faWindowClose,
  faEdit,
  faCalendar,
  faSpinner,
  faSignInAlt,
  faBars,
  faTimes,
  faSearch,
  faSort,
  faTrash,
  faEye,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

import NavBar from "./NavBar.js";
import ModeTabs from "./ModeTabs.js";
import LoginPage from "./LoginPage.js";
import FeedPage from "./FeedPage.js";
import RoundsPage from "./RoundsPage.js";
import CoursesPage from "./CoursesPage.js";
import BuddiesPage from "./BuddiesPage.js";
import SideMenu from "./SideMenu.js";
import AppMode from "./AppMode.js";
import SettingsPage from "./SettingsPage";

library.add(
  faWindowClose,
  faEdit,
  faCalendar,
  faSpinner,
  faSignInAlt,
  faBars,
  faTimes,
  faSearch,
  faSort,
  faTrash,
  faEye,
  faUserPlus,
  faGithub,
  faGoogle
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: AppMode.LOGIN,
      menuOpen: false,
      modalOpen: false,
      prevMode: AppMode.LOGIN,

      userData: {
        accountData: {},
        identityData: {},
        numRounds: 1,
        speedgolfData: {},
        badges: {},
        rounds: [],
      },
      authenticated: false,
    };
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClick, true);
    if (!this.state.authenticated) {
      //Use /auth/test route to (re)-test authentication and obtain user data
      fetch("/auth/test")
        .then((response) => response.json())
        .then((obj) => {
          if (obj.isAuthenticated) {
            this.logInUser(obj.user);
          }
        });
    }
  }

  /*
   handleClick -- document-level click handler assigned in componentDidMount()
   using 'true' as third param to addEventListener(). This means that the event
   handler fires in the _capturing_ phase, not the default _bubbling_ phase.
   Thus, the event handler is fired _before_ any events reach their lowest-level
   target. If the menu is open, we want to close
   it if the user clicks anywhere _except_ on a menu item, in which case we
   want the menu item event handler to get the event (through _bubbling_).
   We identify this border case by comparing 
   e.target.getAttribute("role") to "menuitem". If that's NOT true, then
   we close the menu and stop propagation so event does not reach anyone
   else. However, if the target is a menu item, then we do not execute 
   the if body and the event bubbles to the target. 
  */

  handleClick = (e) => {
    if (this.state.menuOpen && e.target.getAttribute("role") !== "menuitem") {
      this.toggleMenuOpen();
      e.stopPropagation();
    }
  };

  /*
   * Menu item functionality
   */
  logOut = () => {
    this.setState({
      mode: AppMode.LOGIN,
      userData: {
        accountData: {},
        identityData: {},
        numRounds: 0,
        speedgolfData: {},
        badges: {},
        rounds: [],
      },
      authenticated: false,
      menuOpen: false,
    });
  };

  /*****************************************************************
   * User interface state management methods
   ***************************************************************** */

  //Updated to keep track of a previos mode when user exits popup modals
  setMode = (newMode) => {
    this.setState({
      prevMode: this.state.mode,
      mode: newMode,
    });
  };

  toggleMenuOpen = () => {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
  };

  toggleModalOpen = () => {
    this.setState((prevState) => ({ modalOpen: !prevState.modalOpen }));
  };

  /*****************************************************************
   * Account Management methods
   ***************************************************************** */

  accountExists = async (email) => {
    const res = await fetch("/user/" + email);
    return res.status === 200;
  };

  getAccountData = (email) => {
    return JSON.parse(localStorage.getItem(email));
  };

  authenticateUser = async (id, pw) => {
    const url = "/auth/login?username=" + id + "&password=" + pw;
    const res = await fetch(url, { method: "POST" });
    if (res.status == 200) {
      //successful login!
      return true;
    } else {
      //Unsuccessful login
      return false;
    }
  };

  logInUser = (userObj) => {
    this.setState({
      userData: userObj,
      mode: AppMode.FEED,
      authenticated: true,
    });
  };

  createAccount = async (data) => {
    const url = "/users/" + data.accountData.id;
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.status == 201) {
      return "New account created with email " + data.accountData.id;
    } else {
      const resText = await res.text();
      return "New account was not created. " + resText;
    }
  };

  updateUserData = async (newUserData) => {
    const url = "/users/" + this.state.userData.accountData.id;
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(newUserData),
    });

    if (res.status === 200) {
      this.setState({ userData: newUserData });
      return "Account " + newUserData.accountData.id + " successfully updated.";
    } else {
      const resText = await res.text();
      return "Unable to update account. " + resText;
    }
  };

  // incrementRounds = async () => {
  //   const res = await this.updateUserData(this.state.userData);
  // };


updateBadges = async (rounds, time, strokes, streak, score) => {
    const newBadgeData = {
      roundsPlayedBadge: rounds,
      fastTimeBadge: time,
      lowStrokesBadge: strokes,
      streakBadge: streak,
      highScoreBadge: score,
    };

    const newUserData = {
      accountData: this.state.userData.accountData,
      identityData: this.state.userData.identityData,
      numRounds: this.state.userData.numRounds,
      speedgolfData: this.state.userData.speedgolfData,
      badges: newBadgeData,
      rounds: this.state.userData.rounds,
    };

    this.setState({
      userData: newUserData,
    });

    const res = await this.updateUserData(newUserData);
  };

  /*****************************************************************
   * Round Management methods
   ******************************************************************/

  addRound = async (newRoundData) => {
    const url = "/rounds/" + this.state.userData.accountData.id;
    let res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(newRoundData),
    });
    if (res.status == 201) {
      const newRounds = [...this.state.userData.rounds];
      newRounds.push(newRoundData);

      const newUserData = {
        accountData: this.state.userData.accountData,
        identityData: this.state.userData.identityData,
        numRounds: this.state.userData.numRounds,
        speedgolfData: this.state.userData.speedgolfData,
        badges: this.state.userData.badges,
        rounds: newRounds,
      };

      //Incrementing Rounds
      newUserData.numRounds++;
      this.setState({ userData: newUserData });
      const resIncrement = await this.updateUserData(newUserData);

      return "New round logged.";
    } else {
      const resText = await res.text();
      return "New Round could not be logged. " + resText;
    }
  };

  updateRound = async (newRoundData, index) => {
    const url =
      "/rounds/" +
      this.state.userData.accountData.id +
      "/" +
      this.state.userData.rounds[index]._id; //Changed for customId
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(newRoundData),
    });

    if (res.status == 200) {
      const newRounds = [...this.state.userData.rounds];

      newRounds[index] = newRoundData;
      const newUserData = {
        accountData: this.state.userData.accountData,
        identityData: this.state.userData.identityData,
        numRounds: this.state.userData.numRounds,
        speedgolfProfileData: this.state.userData.speedgolfProfileData,
        badges: this.state.userData.badges,
        rounds: newRounds,
      };
      this.setState({ userData: newUserData });
      return "Round updated successfully";
    } else {
      const text = await res.text();
      return "Round could not be updated because of" + text;
    }
  };

  //TODO: Decrement numRounds
  deleteRound = async (id) => {
    const url =
      "/rounds/" +
      this.state.userData.accountData.id +
      "/" +
      this.state.userData.rounds[id]._id; //Changed to use customId

    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      method: "DELETE",
    });

    if (res.status == 200) {
      const newRounds = this.state.userData.rounds.filter(
        (item) => item._id !== this.state.userData.rounds[id]._id //Changed to use customId
      );

      const newUserData = {
        accountData: this.state.userData.accountData,
        identityData: this.state.userData.identityData,
        numRounds: this.state.userData.numRounds,
        speedgolfProfileData: this.state.userData.speedgolfProfileData,
        badges: this.state.userData.badges,
        rounds: newRounds,
      };
      newUserData.numRounds--;
      this.setState({ userData: newUserData });
    } else {
      const resText = await res.text();
      return "Unable to delete round.";
    }
  };

  render() {
    return (
      <>
        <NavBar
          mode={this.state.mode}
          menuOpen={this.state.menuOpen}
          toggleMenuOpen={this.toggleMenuOpen}
          modalOpen={this.state.modalOpen}
          toggleModalOpen={this.toggleModalOpen}
          userData={this.state.userData}
          updateUserData={this.updateUserData}
          setMode={this.setMode}
        />
        <ModeTabs
          mode={this.state.mode}
          setMode={this.setMode}
          menuOpen={this.state.menuOpen}
          modalOpen={this.state.modalOpen}
        />
        {this.state.menuOpen ? <SideMenu logOut={this.logOut} /> : null}
        {
          {
            LoginMode: (
              <LoginPage
                modalOpen={this.state.modalOpen}
                toggleModalOpen={this.toggleModalOpen}
                logInUser={this.logInUser}
                createAccount={this.createAccount}
                accountExists={this.accountExists}
                authenticateUser={this.authenticateUser}
              />
            ),
            FeedMode: (
              <FeedPage
                modalOpen={this.state.modalOpen}
                toggleModalOpen={this.toggleModalOpen}
                menuOpen={this.state.menuOpen}
                userId={this.state.userId}
              />
            ),
            RoundsMode: (
              <RoundsPage
                numRounds={this.state.userData.numRounds}
                badges={this.state.userData.badges}
                rounds={this.state.userData.rounds}
                addRound={this.addRound}
                updateRound={this.updateRound}
                deleteRound={this.deleteRound}
                toggleModalOpen={this.toggleModalOpen}
                modalOpen={this.state.modalOpen}
                menuOpen={this.state.menuOpen}
                userId={this.state.userId}
                updateBadges={this.updateBadges}
              />
            ),
            CoursesMode: (
              <CoursesPage
                modalOpen={this.state.modalOpen}
                toggleModalOpen={this.toggleModalOpen}
                menuOpen={this.state.menuOpen}
                userId={this.state.userId}
              />
            ),
            BuddiesMode: (
              <BuddiesPage
                modalOpen={this.state.modalOpen}
                toggleModalOpen={this.toggleModalOpen}
                menuOpen={this.state.menuOpen}
                userId={this.state.userId}
              />
            ),
            /*****************************************************************
             * Added Settings mode to be part of the render system.
             *****************************************************************           */
            SettingsMode: (
              <SettingsPage
                userData={this.state.userData}
                prevMode={this.state.prevMode}
                setMode={this.setMode}
                toggleModalOpen={this.toggleModalOpen}
                updateUserData={this.updateUserData}
              />
            ),
          }[this.state.mode]
        }
      </>
    );
  }
}
export default App;
