import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Alert, Badge, Button, Col, Row, Spinner } from 'react-bootstrap'
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa'
import { useLanguage } from '../../../context/useLanguage'
import { imageBaseUrl } from '../services/movieApi'
import { selectIsFavorite, toggleFavorite } from '../services/favoritesSlice'
import {
  clearMovieDetails,
  fetchMovieDetails,
  selectMovieDetails,
  selectMovieDetailsError,
  selectMovieDetailsLoading,
} from '../services/moviesSlice'
import '../styles/movies.css'

const MovieDetailsPage = () => {
  const { movieId } = useParams()
  const dispatch = useDispatch()
  const { language } = useLanguage()
  const isFavorite = useSelector(selectIsFavorite(movieId))
  const movie = useSelector(selectMovieDetails)
  const isLoading = useSelector(selectMovieDetailsLoading)
  const error = useSelector(selectMovieDetailsError)

  useEffect(() => {
    dispatch(fetchMovieDetails({ movieId, language }))

    return () => {
      dispatch(clearMovieDetails())
    }
  }, [dispatch, language, movieId])

  const handleFavorite = () => {
    dispatch(toggleFavorite(movie))
  }

  if (isLoading) {
    return (
      <div className="movies-loader">
        <Spinner animation="border" role="status" />
      </div>
    )
  }

  if (error) {
    return <Alert variant="warning">{error}</Alert>
  }

  if (!movie) {
    return null
  }

  return (
    <section className="movie-details text-start">
      <Button as={Link} to="/movies" variant="outline-secondary" className="mb-4">
        Back to Movies
      </Button>

      <Row className="g-4 align-items-start">
        <Col md={4}>
          {movie.poster_path ? (
            <img
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt={`${movie.title} movie poster`}
              className="details-poster"
            />
          ) : (
            <div className="details-poster movie-poster-placeholder">No Image</div>
          )}
        </Col>
        <Col md={8}>
          <h1 className="h2 mb-3">{movie.title}</h1>
          <div className="d-flex flex-wrap gap-2 mb-3">
            <Badge bg="warning" text="dark" className="d-inline-flex align-items-center gap-1">
              <FaStar />
              {movie.vote_average?.toFixed(1) || '0.0'}
            </Badge>
            {movie.release_date && <Badge bg="secondary">{movie.release_date}</Badge>}
            {movie.runtime && <Badge bg="secondary">{movie.runtime} min</Badge>}
          </div>

          <p className="lead mb-4">{movie.overview || 'No overview available.'}</p>

          {movie.genres?.length > 0 && (
            <div className="d-flex flex-wrap gap-2 mb-4">
              {movie.genres.map((genre) => (
                <Badge bg="light" text="dark" key={genre.id}>
                  {genre.name}
                </Badge>
              ))}
            </div>
          )}

          <Button type="button" variant={isFavorite ? 'danger' : 'outline-danger'} onClick={handleFavorite}>
            {isFavorite ? <FaHeart className="me-2" /> : <FaRegHeart className="me-2" />}
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </Button>
        </Col>
      </Row>
    </section>
  )
}

export default MovieDetailsPage
