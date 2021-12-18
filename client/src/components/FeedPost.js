import React from "react";
import Card from "react-bootstrap/Card";
import profilePic from "../images/DefaultProfilePic.jpg";

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
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{comment}</Card.Text>
          <Card.Text>{likeCount}</Card.Text>
          <Card.Text>{commentCount}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default FeedPost;
