import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
//import homeLogo from "../../Assets/home-main.svg"; // Replace with your logo path
import myImg from "../../Assets/Shweta.png"; // Replace with your image path

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I am
              <i>
                <b className="purple">Shweta Ranjan</b>
              </i>
              , a final-year B.Tech student in Computer Science and Engineering with a passion for programming and innovation. 
              <br />
              <br />
              Over the years, I’ve developed expertise in{" "}
              <i>
                <b className="purple">Machine Learning</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">Full Stack Web Development</b>
              </i>
              , focusing on creating efficient and scalable solutions.
              <br />
              <br />
              I’m proficient in programming languages such as{" "}
              <i>
                <b className="purple">JavaScript, Python, and Java</b>
              </i>{" "}
              and frameworks like{" "}
              <i>
                <b className="purple">React.js, Node.js, and Flask</b>
              </i>.
              <br />
              <br />
              My projects range from developing a{" "}
              <b className="purple">Restaurant Table Booking Website</b> to a{" "}
              <b className="purple">Book Recommendation Engine</b>, each
              improving functionality, user experience, and system efficiency.
              <br />
              <br />
              I have gained hands-on experience during internships at{" "}
              <i>
                <b className="purple">IIT Guwahati</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">CodersCave AICTE</b>
              </i>, refining skills in Machine Learning, backend optimization,
              and user-centric design.
              <br />
              <br />
              I believe that design and development are not just about
              aesthetics but about solving real-world problems and creating
              meaningful impacts.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/yourgithub"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/yourtwitter"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yourlinkedin/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yourinstagram/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
