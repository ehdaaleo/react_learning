import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

class About extends Component {
    render() {
    const { title, text, resumeLabel, resumeHref } = this.props.about;

    return (
      <section className="py-5 bg-white" id="about">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={4} className="text-md-end">
              <h2 className="section-title">{title}</h2>
            </Col>
            <Col md={8} className="text-md-start">
              <p className="text-secondary lh-lg about-text">{text}</p>
              <Button href={resumeHref} variant="dark" className="text-uppercase fw-bold px-3 rounded-0 mt-4">
                {resumeLabel}
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export  default About;
