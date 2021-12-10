import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import RoundsMode from "./RoundsMode.js";
import BadgeData from "./BadgeData.js";

class RoundForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.mode === RoundsMode.LOGROUND) {
      let today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000);
      this.state = {
        date: today.toISOString().substr(0, 10),
        _id: 0, //Added for customId
        course: "",
        type: "practice",
        holes: "18",
        strokes: 80,
        minutes: 60,
        seconds: "00",
        SGS: "140:00",
        notes: "",
        btnIcon: "calendar",
        btnLabel: "Log Round",
        newBadge: false,
        // newRoundsBadge: this.props.roundsBadge,
        // newTimeBadge: this.props.timeBadge,
        // newStrokesBadge: this.props.strokesBadge,
        // newStreakBadge: this.props.streakBadge,
        // newScoreBadge: this.props.scoreBadge,
      };
    } else {
      this.state = this.props.roundData;
      this.state.btnIcon = "edit";
      this.state.btnLabel = "Update Round";
    }
  }

  computeSGS = (strokes, min, sec) => {
    return Number(strokes) + Number(min) + ":" + sec;
  };

  handleChange = (event) => {
    const name = event.target.name;
    if (name === "seconds") {
      const newSec =
        event.target.value.length < 2
          ? "0" + event.target.value
          : event.target.value;
      const newSGS = this.computeSGS(
        this.state.strokes,
        this.state.minutes,
        newSec
      );
      this.setState({ seconds: newSec, SGS: newSGS });
    } else if (name === "strokes") {
      const newStrokes = event.target.value;
      const newSGS = this.computeSGS(
        newStrokes,
        this.state.minutes,
        this.state.seconds
      );
      this.setState({ strokes: newStrokes, SGS: newSGS });
    } else if (name === "minutes") {
      const newMin = event.target.value;
      const newSGS = this.computeSGS(
        this.state.strokes,
        newMin,
        this.state.seconds
      );
      this.setState({ minutes: newMin, SGS: newSGS });
    } else {
      this.setState({ [name]: event.target.value });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //Added if statement for customId
    if (this.props.mode === RoundsMode.LOGROUND) {
      this.setState({ _id: Date.now() });
    }
    this.setState(
      { btnIcon: "spinner", btnLabel: "Saving..." },
      this.handleSubmitCallback
    );
  };

  //TODO: Determine if badges are unlocked
  checkBadgesUnlocked = () => {
    /*****************************************************************
     * For each badge Category
     *    For each Tier
     *        If New >= Current (BadgeData.<Category>.<Tier>)
     *            Let the parent know what the new Tier is
     *            Set flag signifying a new badge has been earned
     ******************************************************************/

    const categoryProps = Object.keys(BadgeData);
    // console.log(categoryProps); //Prints all the Categories

    categoryProps.forEach((CATEGORY, categoryIndex) => {
      // console.log(CATEGORY);
      const tierProps = Object.keys(BadgeData[CATEGORY]);
      // console.log(tierProps); //Prints all the Tiers

      tierProps.forEach((TIER, tierIndex) => {
        let tierReq = BadgeData[CATEGORY][TIER];
        // console.log("   " + TIER + ": " + tierReq);
        /*****************************************************************
         * TODO: Rounds
         ******************************************************************/
        /*****************************************************************
         * TODO: Time
         ******************************************************************/
        if (this.state.minutes >= BadgeData.fastTimeBadges.brown) {
          // render bronze picture
          this.setState({
            newBadge: true,
          });
          console.log("Bronze badge unlocked");
        }
        if (
          this.state.minutes >= BadgeData.fastTimeBadges.grey &&
          this.state.minutes < 80
        ) {
          // render silver picture
          this.setState({
            newBadge: true,
          });
          console.log("Silver badge unlocked");
        }
        if (
          this.state.minutes >= BadgeData.fastTimeBadges.gold &&
          this.state.minutes < 60
        ) {
          // render gold picture
          this.setState({
            newBadge: true,
          });
          console.log("Gold badge unlocked");
        }
        if (
          this.state.minutes >= BadgeData.fastTimeBadges.blue &&
          this.state.minutes < 50
        ) {
          // render diamond picture
          this.setState({
            newBadge: true,
          });
          console.log("Diamond badge unlocked");
        }
        if (
          this.state.minutes <= BadgeData.fastTimeBadges.purple &&
          this.state.minutes < 45
        ) {
          // render ultra picture
          this.setState({
            newBadge: true,
          });
          console.log("Ultra  badge unlocked");
        }
        /*****************************************************************
         * TODO: Strokes
         ******************************************************************/
        /*****************************************************************
         * TODO: Streak
         ******************************************************************/
        /*****************************************************************
         * TODO: Score
         ******************************************************************/
      }); //End looping through Tiers
    }); //End looping through Categories
  };

  //TODO: Check if any badges are unlocked. If so, display congrats toast in parent
  handleSubmitCallback = async () => {
    const newRound = { ...this.state };
    delete newRound.btnIcon;
    delete newRound.btnLabel;

    this.checkBadgesUnlocked();
    console.log(this.state.newBadge);

    //TODO: If newBadges found,
    // Let parent know to render congrats Toast
    // Use this.props to await updateBadgeData(b1, 2, 3, 4, 5)
    const res = await this.props.saveRound(newRound, this.props.editId);
    // const resUser = await this.props.incrementRounds();

    this.props.toggleModalOpen();
    this.props.setMode(RoundsMode.ROUNDSTABLE);
  };

  render() {
    return (
      <div
        id="roundsModeDialog"
        className="mode-page action-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="roundFormHeader"
        tabIndex="0"
      >
        <h1 id="roundFormHeader" className="mode-page-header">
          {this.props.mode == RoundsMode.LOGROUND ? "Log Round" : "Edit Round"}
        </h1>
        <form id="logRoundForm" onSubmit={this.handleSubmit} noValidate>
          <div className="mb-3 centered">
            <label htmlFor="roundDate" className="form-label">
              Date:
              <input
                id="roundDate"
                name="date"
                className="form-control centered"
                type="date"
                aria-describedby="roundDateDescr"
                value={this.state.date}
                onChange={this.handleChange}
                required
              />
            </label>
            <div id="roundDateDescr" className="form-text">
              Enter a valid date
            </div>
          </div>
          <div className="mb-3 centered">
            <label htmlFor="roundCourse" className="form-label">
              Course:
              <input
                id="roundCourse"
                name="course"
                className="form-control centered"
                type="text"
                aria-describedby="roundCourseDescr"
                size="50"
                maxLength="50"
                value={this.state.course}
                onChange={this.handleChange}
                required
              />
            </label>
            <div id="roundCourseDescr" className="form-text">
              Enter a course name of at most 50 characters
            </div>
          </div>
          <div className="mb-3 centered">
            <label htmlFor="roundType">
              Type:
              <select
                name="type"
                id="roundType"
                className="form-control centered"
                value={this.state.type}
                onChange={this.handleChange}
              >
                <option value="practice">Practice</option>
                <option value="tournament">Tournament</option>
              </select>
            </label>
          </div>
          <div className="mb-3 centered">
            <label htmlFor="roundHoles">
              Holes:
              <select
                id="roundHoles"
                name="holes"
                className="form-control centered"
                value={this.state.holes}
                onChange={this.handleChange}
              >
                <option value="9">9</option>
                <option value="18">18</option>
              </select>
            </label>
          </div>
          <div className="mb-3 centered">
            <label htmlFor="roundStrokes">
              Strokes:
              <input
                id="roundStrokes"
                name="strokes"
                className="form-control centered"
                type="number"
                min="9"
                max="200"
                value={this.state.strokes}
                aria-describedby="roundStrokesDescr"
                onChange={this.handleChange}
                required
              />
            </label>
            <div id="roundStrokesDescr" className="form-text">
              Enter a strokes value between 9 and 200
            </div>
          </div>
          <div className="mb-3 centered">
            <label htmlFor="roundMinutes">
              Time:
              <input
                id="roundMinutes"
                name="minutes"
                type="number"
                size="3"
                aria-describedby="roundTimeDescr"
                min="10"
                max="400"
                value={this.state.minutes}
                style={{ textAlign: "right" }}
                onChange={this.handleChange}
                required
              />{" "}
              :
              <input
                id="roundSeconds"
                name="seconds"
                type="number"
                size="2"
                aria-describedby="roundTimeDescr"
                min="0"
                max="60"
                value={this.state.seconds}
                onChange={this.handleChange}
                required
              />
            </label>
            <div id="roundTimeDescr" className="form-text">
              Enter a minutes value between 10 and 400, and a seconds value
              between 0 and 59
            </div>
          </div>
          <div className="mb-3 centered">
            <label htmlFor="roundSGS">
              Speedgolf Score:
              <input
                name="SGS"
                className="form-control centered"
                type="text"
                size="6"
                value={this.state.SGS}
                readOnly={true}
              />
            </label>
          </div>
          <div className="mb-3 centered">
            <label htmlFor="roundNotes">
              Notes:
              <textarea
                name="notes"
                id="roundNotes"
                className="form-control centered"
                aria-describedby="roundNotesDescr"
                rows="6"
                cols="75"
                maxLength="500"
                value={this.state.notes}
                onChange={this.handleChange}
              ></textarea>
            </label>
            <div id="roundNotesDescr" className="form-text">
              Enter optional round notes of up to 500 characters
            </div>
          </div>

          <div className="mode-page-btn-container">
            {this.state.btnLabel == "Update Round" ? (
              <button
                id="updateRoundBtn"
                type="submit"
                className="mode-page-btn action-dialog action-button"
              >
                <FontAwesomeIcon
                  icon={this.state.btnIcon}
                  className={this.state.btnIcon == "spinner" ? "fa-spin" : ""}
                />
                <span>&nbsp;{(this.state.btnLabel = "Update Round")}</span>
              </button>
            ) : (
              <button
                id="roundFormSubmitBtnLabel"
                type="submit"
                className="mode-page-btn action-dialog action-button"
              >
                <FontAwesomeIcon
                  icon={this.state.btnIcon}
                  className={this.state.btnIcon == "spinner" ? "fa-spin" : ""}
                />
                <span>&nbsp;{this.state.btnLabel == "Log Round"}</span>
              </button>
            )}

            <button
              id="roundFormSubmitBtnLabel"
              type="submit"
              className="mode-page-btn action-dialog action-button"
            >
              <FontAwesomeIcon
                icon={this.state.btnIcon}
                className={this.state.btnIcon == "spinner" ? "fa-spin" : ""}
              />
              <span>&nbsp;{this.state.btnLabel}</span>
            </button>
            <button
              type="button"
              className="mode-page-btn-cancel action-dialog cancel-button"
              onClick={() => {
                this.props.setMode(RoundsMode.ROUNDSTABLE);
                this.props.toggleModalOpen();
              }}
            >
              <FontAwesomeIcon icon="window-close" />
              <span>&nbsp;Cancel</span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RoundForm;
