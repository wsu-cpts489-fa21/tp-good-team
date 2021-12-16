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

  postSuccess = () => {};

  cancelBtn = () => {
    this.setState({
      postModalOpen: false,
    });
  };
  //   render() {
  //     if (this.state.postModalOpen) {
  //       return (
  //         <>
  //           <div class="space">
  //             <PostPage cancelBtn={this.cancelBtn} />
  //           </div>
  //         </>
  //       );
  //     } else {
  //       return (
  //         <div
  //           id="feedModeTab"
  //           className="mode-page"
  //           role="tabpanel"
  //           aria-label="Feed Tab"
  //           tabIndex="0"
  //         >
  //           <h1 className="mode-page-header">Activity Feed</h1>
  //           <p className="mode-page-content">This page is under construction.</p>
  //           <img
  //             className="mode-page-icon"
  //             src={logo}
  //             alt="SpeedScore logo"
  //           ></img>
  //           <PostButton
  //             icon="blog"
  //             label={"Post"}
  //             action={() =>
  //               this.setState({
  //                 postModalOpen: true,
  //               })
  //             }
  //           />
  //           {this.state.postModalOpen ? <PostPage /> : null}
  //         </div>
  //       );

  //   }

  async componentDidMount() {
    const url = "/posts/" + this.state.headId;

    let res = await fetch(url)
      .then((response) => response.json())
      .then((obj) => {
        console.log("Obj " + JSON.stringify(obj)); //Must be stringify

        this.setState({
          objs: obj,
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
              addFeedPost={this.props.addFeedPost}
              cancelBtn={this.cancelBtn}
            />
          </div>
        </>
      );
    } else {
      // return (
      //   <div
      //     id="feedModeTab"
      //     className="mode-page"
      //     role="tabpanel"
      //     aria-label="Feed Tab"
      //     tabIndex="0"
      //   >
      //     <h1 className="mode-page-header">Activity Feed</h1>
      //     <p className="mode-page-content">This page is under construction.</p>
      //     <img
      //       className="mode-page-icon"
      //       src={logo}
      //       alt="SpeedScore logo"
      //     ></img>
      //     <PostButton
      //       icon="blog"
      //       label={"Post"}
      //       action={() =>
      //         this.setState({
      //           postModalOpen: true,
      //         })
      //       }
      //     />
      //     {this.state.postModalOpen ? <PostPage /> : null}
      //   </div>
      // );
      return (
        <div
          id="feedModeTab"
          className="mode-page"
          role="tabpanel"
          aria-label="Feed Tab"
          tabIndex="0"
        >
          {/* <h1 className="mode-page-header">Activity Feed</h1> */}
          {this.state.objs !== null ? (
            <FeedTable objs={this.state.objs} />
          ) : null}
          {/* <img className="mode-page-icon" src={logo} alt="SpeedScore logo"></img> */}
          <PostButton
            icon="blog"
            label={"Post"}
            action={() =>
              this.setState({
                postModalOpen: true,
              })
            }
          />
          {this.state.postModalOpen ? (
            <PostPage
              addFeedPost={this.props.addFeedPost}
              postSuccess={this.postSuccess}
            />
          ) : null}
        </div>

        //   </div>
      );
    }
  }
}

export default FeedPage;
