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
          No, do not delete
        </button>
        <button
          id="deleteRoundBtn"
          onClick={() => {
            this.props.confirmDeleteRound();
            this.props.cancelDeleteRound();
          }}
        >
          Yes, delete
        </button>
      </>
    );
  }
}

export default DeleteDialog;
