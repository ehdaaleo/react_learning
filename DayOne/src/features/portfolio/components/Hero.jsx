import { Button, Col, Container, Image, Row } from "react-bootstrap";
import heroImage from "../../../assets/hero.png";


function Hero({ hero }) {
  return (
    <section className="bg-black text-white overflow-hidden" id="home">
      <Container>
        <Row className="align-items-center justify-content-center hero-row">
          <Col md={5} className="text-center text-md-start py-5">
            <p className="hero-name mb-2">{hero.name}</p>
            <h1 className="h6 fw-normal mb-4">{hero.role}</h1>
            <Button href="#contact" variant="outline-light" className="text-uppercase fw-bold px-3 rounded-0">
              {hero.action}
            </Button>
          </Col>
          <Col md={5} className="p-0">
            <Image className="hero-image img-fluid opacity-75" src={heroImage} alt={`${hero.name} hero illustration`} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
