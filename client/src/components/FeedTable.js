import React from "react";
import PostButton from "./PostButton";
import FeedMode from "./FeedMode";

class FeedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  hasBuddy = (poster) => {
    if (poster === this.props.userId) return true;
    for (let bIndex = 0; bIndex < this.props.buddies.length; bIndex++) {
      if (this.props.buddies[bIndex] === poster) return true;
    }
    return false;
  };

  handleTableClick = (r) => {
    const userData = this.props.objs[r].userData;
    const roundData = this.props.objs[r].roundData;

    const commentList = this.props.objs[r].comments;
    const postData = this.props.objs[r].postData;

    if (postData.postType === "round") {
      const data = {
        id: this.props.objs[r]._id,
        firstName: userData.firstName,
        sgs: roundData.sgs,
        minutes: roundData.minutes,
        seconds: roundData.seconds,
        strokes: roundData.strokes,
        type: postData.postType,
        comments: commentList,
        likes: postData.fistBumpCount,
        commentCount: postData.commentcount,
        objs: this.props.objs[r],
      };
      this.props.initiateCommentMode(data, FeedMode.FEEDCOMMENT);
    }
  };

  renderTable = () => {
    const table = [];
    for (let r = 0; r < this.props.objs.length; ++r) {
      if (this.hasBuddy(this.props.objs[r].userData.userName)) {
        const userData = this.props.objs[r].userData;
        const roundData = this.props.objs[r].roundData;
        const postData = this.props.objs[r].postData;

        let date = postData.date;

        let name;
        let title;

        if (userData.userName === this.props.userId) name = "You";
        else name = userData.firstName;

        if (postData.postType === "round") {
          //For round
          title =
            name +
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
          title = name + " wrote a post on " + postData.date + ".";
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
        {/* {this.state.popupOpen && this.state.type == "post" ? (
          <PostPopUpModal
            cancelBtn={this.cancelBtn}
            firstName={this.state.firstName}
            comment={this.state.comment}
          />
        ) : null} */}

        <h1 className="mode-page-header">Feed Mode</h1>
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

        <PostButton
          icon="blog"
          label={"Post"}
          action={() => {
            this.props.setMode(FeedMode.FEEDPOST);
          }}
        />
      </div>
    );
  }
}

export default FeedTable;
