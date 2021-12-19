import React from "react";
import logo from "../images/sslogo2.png";
import PostPage from "./PostPage";
import FeedTable from "./FeedTable";
import FeedMode from "./FeedMode.js";
import PopUpModal from "./PopUpModal";
import FeedPost from "./FeedPost";

class FeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: FeedMode.FEEDTABLE,
      objs: null,
      headId: 9999999999999,
      id: -1,
      firstName: "",
      sgs: "",
      minutes: "",
      seconds: "",
      strokes: "",
      type: "",
      comments: [],
      likes: 0,
      commentCount: 0,
      comment: "",
      update: false,
      table: [],
    };
  }

  successBtn = () => {
    this.setState({
      update: true,
    });
    this.setMode(FeedMode.FEEDTABLE);
  };

  toggleUpdate = () => {
    this.setState({
      update: false,
    });
  };

  cancelBtn = () => {
    this.setMode(FeedMode.FEEDTABLE);
    this.setState({
      update: true,
    });
  };

  initiateCommentMode = (data, newMode) => {
    this.setState({
      mode: newMode,
      id: data.id,
      firstName: data.firstName,
      sgs: data.sgs,
      minutes: data.minutes,
      seconds: data.seconds,
      strokes: data.strokes,
      type: data.type,
      comments: data.comments,
      likes: data.likes,
      commentCount: data.commentCount,
      // objs: data.objs,
    });

    this.props.toggleModalOpen();
  };

  setMode = (newMode) => {
    this.setState({
      mode: newMode,
    });
    this.props.toggleModalOpen();
  };

  async componentDidMount() {
    const url = "/posts/" + this.state.headId;

    let res = await fetch(url)
      .then((response) => response.json())
      .then((obj) => {
        this.setState({
          objs: obj,
        });
      });
    this.buildTable();
  }

  async componentDidUpdate() {
    if (this.state.update) {
      console.log("Update true");
      const url = "/posts/" + this.state.headId;
      let res = await fetch(url)
        .then((response) => response.json())
        .then((obj) => {
          this.setState({
            objs: obj,
            update: false,
          });
        });
      this.buildTable();
    } else console.log("Update false");
  }

  buildTable = async () => {
    console.log("building table");
    const table = [];
    for (let r = 0; r < this.state.objs.length; ++r) {
      if (this.hasBuddy(this.state.objs[r].userData.userName)) {
        const userData = this.state.objs[r].userData;
        const roundData = this.state.objs[r].roundData;
        const postData = this.state.objs[r].postData;

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
            <tr key={r}>
              <td>
                <FeedPost
                  r={r}
                  title={title}
                  pic={pic}
                  likeCount={postData.fistBumpCount}
                  commentCount={postData.commentCount}
                  comment={postData.comment}
                  handleLikeClick={this.handleLikeClick}
                  handleTableClick={this.handleTableClick}
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
  };

  hasBuddy = (poster) => {
    if (poster === this.props.userId) return true;
    for (let bIndex = 0; bIndex < this.props.buddies.length; bIndex++) {
      if (this.props.buddies[bIndex] === poster) return true;
    }
    return false;
  };

  handleTableClick = (r) => {
    const userData = this.state.objs[r].userData;
    const roundData = this.state.objs[r].roundData;

    const commentList = this.state.objs[r].comments;
    const postData = this.state.objs[r].postData;

    if (postData.postType === "round") {
      const data = {
        id: this.state.objs[r]._id,
        firstName: userData.firstName,
        sgs: roundData.sgs,
        minutes: roundData.minutes,
        seconds: roundData.seconds,
        strokes: roundData.strokes,
        type: postData.postType,
        comments: commentList,
        likes: postData.fistBumpCount,
        commentCount: postData.commentcount,
        objs: this.state.objs[r],
      };
      this.initiateCommentMode(data, FeedMode.FEEDCOMMENT);
    }
  };

  handleLikeClick = async (r) => {
    //Trying new way
    const updatedPost = this.state.objs[r];
    updatedPost.postData.fistBumpCount++;
    const updateId = this.state.objs[r]._id;
    const res = await this.props.updatePost(updatedPost, updateId);
    this.setState({
      update: true,
    });
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

  render() {
    switch (this.state.mode) {
      case FeedMode.FEEDTABLE:
        return (
          <div
            id="feedModeTab"
            className="mode-page"
            role="tabpanel"
            aria-label="Feed Tab"
            tabIndex="0"
          >
            {this.state.objs !== null ? (
              <FeedTable
                update={this.state.update}
                setMode={this.setMode}
                userId={this.props.userId}
                buddies={this.props.buddies}
                objs={this.state.objs}
                profilePic={this.props.profilePic}
                toggleUpdate={this.toggleUpdate}
                table={this.state.table}
              />
            ) : null}
          </div>
        );
      case FeedMode.FEEDPOST:
        return (
          <>
            <div class="space">
              <PostPage
                postComment={this.props.postComment}
                postSuccess={this.successBtn}
                addFeedPost={this.props.addFeedPost}
                cancelPost={this.cancelBtn}
              />
            </div>
          </>
        );

      case FeedMode.FEEDCOMMENT:
        return (
          <PopUpModal
            userId={this.props.userId}
            cancelComment={this.cancelBtn}
            postComment={this.props.postComment}
            firstName={this.state.firstName}
            strokes={this.state.strokes}
            minutes={this.state.minutes}
            seconds={this.state.seconds}
            sgs={this.state.sgs}
            id={this.state.id}
            comments={this.state.comments}
            likes={this.state.likes}
            commentCount={this.state.commentCount}
          />
        );
      default:
        return (
          <h1 className="danger">
            Error. This branch should not have executed
          </h1>
        );
    } //end switch
  } //render
} //class

export default FeedPage;
