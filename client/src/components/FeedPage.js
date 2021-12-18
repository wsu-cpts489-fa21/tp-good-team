import React from "react";
import logo from "../images/sslogo2.png";
import PostPage from "./PostPage";
import FeedTable from "./FeedTable";
import FeedMode from "./FeedMode.js";
import PopUpModal from "./PopUpModal";
import PostButton from "./PostButton";

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
    };
  }

  successBtn = () => {
    this.setMode(FeedMode.FEEDTABLE);
    this.setState({
      update: true,
    });
  };

  cancelBtn = () => {
    this.setMode(FeedMode.FEEDTABLE);
    this.setState({
      update: true,
    });
  };

  initiateMode = (data, newMode) => {
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
    return;
  }

  async componentDidUpdate() {
    if (this.state.update) {
      const url = "/posts/" + this.state.headId;
      let res = await fetch(url)
        .then((response) => response.json())
        .then((obj) => {
          this.setState({
            objs: obj,
            update: false,
          });
        });
    }
  }

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
                setMode={this.setMode}
                userId={this.props.userId}
                buddies={this.props.buddies}
                objs={this.state.objs}
                initiateCommentMode={this.initiateMode}
                profilePic={this.props.profilePic}
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
