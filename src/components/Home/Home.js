import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import myImg from "../../Assets/Shweta.png";

function Home() {
  // const handleHireMeClick = () => {
  //   window.open("mailto:subratprakash8031@gmail.com", "_blank");
  // };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SHWETA RANJAN</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                {/* <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "mailto:ishwetaranjan@gmail.com";
                  }}
                  style={{
                    display: "inline-block",
                    marginTop: "20px",
                    padding: "10px 20px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    borderRadius: "5px",
                    textDecoration: "none",
                    border: "none",
                    cursor: "pointer", // Cursor change on hover
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                  onMouseOver={(e) => (e.target.style.cursor = "pointer")} // Ensures pointer cursor on hover
                >
                  Hire Me
                </button> */}

              </div>
              
            </Col>

            <Col md={5} style={{ paddingBottom: 15 }}>
              <img
                src={myImg}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "280px",
                  marginLeft: "120px",
                  marginTop: "80px",
                  border: "1px solid #ccc",
                  boxShadow: "0 0 0 1px #fff",
                  borderRadius: "60%",
                  
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
