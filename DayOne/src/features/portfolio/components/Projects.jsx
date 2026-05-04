import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '../../../components/SectionTitle'

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <i className={`fa-solid ${project.icon} project-icon`} />
      <span className="project-card-label">{project.label}</span>
    </div>
  )
}

export default function Projects({ title, projects }) {
  return (
    <section className="projects-section py-5" id="portfolio">
      <Container>
        <SectionTitle title={title} />
        <Row className="g-3">
          {projects.map((project) => (
            <Col xs={6} md={4} key={project.id}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
