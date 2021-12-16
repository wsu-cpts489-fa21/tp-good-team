import React from "react";
import Modal from "react-bootstrap/Modal";

class PopUpModal extends React.Component {
  cancelBtn = () => {
    this.props.cancelBtn();
  };

  render() {
    return (
      <Modal.Dialog>
        <Modal.Header closeButton onClick={this.cancelBtn}>
          <Modal.Title>{this.props.firstName} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {"Strokes:" + this.props.strokes}
          <br></br>
          {"Minutes:" + this.props.minutes}
          <br></br>
          {"Seconds:" + this.props.seconds}
          <br></br>
          {"SGS: " + this.props.sgs}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={this.cancelBtn} variant="primary">
            Close
          </button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}

export default PopUpModal;
