import React from "react";
import logo from "../images/sslogo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PopUpModal from "./PopUpModal";

class FeedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupOpen: false,
      firstName: "",
      sgs: "",
      minutes: "",
      seconds: "",
      strokes: "",
      type: "",
      comment: "",
    };
  }

  cancelBtn = () => {
    this.setState({
      popupOpen: false,
    });
  };
  handleTableClick = (r) => {
    const userData = this.props.objs[r].userData;
    const roundData = this.props.objs[r].roundData;
    const postData = this.props.objs[r].postData;

    if (postData.postType === "round") {
      this.setState({
        popupOpen: true,
        firstName: userData.firstName,
        sgs: roundData.sgs,
        strokes: roundData.strokes,
        minutes: roundData.minutes,
        seconds: roundData.seconds,
        type: postData.postType,
      });

      console.log("You clicked " + r + "!", this.state.popupOpen);
    }
  };
  renderTable = () => {
    const table = [];
    for (let r = 0; r < this.props.objs.length; ++r) {
      const userData = this.props.objs[r].userData;
      const roundData = this.props.objs[r].roundData;
      const postData = this.props.objs[r].postData;
      // Need to add title for post and Round
      //For post

      let date = postData.date;
      // let date = new Intl.DateTimeFormat("en-US", {
      //   year: "numeric",
      //   month: "2-digit",
      //   day: "2-digit",
      // }).format(postData.date);
      // console.log("newDate: " + postData.date);

      let title;
      if (postData.postType === "round") {
        //For round
        title =
          userData.firstName +
          " logged a speedgolf round. " +
          roundData.sgs +
          " (" +
          roundData.strokes +
          " in " +
          roundData.minutes +
          ":" +
          roundData.seconds +
          ") on " +
          date;
      } else if (postData.postType === "post") {
        title = userData.firstName + " wrote a post on " + postData.date + ".";
      } else alert("Error");

      if (!roundData.isPrivate) {
        table.push(
          <tr onClick={() => this.handleTableClick(r)} key={r}>
            <td>{userData.profilePic}</td>
            <td>{title}</td>
            <td>{postData.fistBumpCount}</td>
            <td>{postData.commentCount}</td>
            <td>{postData.comment}</td>
          </tr>
        );
      }
    }
    return table;
  };

  render() {
    return (
      <div
        id="feedTableTab"
        className="mode-page"
        role="tabpanel"
        aria-label="Feed Table Tab"
        tabIndex="0"
      >
        {this.state.popupOpen && this.state.type == "round" ? (
          <PopUpModal
            cancelBtn={this.cancelBtn}
            firstName={this.state.firstName}
            strokes={this.state.strokes}
            minutes={this.state.minutes}
            seconds={this.state.seconds}
            sgs={this.state.sgs}
          />
        ) : null}

        {/* {this.state.popupOpen && this.state.type == "post" ? (
          <PostPopUpModal
            cancelBtn={this.cancelBtn}
            firstName={this.state.firstName}
            comment={this.state.comment}
          />
        ) : null} */}
        <h1 className="mode-page-header">Feed Table</h1>
        <table
          id="feedTable"
          className="table table-hover table-striped caption-top"
        >
          <caption id="feedTableCaption" aria-live="polite">
            {"Feed displaying " +
              this.props.objs.length +
              " posts" +
              (this.props.objs.length !== 1 ? "s" : "")}
          </caption>
          <thead className="table-light">
            <tr>
              <th
                scope="col"
                role="columnheader"
                className="sortable-header cell-align-middle"
                aria-sort="none"
              >
                Pic
              </th>
              <th
                scope="col"
                role="columnheader"
                className="sortable-header cell-align-middle"
                aria-sort="none"
              >
                Title
              </th>
              {/* FISTBUMP */}
              <th
                scope="col"
                role="columnheader"
                className="sortable-header cell-align-middle"
                aria-sort="none"
              >
                Fist Bumps
              </th>

              <th scope="col" className="cell-align-middle">
                Comments
              </th>
              <th scope="col" className="cell-align-middle">
                Message Body
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.objs === null || this.props.objs.length === 0 ? (
              <tr>
                <td colSpan="5" scope="rowgroup">
                  <i>Feed unable to load</i>
                </td>
              </tr>
            ) : (
              this.renderTable()
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FeedTable;
