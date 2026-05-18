import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Badge, Container, Form, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap'
import { FaFilm } from 'react-icons/fa'
import { languages } from '../context/languageContext'
import { useLanguage } from '../context/useLanguage'
import { selectFavoritesCount } from '../features/movies/services/favoritesSlice'

const Navbar = () => {
  const favoritesCount = useSelector(selectFavoritesCount)
  const { language, setLanguage } = useLanguage()

  return (
    <BootstrapNavbar bg="primary" variant="dark" expand="lg" className="shadow">
      <Container>
        <BootstrapNavbar.Brand as={NavLink} to="/movies">
          <FaFilm className="me-2" />
          Movies App
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="main-navbar" />
        <BootstrapNavbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/movies">
              Movies
            </Nav.Link>
            <Nav.Link as={NavLink} to="/favorites">
              Favorites
              <Badge bg="warning" text="dark" className="ms-2">
                {favoritesCount}
              </Badge>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register">
              Register
            </Nav.Link>
            <Form.Select
              aria-label="Movie language"
              className="movie-language-select ms-lg-3 mt-2 mt-lg-0"
              size="sm"
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              {languages.map((languageOption) => (
                <option value={languageOption.value} key={languageOption.value}>
                  {languageOption.label}
                </option>
              ))}
            </Form.Select>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar
