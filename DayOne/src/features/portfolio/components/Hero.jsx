import React from "react";
import { Button, Image } from "react-bootstrap";
import heroImage from "../../../assets/hero.png";


function Hero({ hero }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <p className="hero-name">{hero.name}</p>
        <h1>{hero.role}</h1>
        <Button href="#contact" variant="outline-light" className="outline-button">
          {hero.action}
        </Button>
      </div>
      <Image className="hero-image" src={heroImage} alt={`${hero.name} hero illustration`} />
    </section>
  );
}

export default Hero;
