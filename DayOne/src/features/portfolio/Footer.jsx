import { Button, Col, Container, Row } from "react-bootstrap";


function Footer({ contact, socials }) {
  return (
    <footer className="bg-black text-white py-4" id="contact">
      <Container>
        <Row className="align-items-center g-3">
          <Col md={4} className="text-md-start">
            <h2 className="h6 text-uppercase mb-3">Get in touch</h2>
            <p className="small text-white-50 mb-1"><i className="fa-solid fa-envelope me-2" /> {contact.email}</p>
            <p className="small text-white-50 mb-1"><i className="fa-solid fa-phone me-2" /> {contact.phone}</p>
          </Col>
          <Col md={4}>
            <Button href={`mailto:${contact.email}`} variant="outline-light" className="text-uppercase fw-bold px-3 rounded-0">
              Contact Me
            </Button>
          </Col>
          <Col md={4}>
            <div className="d-flex justify-content-center gap-3 mb-2">
              {socials.map((social) => (
                <a className="text-white" key={social.name} href={social.href} aria-label={social.name} target="_blank" rel="noreferrer">
                  <i className={social.icon} />
                </a>
              ))}
            </div>
            <small className="text-white-50">Copyright 2026</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
