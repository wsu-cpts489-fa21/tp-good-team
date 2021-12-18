import React from "react";
import Modal from "react-bootstrap/Modal";
import like from "../images/like.jpg";
import CommentPage from "./Comment";

class PopUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentMode: false,
      commentText: "",
      likes: this.props.likes,
      update: false,
    };
  }
  commentBtn = () => {
    this.setState({
      commentMode: true,
      update: true,
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

  componentDidUpdate = () => {
    if (this.state.update) {
      this.setState({
        update: false,
      });
    }
    this.renderComments();
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
      this.setState({
        commentMode: false,
        update: true,
      });

      let res = await this.props.postComment(
        this.props.id,
        newComment,
        this.props.commentCount + 1
      );
    }
  };

  cancelBtn = () => {
    this.props.cancelComment();
  };

  renderComments = () => {
    // console.log("comments: ", this.props.comments);
    const table = [];
    for (let i = 0; i < this.props.comments.length; i++) {
      table.push(
        // <tr>
        //   <td>{this.props.comments[i].username}:</td>
        //   <td>{this.props.comments[i].comment}</td>
        // </tr>

        <tr className="w-100">
          <td className="w-100">
            <CommentPage
              user={this.props.comments[i].username}
              comment={this.props.comments[i].comment}
              date={this.props.comments[i].date}
            />
          </td>
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
        <Modal.Body className="">
          <div className="mb-3 centered">{this.renderComments()}</div>
        </Modal.Body>
      </Modal.Dialog>
    );
  }
}

export default PopUpModal;
