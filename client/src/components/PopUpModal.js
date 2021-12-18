import React from "react";
import Modal from "react-bootstrap/Modal";
import like from "../images/like.jpg";

class PopUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentMode: false,
      commentText: "",
      likes: this.props.likes,
    };
  }
  commentBtn = () => {
    this.setState({
      commentMode: true,
    });
  };

  updateComment = (event) => {
    this.setState({
      commentText: event.target.value,
    });
  };

  cancelComment = () => {
    this.setState({
      commentMode: false,
      commentText: "",
    });
  };

  postComment = async () => {
    if (this.state.commentText != "") {
      let today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000);
      let date = today.toISOString().substr(0, 10);
      let time = today.toISOString().substr(11, 5);
      const newComment = {
        _id: Date.now(),
        username: this.props.userId,
        comment: this.state.commentText,
        date: date,
        time: time,
      };

      let res = await this.props.postComment(
        this.props.id,
        newComment,
        this.props.commentCount + 1
      );
      this.setState({
        commentMode: false,
      });
    }
  };

  cancelBtn = () => {
    this.props.cancelBtn();
  };

  renderComments = () => {
    console.log("comments: ", this.props.comments);
    const table = [];
    for (let i = 0; i < this.props.comments.length; i++) {
      table.push(
        <tr>
          <td>{this.props.comments[i].username}:</td>
          <td>{this.props.comments[i].comment}</td>
        </tr>
      );
    }
    return table;
  };

  like = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
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
          {this.state.likes}
          <img
            src={like}
            onClick={() => this.like()}
            width="20px"
            height="20px"
          ></img>
          <button
            className="btn btn-primary"
            onClick={this.commentBtn}
            variant="primary"
          >
            Comment
          </button>
          <button
            className="btn btn-secondary"
            onClick={this.cancelBtn}
            variant="primary"
          >
            Close
          </button>
        </Modal.Footer>

        {this.state.commentMode ? (
          <>
            <input
              type="text"
              name="commentText"
              minLength={1}
              maxLength={200}
              value={this.state.commentText}
              onChange={this.updateComment}
            />
            <p>{this.state.commentText}</p>
            <button
              className="btn btn-primary btn-block"
              onClick={() => this.postComment()}
            >
              Post comment
            </button>
            <button
              className="btn btn-secondary btn-block"
              onClick={() => this.cancelComment()}
            >
              Cancel comment
            </button>
          </>
        ) : null}
        <p>Comments:</p>
        {this.renderComments()}
      </Modal.Dialog>
    );
  }
}

export default PopUpModal;
