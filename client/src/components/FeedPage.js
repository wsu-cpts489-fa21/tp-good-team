import React from "react";
import logo from "../images/sslogo2.png";
import PostButton from "./PostButton";
import PostPage from "./PostPage";
import FeedTable from "./FeedTable";

class FeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postModalOpen: false,
      objs: null,
      headId: 9999999999999,
    };
  }

  postSuccess = () => {
    this.setState({
      postModalOpen: false,
    });
    this.props.toggleModalOpen();
  };

  cancelBtn = () => {
    this.setState({
      postModalOpen: false,
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
          postModalOpen: false,
        });
      });

    return;
  }

  postComment = (postID, comment) => {
    this.props.postComment(postID, comment);
  }

  render() {
    if (this.state.postModalOpen) {
      return (
        <>
          <div class="space">
            <PostPage
              postSuccess={this.postSuccess}
              addFeedPost={this.props.addFeedPost}
              cancelBtn={this.cancelBtn}
            />
          </div>
        </>
      );
    } else {
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
              userId={this.props.userId}
              buddies={this.props.buddies}
              postComment={this.postComment}
              objs={this.state.objs}
            />
          ) : null}
          <PostButton
            icon="blog"
            label={"Post"}
            action={() => {
              this.props.toggleModalOpen();
              this.setState({ postModalOpen: true });
            }}
          />
        </div>
      );
    }
  }
}

export default FeedPage;
