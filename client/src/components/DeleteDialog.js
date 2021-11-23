import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DeleteDialog extends React.Component {
  render() {
    console.log("rendering delete dialog");
    return (
      <>
        <h1>Confirm delete?</h1>
        <button
          onClick={() => {
            this.props.cancelDeleteRound();
          }}
        >
          Close
        </button>
        <button
          id="deleteRoundBtn"
          onClick={() => {
            this.props.deleteRound(this.props.deleteId);
            this.props.cancelDeleteRound();
          }}
        >
          Delete
        </button>
      </>
    );
  }
}

export default DeleteDialog;
