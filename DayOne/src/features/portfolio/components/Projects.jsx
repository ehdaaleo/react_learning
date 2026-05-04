import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '../../../components/SectionTitle'

function ProjectCard({ project, isDark }) {
  return (
    <div className={`project-card d-flex flex-column align-items-center justify-content-center gap-3 p-3 text-center text-white shadow ${isDark ? 'bg-dark' : 'bg-secondary'}`}>
      <i className={`fa-solid ${project.icon} fs-4`} />
      <span className="project-card-label fw-bold text-uppercase pt-2">{project.label}</span>
    </div>
  )
}

export default function Projects({ title, projects }) {
  return (
    <section className="py-5 bg-white" id="portfolio">
      <Container>
        <SectionTitle title={title} className="text-center text-md-start" />
        <Row className="g-3">
          {projects.map((project, index) => (
            <Col xs={6} md={4} key={project.id}>
              <ProjectCard project={project} isDark={index % 2 === 1} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
