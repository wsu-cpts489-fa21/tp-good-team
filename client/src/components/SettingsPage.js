import { faThemeisle } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import logo from "../images/sslogo2.png";
import profilePic from "./../images/DefaultProfilePic.jpg";

class SettingsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //Expanded Accordion checks
      accountExpanded: false,
      nameAndPictureExpanded: false,
      speedgolfInfoExpanded: false,
      //Validity checks
      // emailValid: true,
      securityQuestionValid: true,
      securityAnswerValid: true,
      passwordValid: true,
      //Configurable fields
      id: this.props.userData.accountData.id,
      securityQuestion: this.props.userData.accountData.securityQuestion,
      securityAnswer: this.props.userData.accountData.securityAnswer,
      displayName: this.props.userData.identityData.displayName,
      profilePic: this.props.userData.identityData.profilePic,
      bio: this.props.userData.speedgolfData.bio,
      homeCourse: this.props.userData.speedgolfData.homeCourse,
      firstRound: this.props.userData.speedgolfData.firstRound,
      strokes: this.props.userData.speedgolfData.personalBest.strokes,
      minutes: this.props.userData.speedgolfData.personalBest.minutes,
      seconds: this.props.userData.speedgolfData.personalBest.seconds,
      course: this.props.userData.speedgolfData.personalBest.course,
      driver: this.props.userData.speedgolfData.clubs.driver,
      threeW: this.props.userData.speedgolfData.clubs.threeW,
      fourW: this.props.userData.speedgolfData.clubs.fourW,
      fiveW: this.props.userData.speedgolfData.clubs.fiveW,
      hybrid: this.props.userData.speedgolfData.clubs.hybrid,
      oneI: this.props.userData.speedgolfData.clubs.oneI,
      twoI: this.props.userData.speedgolfData.clubs.twoI,
      threeI: this.props.userData.speedgolfData.clubs.threeI,
      fourI: this.props.userData.speedgolfData.clubs.fourI,
      fiveI: this.props.userData.speedgolfData.clubs.fiveI,
      sixI: this.props.userData.speedgolfData.clubs.sixI,
      sevenI: this.props.userData.speedgolfData.clubs.sevenI,
      eightI: this.props.userData.speedgolfData.clubs.eightI,
      nineI: this.props.userData.speedgolfData.clubs.nineI,
      pw: this.props.userData.speedgolfData.clubs.pw,
      gw: this.props.userData.speedgolfData.clubs.gw,
      sw: this.props.userData.speedgolfData.clubs.sw,
      lw: this.props.userData.speedgolfData.clubs.lw,
      putter: this.props.userData.speedgolfData.clubs.putter,
      clubComments: this.props.userData.speedgolfData.clubComments,
    };
    this.formSubmitted = false;
    this.securityQuestionError = React.createRef();
    this.securityAnswerError = React.createRef();
    this.passwordError = React.createRef();
  }

  componentDidUpdate() {
    if (this.formSubmitted) {
      if (!this.state.securityAnswerValid) {
        this.securityAnswerError.current.focus();
      }
      if (!this.state.securityQuestionValid) {
        this.securityQuestionError.current.focus();
      }
      if (!this.state.passwordValid) {
        this.passwordError.current.focus();
      }
      // if (!this.state.emailValid) {
      //   this.emailError.current.focus();
      // }
      this.formSubmitted = false;
    }
  }

  /*****************************************************************
   * Methods for expanding and contracting accordion sections
   ***************************************************************** */
  toggleAccount = () => {
    this.setState((prevState) => ({
      accountExpanded: !prevState.accountExpanded,
    }));
  };
  toggleNameAndPicture = () => {
    this.setState((prevState) => ({
      nameAndPictureExpanded: !prevState.nameAndPictureExpanded,
    }));
  };
  toggleSpeedgolfInfo = () => {
    this.setState((prevState) => ({
      speedgolfInfoExpanded: !prevState.speedgolfInfoExpanded,
    }));
  };

  /*****************************************************************
   * Validation Methods
   ***************************************************************** */
  //  emailIsValid = (email) => {
  //   const re =
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(String(email).toLowerCase());
  // };

  passwordIsValid = (pass) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return re.test(String(pass));
  };

  /*****************************************************************
   * Handlers
   ***************************************************************** */

  handleChange = (event) => {
    if (event.target.name !== "profilePic") {
      this.setState({ [event.target.name]: event.target.value });
      return;
    }
    if (event.target.value.length === 0) {
      this.setState({ profilePic: "" });
    } else {
      const self = this;
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", function () {
        self.setState({ profilePic: this.result });
      });
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    //Is security Q and A valid?
    const sqValid = this.state.securityQuestion.length > 0;
    const saValid = this.state.securityAnswer.length > 0;
    const pValid = this.passwordIsValid(this.state.password);

    if (pValid && sqValid && saValid) {
      //Necessary fields are valid: Update account
      const newUserData = {
        accountData: {
          id: this.state.id,
          password: this.props.userData.accountData.password,
          securityQuestion: this.state.securityQuestion,
          securityAnswer: this.state.securityAnswer,
        },
        identityData: {
          displayName: this.state.displayName,
          profilePic: this.state.profilePic,
        },
        speedgolfData: {
          bio: this.state.bio,
          homeCourse: this.state.homeCourse,
          firstRound: this.state.firstRound,
          personalBest: {
            strokes: this.state.strokes,
            minutes: this.state.minutes,
            seconds: this.state.seconds,
            course: this.state.course,
          },
          clubs: {
            driver: this.state.driver,
            threeW: this.state.threeW,
            fourW: this.state.fourW,
            fiveW: this.state.fiveW,
            hybrid: this.state.hybrid,
            oneI: this.state.oneI,
            twoI: this.state.twoI,
            threeI: this.state.threeI,
            fourI: this.state.fourI,
            fiveI: this.state.fiveI,
            sixI: this.state.sixI,
            sevenI: this.state.sevenI,
            eightI: this.state.eightI,
            nineI: this.state.nineI,
            pw: this.state.pw,
            gw: this.state.gw,
            sw: this.state.sw,
            lw: this.state.lw,
            putter: this.state.putter,
          },
          clubComments: this.state.clubComments,
        },
      };
      const result = await this.props.updateUserData(newUserData);
      this.props.toggleModalOpen();
      this.props.setMode(this.props.prevMode);
    } else {
      //At least one field invalid
      //Clear out invalid fields and display errors
      // const eVal = !eValid ? "" : this.state.email;
      const pVal = !pValid ? "" : this.state.password;

      this.formSubmitted = true; //Ensures error message gets focus
      this.setState({
        // email: eVal,
        password: pVal,
        passwordValid: pValid,
        // emailValid: eValid,
        passwordValid: pValid,
        securityQuestionValid: sqValid,
        securityAnswerValid: saValid,
      });
    }
  };

  /*****************************************************************
   * Error box
   ***************************************************************** */
  renderErrorBox = (e) => {
    if (
      // this.state.emailValid &&
      this.state.passwordValid &&
      this.state.securityQuestionValid &&
      this.state.securityAnswerValid
    ) {
      return null;
    }
    return (
      <p id="spErrorBox" className="alert alert-danger centered">
        {/* {!this.state.emailValid && (
          <a
            id="spEmailError"
            href="#email"
            className="alert-link"
            ref={this.emailError}
          >
            Enter a valid email address
            <br />
          </a>
        )} */}
        {!this.state.passwordValid && (
          <a
            id="spPasswordError"
            href="#password"
            className="alert-link"
            ref={this.passwordError}
          >
            Enter a valid password
            <br />
          </a>
        )}

        {!this.state.securityQuestionValid && (
          <a
            id="spSecurityQuestionError"
            href="#securityQuestion"
            className="alert-link"
            ref={this.securityQuestionError}
          >
            Enter a security question
            <br />
          </a>
        )}
        {!this.state.securityAnswerValid && (
          <a
            id="spSecurityAnswerError"
            href="#securityAnswer"
            className="alert-link"
            ref={this.securityAnswerError}
          >
            Enter a security answer
            <br />
          </a>
        )}
      </p>
    );
  };

  render() {
    return (
      <div
        id="profileSettingsDialog"
        className="mode-page"
        role="dialog"
        aria-modal="true"
        aria-labelledby="accountProfileHeader"
      >
        <h1 id="accountProfileHeader" className="mode-page-header">
          Account & Profile
        </h1>
        {this.renderErrorBox()}

        {/*****************************************************************
         * TODO: Section to display badges
         ******************************************************************/}

        {/*TODO: Render toast for badge info */}

        {/*TODO: If user has no badges, render a message about badges */}
        {/*TODO: If user has badges, render them*/}
        {/*TODO: If user (Hovers/Clicks) over badge, display info to the toast */}
        <form
          onSubmit={this.handleSubmit}
          id="editProfileForm"
          className="centered"
          novalidate
        >
          <div id="profileFormAccordion" className="accordion">
            {/*****************************************************************
             * Account Section
             *****************************************************************           */}
            <div className="accordion-item">
              <fieldset>
                <h2 className="accordion-header" id="accountHeader">
                  <button
                    id="accountSettingsBtn"
                    className={
                      "accordion-button " +
                      (!this.state.accountExpanded ? " collapsed" : " show")
                    }
                    onClick={() => this.toggleAccount()}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accountSettingsPanel"
                    aria-expanded="true"
                    aria-controls="accountSettingsPanel"
                  >
                    <legend>Account</legend>
                  </button>
                </h2>
                <div
                  id="accountSettingsPanel"
                  className={
                    "accordion-collapse " +
                    (!this.state.accountExpanded ? " collapse" : " show")
                  }
                  aria-labelledby="accountHeader"
                  data-bs-parent="#profileFormAccordion"
                >
                  <div className="accordion-body">
                    <div className="mb-3">
                      <label htmlFor="profileEmail" className="form-label">
                        Email:
                        <input
                          onChange={this.handleChange}
                          value={this.state.id}
                          name="id"
                          id="profileEmail"
                          type="email"
                          className="form-control centered"
                          aria-describedby="profileEmailDescr"
                        />
                      </label>
                      <div id="profileEmailDescr" className="form-text">
                        Enter a valid email address (e.g., 'name@domain.com').
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password:
                        <input
                          id="spPassword"
                          ref={this.password}
                          value={this.state.password}
                          onChange={this.handleChange}
                          name="password"
                          type="password"
                          className="form-control centered"
                          aria-describedby="passwordDescr"
                          // readonly
                        />
                      </label>
                      <div id="passwordDescr" className="form-text">
                        Use the "Reset Password" option on the Log In page to
                        reset your password.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="securityQuestion" className="form-label">
                        Security Question:
                        <textarea
                          id="spSecurityQuestion"
                          ref={this.securityQuestion}
                          onChange={this.handleChange}
                          value={this.state.securityQuestion}
                          name="securityQuestion"
                          // type="text"
                          className="form-control centered"
                          size="35"
                          rows="2"
                          cols="35"
                          maxLength="100"
                          aria-describedby="securityQuestionDescr"
                        />
                      </label>
                      <div
                        id="profileSecurityQuestionDescr"
                        className="form-text"
                      >
                        Your security question must be at least 5 characters and
                        should have a memorable answer. You will be asked this
                        question if you ever need to reset your password.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="securityAnswer" className="form-label">
                        Answer to Security Question:
                        <textarea
                          id="spSecurityAnswer"
                          ref={this.securityAnswer}
                          value={this.state.securityAnswer}
                          onChange={this.handleChange}
                          className="form-control centered"
                          name="securityAnswer"
                          type="text"
                          rows="2"
                          cols="35"
                          maxLength="100"
                          aria-describedby="securityAnswerDescr"
                        />
                      </label>
                      <div id="securityAnswerDescr" className="form-text">
                        Your security answer must be at least 5 characters and
                        should be something you easily associate your security
                        question. You will have to provide this answer if you
                        ever need to reset your password.
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
            {/*****************************************************************
             * Name & Picture Section
             *****************************************************************           */}
            <div className="accordion-item">
              <fieldset>
                <h2 id="profileHeader" className="accordion-header">
                  <button
                    id="profileSettingsBtn"
                    className={
                      "accordion-button " +
                      (!this.state.nameAndPictureExpanded
                        ? " collapsed"
                        : " show")
                    }
                    onClick={() => this.toggleNameAndPicture()}
                    // className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#profileSettingsPanel"
                    aria-expanded="false"
                    aria-controls="profileSettingsPanel"
                  >
                    <legend>Name & Picture</legend>
                  </button>
                </h2>
                <div
                  id="profileSettingsPanel"
                  className={
                    "accordion-collapse " +
                    (!this.state.nameAndPictureExpanded ? " collapse" : " show")
                  }
                  // className="accordion-collapse "
                  data-bs-parent="#profileFormAccordion"
                >
                  <div className="accordion-body">
                    <div className="mb-3">
                      <label htmlFor="displayName" className="form-label">
                        Display Name:
                        <br />
                        <input
                          onChange={this.handleChange}
                          value={this.state.displayName}
                          name="displayName"
                          id="spDisplayName"
                          type="text"
                          className="form-control centered"
                          size="35"
                          aria-describedby="displayNameDescr"
                        />
                      </label>
                      <div id="displayNameDescr" className="form-text">
                        Your display name is your identity within SpeedScore. It
                        must be at least 5 characters.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="profilePic" className="form-label">
                        Profile Picture (optional):
                        <br />
                        <img
                          id="acctProfilePicImage"
                          src={
                            this.state.profilePic === ""
                              ? profilePic
                              : this.state.profilePic
                          }
                          className="fm-profile-pic"
                          height="46"
                          width="auto"
                        />
                        <input
                          id="profilePic"
                          onChange={this.handleChange}
                          className="form-control centered"
                          name="profilePic"
                          type="file"
                          accept=".png, .gif, .jpg"
                          aria-describedby="profilePicDescr"
                        />
                      </label>
                      <div id="profilePicDescr" className="form-text">
                        Upload a profile picture as a .png, .gif, or .jpg file.
                        A rectangular head shot works best.
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>

            {/*****************************************************************
             * Speedgolf Info
             *****************************************************************           */}
            <div className="accordion-item">
              <fieldset>
                <h2 id="sgHeader" className="accordion-header">
                  <button
                    id="sgSettingsBtn"
                    className={
                      "accordion-button " +
                      (!this.state.speedgolfInfoExpanded
                        ? " collapsed"
                        : " show")
                    }
                    onClick={() => this.toggleSpeedgolfInfo()}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sgSettingsPanel"
                    aria-expanded="false"
                    aria-controls="sgSettingsPanel"
                  >
                    <legend>Speedgolf Info</legend>
                  </button>
                </h2>
                <div
                  id="sgSettingsPanel"
                  className={
                    "accordion-collapse " +
                    (!this.state.speedgolfInfoExpanded ? " collapse" : " show")
                  }
                  aria-labelledby="sgHeader"
                  data-bs-parent="#profileFormAccordion"
                >
                  <div className="accordion-body">
                    <div className="mb-3">
                      <label htmlFor="bio" className="form-label">
                        Personal Speedgolf Bio (optional):
                      </label>
                      <textarea
                        onChange={this.handleChange}
                        value={this.state.bio}
                        name="bio"
                        id="sgBio"
                        className="form-control"
                        aria-describedby="bioDescr"
                        rows="5"
                        cols="40"
                        maxlength="500"
                      ></textarea>
                      <div id="bioDescr" className="form-text">
                        A short personal bio about your speedgolf journey.
                        Maximum of 500 characters.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="firstRound" className="form-label">
                        Date of First Speedgolf Round (optional):
                      </label>
                      <input
                        id="sgFirstRound"
                        name="firstRound"
                        className="form-control centered"
                        type="date"
                        aria-describedby="firstRoundDescr"
                        value={this.state.firstRound}
                        onChange={this.handleChange}
                      />
                      <div id="firstRoundDescr" className="form-text">
                        Month and year in which you played your first speedgolf
                        round.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="sgHomeCourser" className="form-label">
                        Home Course (optional):
                      </label>
                      <input
                        onChange={this.handleChange}
                        value={this.state.homeCourse}
                        name="homeCourse"
                        type="text"
                        id="sgHomeCourse"
                        className="form-control centered"
                        aria-describedby="sgHomeCourseDescr"
                      />
                      <div id="sgHomeCourseDescr" className="form-text">
                        Course where you play most of your speedgolf.
                      </div>
                    </div>
                    <fieldset>
                      <legend className="fm-legend-sm">
                        Best 18-Hole Speedgolf Score (optional)
                      </legend>
                      <div className="mb-3">
                        <label htmlFor="sgBestStrokes" className="form-label">
                          Strokes:
                          <input
                            onChange={this.handleChange}
                            value={this.state.strokes}
                            name="strokes"
                            id="sgBestStrokes"
                            type="number"
                            className="form-control centered"
                            min="36"
                            max="200"
                            aria-describedby="sgBestScoreDescr"
                          />
                        </label>
                        <label htmlFor="sgBestMinutes" className="form-label">
                          Minutes:
                          <input
                            onChange={this.handleChange}
                            value={this.state.minutes}
                            name="minutes"
                            id="sgBestMinutes"
                            type="number"
                            className="form-control centered"
                            min="36"
                            max="200"
                            aria-describedby="sgBestScoreDescr"
                          />
                        </label>
                        <label htmlFor="sgBestSeconds" className="form-label">
                          Seconds:
                          <input
                            onChange={this.handleChange}
                            value={this.state.seconds}
                            name="seconds"
                            id="sgBestSeconds"
                            type="number"
                            className="form-control centered"
                            min="0"
                            max="59"
                            aria-describedby="sgBestScoreDescr"
                          />
                        </label>
                        <div id="sgBestScoreDescr" className="form-text">
                          Personal best speedgolf round in strokes (18-200),
                          minutes (18-200), and seconds (0-59) taken.
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="sgBestCourse" className="form-label">
                          Course Where Best Score Attained (optional):
                          <input
                            onChange={this.handleChange}
                            value={this.state.course}
                            name="course"
                            id="sgBestCourse"
                            type="text"
                            className="form-control centered"
                            aria-describedby="sgBestCourseDescr"
                          />
                        </label>
                        <div id="sgBestCourseDescr" className="form-text">
                          Name of course where you shot your best speedgolf
                          score. Must be at least 10 characters.
                        </div>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend className="fm-legend-sm">
                        Clubs in Bag (optional)
                      </legend>
                      <div id="clubsDiv" className="mb-3">
                        <input
                          name="driver"
                          checked={this.state.driver ? true : false}
                          onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                          id="sgDriver"
                          type="checkbox"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sgDriver">Driver</label>
                        <input
                          checked={this.state.threeW ? true : false}
                          onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                          name="threeW"
                          id="sg3W"
                          type="checkbox"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg3W">3W</label>
                        <input
                          checked={this.state.fourW ? true : false}
                          onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                          name="fourW"
                          id="sg4W"
                          type="checkbox"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg4W">4W</label>
                        <input
                          checked={this.state.fiveW ? true : false}
                          onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                          name="fiveW"
                          id="sg5W"
                          type="checkbox"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg5W">5W</label>
                        <input
                          checked={this.state.hybrid ? true : false}
                          onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                          name="hybrid"
                          id="sgHybrid"
                          type="checkbox"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sgHybrid">Hybrid</label>
                        <br />
                        <input
                          checked={this.state.oneI ? true : false}
                          onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                          name="oneI"
                          id="sg1I"
                          type="checkbox"
                          aria-describedby="1I"
                        />
                        <label>1I</label>
                        <input
                          checked={this.state.twoI ? true : false}
                          onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                          name="twoI"
                          id="sg2I"
                          type="checkbox"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg2I">2I</label>
                        <input
                          checked={this.state.threeI ? true : false}
                          onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                          name="threeI"
                          id="sg3I"
                          type="checkbox"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg3I">3I</label>
                        <input
                          checked={this.state.fourI ? true : false}
                          onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                          name="fourI"
                          id="sg4I"
                          type="checkbox"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg4I">4I</label>
                        <input
                          checked={this.state.fiveI ? true : false}
                          onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                          name="fiveI"
                          id="sg5I"
                          type="checkbox"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg5I">5I</label>
                        <input
                          checked={this.state.sixI ? true : false}
                          onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                          name="sixI"
                          id="sg6I"
                          type="checkbox"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg6I">6I</label>
                        <input
                          checked={this.state.sevenI ? true : false}
                          onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                          name="sevenI"
                          id="sg7I"
                          type="checkbox"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg7I">7I</label>
                        <input
                          checked={this.state.eightI ? true : false}
                          onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                          name="eightI"
                          id="sg8I"
                          type="checkbox"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg8I">8I</label>
                        <input
                          checked={this.state.nineI ? true : false}
                          onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                          name="nineI"
                          id="sg9I"
                          type="checkbox"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg9I">9I</label>
                        <br />
                        <input
                          checked={this.state.pw ? true : false}
                          onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                          name="pw"
                          id="sgPW"
                          type="checkbox"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sgPW">PW</label>
                        <input
                          checked={this.state.gw ? true : false}
                          onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                          name="gw"
                          id="sgGW"
                          type="checkbox"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sgGW">GW</label>
                        <input
                          checked={this.state.sw ? true : false}
                          onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                          name="sw"
                          id="sgSW"
                          type="checkbox"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sgSW">SW</label>
                        <input
                          checked={this.state.lw ? true : false}
                          onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                          name="lw"
                          id="sgLW"
                          type="checkbox"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sgLW">LW</label>
                        <br />
                        <input
                          checked={this.state.putter ? true : false}
                          onChange={(e) => {
                            this.handleChange({
                              target: {
                                name: e.target.name,
                                value: e.target.checked,
                              },
                            });
                          }}
                          name="putter"
                          id="sgPutter"
                          type="checkbox"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sgPutter">Putter</label>
                        <div id="sgClubsDescr" className="form-text">
                          Select the clubs you normally carry during a speedgolf
                          round.
                        </div>
                        <label htmlFor="sgClubComments" className="form-label">
                          Comments on Clubs (optional):
                        </label>
                        <textarea
                          onChange={this.handleChange}
                          value={this.state.clubComments}
                          name="clubComments"
                          id="sgClubComments"
                          className="form-control"
                          aria-describedby="sgClubCommentsDescr"
                        ></textarea>
                        <div id="sgClubCommentsDescr" className="form-text">
                          Describe your clubs in greater detail.
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="mode-page-btn-container">
            {/*****************************************************************
             * Submit button
             *****************************************************************             */}
            <button
              type="submit"
              id="submitUpdateProfileBtn"
              className="btn btn-primary dialog-primary-btn"
              aria-live="polite"
              aria-busy="false"
              // onClick={() => {
              //   this.props.toggleModalOpen();
              //   this.props.setMode(this.props.prevMode);
              // }}
            >
              <span
                id="editProfileBtnIcon"
                className="fas fa-user-edit"
                aria-hidden="true"
              ></span>
              &nbsp;Update
            </button>

            {/*****************************************************************
             * Cancel button
             *****************************************************************           */}
            <button
              type="button"
              id="cancelUpdateProfileBtn"
              className="btn btn-secondary dialog-cancel-btn"
              onClick={() => {
                this.props.toggleModalOpen();
                this.props.setMode(this.props.prevMode);
              }}
            >
              <span className="fas fa-window-close" aria-hidden="true"></span>
              &nbsp;Cancel
            </button>
          </div>
        </form>
      </div>
    ); //return
  } //render
} //class

export default SettingsPage;
