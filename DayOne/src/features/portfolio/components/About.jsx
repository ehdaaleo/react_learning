import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

class About extends Component {
  render() {
    const { title, text, resumeLabel, resumeHref } = this.props.about;

    return (
      <section className="about-section py-5" id="about">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={4} className="text-md-end">
              <h2>{title}</h2>
            </Col>
            <Col md={8} className="text-md-start">
              <p>{text}</p>
              <Button href={resumeHref} variant="dark" className="solid-button mt-4">
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
