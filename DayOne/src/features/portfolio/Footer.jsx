import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";


function Footer({ contact, socials }) {
  return (
    <footer className="footer-section py-4" id="contact">
      <Container>
        <Row className="align-items-center g-3">
          <Col md={4} className="text-md-start">
            <h2>Get in touch</h2>
            <p><i className="fa-solid fa-envelope" /> {contact.email}</p>
            <p><i className="fa-solid fa-phone" /> {contact.phone}</p>
          </Col>
          <Col md={4}>
            <Button href={`mailto:${contact.email}`} variant="outline-light" className="outline-button">
              Contact Me
            </Button>
          </Col>
          <Col md={4}>
            <div className="social-links">
              {socials.map((social) => (
                <a key={social.name} href={social.href} aria-label={social.name} target="_blank" rel="noreferrer">
                  <i className={social.icon} />
                </a>
              ))}
            </div>
            <small>Copyright 2026</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
