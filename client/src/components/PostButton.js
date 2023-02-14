import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PostButton extends React.Component {
  render() {
    return (
      <button
        id="feedModeActionBtn"
        type="button"
        className="float-btn"
        onClick={this.props.action}
      >
        <FontAwesomeIcon icon={this.props.icon} />
        &nbsp;{this.props.label}
      </button>
    );
  }
}

export default PostButton;
