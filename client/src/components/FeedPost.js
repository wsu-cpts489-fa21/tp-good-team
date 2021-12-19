import React from "react";
import Card from "react-bootstrap/Card";
import profilePic from "../images/DefaultProfilePic.jpg";
import LikeImage from "../images/like.jpg";

class FeedPost extends React.Component {
  render() {
    const { pic, title, likeCount, commentCount, comment } = this.props;
    return (
      <Card className="text-left mb-3 centered w-100">
        <Card.Img
          variant="left"
          src={pic === "" ? profilePic : pic}
          width="50"
          height="50"
        />
        <Card.Title>{title}</Card.Title>
        <Card.Body
          onClick={() => {
            this.props.handleTableClick(this.props.r);
          }}
          className="h5"
        >
          <Card.Text>{comment}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Text className="h3">
            <img
              onClick={() => {
                this.props.handleLikeClick(this.props.r);
              }}
              width="20px"
              height="20px"
              src={LikeImage}
            />{" "}
            {likeCount}
          </Card.Text>
          <Card.Text>Comments: {commentCount}</Card.Text>
        </Card.Footer>
      </Card>
    );
  }
}

export default FeedPost;
