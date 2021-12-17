import React from "react";
import Modal from "react-bootstrap/Modal";

class PopUpModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      commentMode: false,
      commentText: "",
    };
  }
  commentBtn = () => {
    this.setState({
      commentMode: true,
    });
  }

  updateComment = (event) => {
    this.setState({
      commentText: event.target.value
    })
  }

  cancelComment = () => {
    this.setState({
      commentMode: false,
      commentText: "",
    });
  }

  postComment = () => {
    if (this.state.commentText != ""){
      this.props.postComment(this.props.id, this.state.commentText)
      this.setState({
        commentMode: false,
      });
    }
  }

  cancelBtn = () => {
    this.props.cancelBtn();
  };

  renderComments = () => {
    console.log("comments: ", this.props.comments)
    const table = [];
    for (let i = 0; i < this.props.comments.length; i++) {
      table.push(
        <tr>
          <td>{this.props.comments[i].username}:</td>
          <td>{this.props.comments[i].comment}</td>
        </tr>
      );
    }
    return table
  }

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
          <button onClick={this.commentBtn} variant="primary">
            Comment
          </button>
          <button onClick={this.cancelBtn} variant="primary">
            Close
          </button>
        </Modal.Footer>

        { this.state.commentMode ? 
        <>
          <input type="text" minLength={1} maxLength={200} onChange={this.updateComment}/>
          <p>{this.state.commentText}</p>
          <button onClick={ () => this.postComment()}>Post comment</button>
          <button onClick={ () => this.cancelComment()}>Cancel comment</button>
        </>
        :
        null}
        <p>Comments:</p>
        {this.renderComments()}
      </Modal.Dialog>
    );
  }
}

export default PopUpModal;
