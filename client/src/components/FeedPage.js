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
        console.log("Obj " + JSON.stringify(obj)); //Must be stringify

        this.setState({
          objs: obj,
          postModalOpen: false,
        });
      });

    for (let index = 0; index < 10; index++) {
      console.log(
        "Index[" + index + "]: " + JSON.stringify(this.state.objs[index])
      );
    }

    return;
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
            <FeedTable objs={this.state.objs} />
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
