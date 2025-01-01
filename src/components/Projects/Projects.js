import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import Portfolioo from "../../Assets/Projects/about.png";

import FeastKart from "../../Assets/Projects//about.png";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FeastKart}
              isBlog={false}
              title="Book Recommendation System"
              description="Reccommends Book as Per your Interest "
              ghLink="https://github.com/shwetaaranjan"
              //demoLink="https://feastkart.vercel.app/"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={}
              isBlog={false}
              title="TechTales"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink=""
              demoLink=""
            />
          </Col> */}

          
    
          
          

          
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolioo}
              isBlog={false}
              title="Portfolio"
              description=" The portfolio website features a Multi-Page Layout that provides an organized and intuitive navigation experience. Built with Tailwind CSS and custom CSS, it offers a responsive design that looks stunning on all devices, with easy-to-customize colors for a personalized touch. The site is fully responsive, ensuring a seamless user experience, complemented by smooth animations that enhance the overall interface. Utilizing React.js, the website delivers a fluid and engaging experience, making it perfect for showcasing your work and skills"
              ghLink="https://github.com/shwetaaranjan?tab=repositories"
              demoLink="https://github.com/shwetaaranjan?tab=repositories"       
            />
          </Col>
    
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
