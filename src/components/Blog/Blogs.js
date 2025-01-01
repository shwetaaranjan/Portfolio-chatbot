import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCard";
import Particle from "../Particle";
import blogImage1 from "../../Assets/Projects/blog.png";
import blogImage2 from "../../Assets/Projects/blog.png";
import blogImage3 from "../../Assets/Projects/blog.png";
import blogImage4 from "../../Assets/Projects/blog.png";
import blogImage5 from "../../Assets/Projects/blog.png";
import blogImage6 from "../../Assets/Projects/blog.png";

function Blogs() {
  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <h1 className="blog-heading">
          My Recent <strong className="purple">Blog Posts </strong>
        </h1>
        <p style={{ color: "white" }}>Check out my latest blog posts.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={blogImage1}
              title="Blog Post 1"
              link="/blog/post1"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={blogImage2}
              title="Blog Post 2"
              link="/blog/post2"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={blogImage3}
              title="Blog Post 3"
              link="/blog/post3"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={blogImage4}
              title="Blog Post 4"
              link="/blog/post4"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={blogImage5}
              title="Blog Post 5"
              link="/blog/post5"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={blogImage6}
              title="Blog Post 6"
              link="/blog/post6"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
