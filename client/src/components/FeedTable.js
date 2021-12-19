import React from "react";
import PostButton from "./PostButton";
import FeedMode from "./FeedMode";
import FeedPost from "./FeedPost";

class FeedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePic: "",
      // table: [],
    };
  }

  componentDidMount() {
    console.log("FeedTable Mounted");
  }

  componentDidUpdate(prevState, thisState) {
    console.log("feedTable Update");
    // if (this.props.update) {
    //   this.buildTable();
    //   this.props.toggleUpdate();
    // }
  }

  renderTable = () => {
    return this.props.table;
  };

  render() {
    console.log("FeedTable render method");
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
