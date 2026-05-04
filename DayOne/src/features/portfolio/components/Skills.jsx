import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import SectionTitle from "../../../components/SectionTitle";

function SkillBar({ name, level }) {
  return (
    <div className="skill-bar">
      <span>{name}</span>
      <ProgressBar now={level} aria-label={name} />
    </div>
  );
}

export default function Skills({ title, intro, focus, skills }) {
  return (
    <section className="skills-section py-5" id="skills">
      <Container>
        <SectionTitle title={title} />
        <p className="skills-intro">{intro}</p>
        <Row className="align-items-center g-4">
          <Col md={5}>
            <h3>My Focus</h3>
            <ul className="focus-list">
              {focus.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </Col>
          <Col md={7}>
            {skills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
