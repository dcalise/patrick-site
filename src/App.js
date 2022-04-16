import "./styles.css";
import { Container, Row, Col } from "react-grid";
import { FaArrowRight } from "react-icons/fa";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={12}>
            <p className="name text-san-serif text-20">Patrick Egglinger</p>
          </Col>
        </Row>
        <Row>
          <Col order={{ md: "first", xs: "last" }} md={5}>
            <h1>
              Hello, I’m Patrick. A Senior Product Designer working at{" "}
              <a href="https://www.method.com" title="Method Website">
                @Method
              </a>{" "}
              in NY.
              <br />
              <br />
              I’m passionate about shaping the next generation of meaningful
              digital products and services.
            </h1>
            <h2>Get in Touch</h2>
            <Row>
              <Col order={{ md: "last", xs: "first" }} md={10}>
                <p className="text-20 get-in-touch">
                  Want to review my cv, work samples or hang for a coffee chat?
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={8}>
                <div className="card first">
                  <a href="mailto:p.egglinger@gmail.com">
                    Send me an Email <FaArrowRight />
                  </a>
                  <a href="https://www.linkedin.com/in/patrick-egglinger-12489946">
                    Connect on LinkedIn <FaArrowRight />
                  </a>
                </div>
              </Col>
            </Row>
            <h2>Other Things</h2>
            <Row>
              <Col md={6} xs={8}>
                <div className="card">
                  <a href="www.google.com">
                    Travel Recs For Queens <FaArrowRight />
                  </a>
                  <a href="www.google.com">
                    Twitter <FaArrowRight />
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={6} offset={{ md: 1 }}>
            <img
              className="portrait"
              src="portrait.png"
              alt="Portrait of Patrick"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
