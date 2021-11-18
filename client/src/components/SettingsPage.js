import React from "react";
import logo from "../images/sslogo2.png";

/*****************************************************************
 * TODO
 * 1. Change onClick to handleSubmit functionality
 * 2. Fix error boxes to work properly
 *****************************************************************/

class SettingsPage extends React.Component {
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
        <p id="profileErrorBox" className="alert alert-danger centered">
          <a id="profileEmailError" href="#profileEmail" className="alert-link">
            Enter a valid email address
            <br />
          </a>
          <a
            id="profileDisplayNameError"
            href="#profileDisplayName"
            className="alert-link"
          >
            Enter a valid display name
            <br />
          </a>
          <a
            id="profileSecurityQuestionError"
            href="#profileSecurityQuestion"
            className="alert-link"
          >
            Enter a valid security question
            <br />
          </a>
          <a
            id="profileSecurityAnswerError"
            href="#profileSecurityAnswer"
            className="alert-link"
          >
            Enter a valid security question answer
          </a>
        </p>
        <form id="editProfileForm" className="centered" novalidate>
          <div id="profileFormAccordion" className="accordion">
            <div className="accordion-item">
              <fieldset>
                <h2 className="accordion-header" id="accountHeader">
                  <button
                    id="accountSettingsBtn"
                    className="accordion-button"
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
                  className="accordion-collapse collapse show"
                  aria-labelledby="accountHeader"
                  data-bs-parent="#profileFormAccordion"
                >
                  <div className="accordion-body">
                    <div className="mb-3">
                      <label htmlFor="profileEmail" className="form-label">
                        Email:
                        <input
                          id="profileEmail"
                          type="email"
                          className="form-control centered"
                          aria-describedby="profileEmailDescr"
                          required
                        />
                      </label>
                      <div id="profileEmailDescr" className="form-text">
                        Enter a valid email address (e.g., 'name@domain.com').
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="profilePassword" className="form-label">
                        Password:
                        <input
                          id="profilePassword"
                          type="password"
                          className="form-control centered"
                          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                          aria-describedby="profilePasswordDescr"
                          readonly
                        />
                      </label>
                      <div id="profilePasswordDescr" className="form-text">
                        Use the "Reset Password" option on the Log In page to
                        reset your password.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="profileSecurityQuestion"
                        className="form-label"
                      >
                        Security Question:
                        <input
                          id="profileSecurityQuestion"
                          type="text"
                          className="form-control centered"
                          minlength="5"
                          aria-describedby="profileSecurityQuestionDescr"
                          required
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
                      <label
                        htmlFor="profileSecurityAnswer"
                        className="form-label"
                      >
                        Answer to Security Question:
                        <input
                          id="profileSecurityAnswer"
                          type="text"
                          className="form-control centered"
                          minlength="5"
                          aria-describedby="profileSecurityAnswerDescr"
                          required
                        />
                      </label>
                      <div
                        id="profileSecurityAnswerDescr"
                        className="form-text"
                      >
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
            <div className="accordion-item">
              <fieldset>
                <h2 id="profileHeader" className="accordion-header">
                  <button
                    id="profileSettingsBtn"
                    className="accordion-button collapsed"
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
                  className="accordion-collapse collapse"
                  aria-labelledby="profileHeader"
                  data-bs-parent="#profileFormAccordion"
                >
                  <div className="accordion-body">
                    <div className="mb-3">
                      <label
                        htmlFor="profileDisplayName"
                        className="form-label"
                      >
                        Display Name:
                        <br />
                        <input
                          id="profileDisplayName"
                          type="text"
                          className="form-control centered"
                          minlength="5"
                          aria-describedby="profileDisplayNameDescr"
                          required
                        />
                      </label>
                      <div id="profileDisplayNameDescr" className="form-text">
                        Your display name is your identity within SpeedScore. It
                        must be at least 5 characters.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="profilePic" className="form-label">
                        Profile Picture (optional):
                        <br />
                        <img
                          id="profilePicImage"
                          src={logo}
                          alt="SpeedScore logo"
                          className="fm-profile-pic"
                          height="46"
                          width="auto"
                        />
                        <input
                          id="profilePic"
                          type="file"
                          className="form-control centered"
                          accept=".png, .gif, .jpg"
                          aria-describedby="profilePicDescr"
                          required
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
            <div className="accordion-item">
              <fieldset>
                <h2 id="sgHeader" className="accordion-header">
                  <button
                    id="sgSettingsBtn"
                    className="accordion-button collapsed"
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
                  className="accordion-collapse collapse"
                  aria-labelledby="sgHeader"
                  data-bs-parent="#profileFormAccordion"
                >
                  <div className="accordion-body">
                    <div className="mb-3">
                      <label htmlFor="sgBio" className="form-label">
                        Personal Speedgolf Bio (optional):
                      </label>
                      <textarea
                        id="sgBio"
                        className="form-control"
                        aria-describedby="sgBioDescr"
                        rows="5"
                        cols="40"
                        maxlength="500"
                      ></textarea>
                      <div id="sgBioDescr" className="form-text">
                        A short personal bio about your speedgolf journey.
                        Maximum of 500 characters.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="sgFirstRound" className="form-label">
                        Date of First Speedgolf Round (optional):
                      </label>
                      <input
                        type="month"
                        id="sgFirstRound"
                        className="form-control centered"
                        value="2021-07"
                        aria-describedby="sgFirstRoundDescr"
                      />
                      <div id="sgFirstRoundDescr" className="form-text">
                        Month and year in which you played your first speedgolf
                        round.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="sgHomeCourser" className="form-label">
                        Home Course (optional):
                      </label>
                      <input
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
                            id="sgBestCourse"
                            type="text"
                            className="form-control centered"
                            aria-describedby="sgBestCourseDescr"
                            minlength="10"
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
                          id="sgDriver"
                          type="checkbox"
                          name="Driver"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sgDriver">Driver</label>
                        <input
                          id="sg3W"
                          type="checkbox"
                          name="3W"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg3W">3W</label>
                        <input
                          id="sg4W"
                          type="checkbox"
                          name="4W"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg4W">4W</label>
                        <input
                          id="sg5W"
                          type="checkbox"
                          name="5W"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg5W">5W</label>
                        <input
                          id="sgHybrid"
                          type="checkbox"
                          name="Hybrid"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sgHybrid">Hybrid</label>
                        <br />
                        <input
                          id="sg1I"
                          type="checkbox"
                          name="1I"
                          aria-describedby="1I"
                        />
                        <label>1I</label>
                        <input
                          id="sg2I"
                          type="checkbox"
                          name="2I"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg2I">2I</label>
                        <input
                          id="sg3I"
                          type="checkbox"
                          name="3I"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg3I">3I</label>
                        <input
                          id="sg4I"
                          type="checkbox"
                          name="4I"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg4I">4I</label>
                        <input
                          id="sg5I"
                          type="checkbox"
                          name="5I"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg5I">5I</label>
                        <input
                          id="sg6I"
                          type="checkbox"
                          name="6I"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg6I">6I</label>
                        <input
                          id="sg7I"
                          type="checkbox"
                          name="7I"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg7I">7I</label>
                        <input
                          id="sg8I"
                          type="checkbox"
                          name="8I"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg8I">8I</label>
                        <input
                          id="sg9I"
                          type="checkbox"
                          name="9I"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sg9I">9I</label>
                        <br />
                        <input
                          id="sgPW"
                          type="checkbox"
                          name="PW"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sgPW">PW</label>
                        <input
                          id="sgGW"
                          type="checkbox"
                          name="GW"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sgGW">GW</label>
                        <input
                          id="sgSW"
                          type="checkbox"
                          name="SW"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sgSW">SW</label>
                        <input
                          id="sgLW"
                          type="checkbox"
                          name="LW"
                          aria-describedby="sgClubsDescr"
                        />
                        <label htmlFor="sgLW">LW</label>
                        <br />
                        <input
                          id="sgPutter"
                          type="checkbox"
                          name="Putter"
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
              onClick={() => {
                this.props.toggleModalOpen();
                this.props.setMode(this.props.prevMode);
              }}
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
