import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import SectionTitle from "../../../components/SectionTitle";

function SkillBar({ name, level }) {
  return (
    <Row className="align-items-center g-2 mb-2">
      <Col xs={12} sm={3}>
        <span className="small">{name}</span>
      </Col>
      <Col xs={12} sm={9}>
        <ProgressBar now={level} variant="secondary" className="rounded-0 skill-progress" aria-label={name} />
      </Col>
    </Row>
  );
}

export default function Skills({ title, intro, focus, skills }) {
  return (
    <section className="bg-dark text-white py-5" id="skills">
      <Container>
        <SectionTitle title={title} className="text-white text-center" />
        <p className="mx-auto mb-5 text-center lh-lg text-white-50 skills-intro">{intro}</p>
        <Row className="align-items-center g-4">
          <Col md={5}>
            <h3 className="h6 text-uppercase mb-3">My Focus</h3>
            <ul className="list-unstyled m-0">
              {focus.map((item) => (
                <li className="py-1 text-white-50" key={item.name}>{item.name}</li>
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
