import { useSelector } from 'react-redux'
import { Alert, Col, Row } from 'react-bootstrap'
import MovieCard from '../components/MovieCard'
import { selectFavoriteMovies } from '../services/favoritesSlice'
import '../styles/movies.css'

const FavoritesPage = () => {
  const favorites = useSelector(selectFavoriteMovies)

  return (
    <section className="movies-page">
      <div className="movies-header">
        <div className="text-start">
          <h1 className="h2 mb-1">Favorites</h1>
          <p className="text-muted">Movies saved in this browser</p>
        </div>
      </div>

      {favorites.length === 0 ? (
        <Alert variant="info">No favorite movies yet.</Alert>
      ) : (
        <Row className="g-4">
          {favorites.map((movie) => (
            <Col sm={6} lg={4} xl={3} key={movie.id}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      )}
    </section>
  )
}

export default FavoritesPage
