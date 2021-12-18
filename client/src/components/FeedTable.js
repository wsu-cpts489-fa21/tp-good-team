import React from "react";
import PostButton from "./PostButton";
import FeedMode from "./FeedMode";
import FeedPost from "./FeedPost";

class FeedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePic: "",
      table: [],
    };
  }

  async componentDidMount() {
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
          await this.getProfilePic(userData.userName);
          const pic = this.state.profilePic;

          table.push(
            <tr onClick={() => this.handleTableClick(r)} key={r}>
              <td>
                <FeedPost
                  title={title}
                  pic={pic}
                  likeCount={postData.fistBumpCount}
                  commentCount={postData.commentCount}
                  comment={postData.comment}
                />
              </td>
            </tr>
          );
        }
      }
    } //for
    this.setState({
      table: table,
    });
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

  /*****************************************************************
   * Receives the userId from the specific Feed Post.
   * We then fetch the user object based in the userId,
   * Currently, the get route returns a string back, so we have to
   * parse it first before using
   ***************************************************************** */
  getProfilePic = async (userId) => {
    const url = "/users/" + userId;

    let res = await fetch(url)
      .then((response) => response.json())
      .then((user) => {
        let userObj = JSON.parse(user); //Turn string back into Object
        this.setState({
          profilePic: userObj.identityData.profilePic,
        });
      });
  };

  renderTable = () => {
    console.log("rendering feed");
    return this.state.table;
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
          <caption id="feedTableCaption" aria-live="polite"></caption>
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
