import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsArrowRight } from "react-icons/bs";

function BlogCard(props) {
  return (
    <Card className="blog-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="blog-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button variant="primary" href={props.link}>
          Read More <BsArrowRight />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
