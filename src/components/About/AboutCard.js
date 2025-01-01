import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shweta Ranjan </span>
            from <span className="purple"> Arunachal Pradesh, India.</span>
            <br />
            I am Software Developer. I have done my Internship in IIT Guwahati as a Machine Learning Intern.
            <br />
            I am currently pursuing Bachelor degree in Computer Science & Engineering at National Institute of Technology Arunachal Pradesh.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shweta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
