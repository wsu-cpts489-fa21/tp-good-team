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
        <Modal.Body>{this.props.sgs}</Modal.Body>
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
