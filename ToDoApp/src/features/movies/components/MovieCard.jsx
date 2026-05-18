import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Badge, Button, Card } from 'react-bootstrap'
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa'
import { imageBaseUrl } from '../services/movieApi'
import { selectIsFavorite, toggleFavorite } from '../services/favoritesSlice'

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch()
  const isFavorite = useSelector(selectIsFavorite(movie.id))

  const handleFavorite = () => {
    dispatch(toggleFavorite(movie))
  }

  return (
    <Card className="movie-card h-100 shadow-sm">
      <Link to={`/movies/${movie.id}`} className="movie-poster-link">
        {movie.poster_path ? (
          <Card.Img
            variant="top"
            src={`${imageBaseUrl}${movie.poster_path}`}
            alt={`${movie.title} movie poster`}
            className="movie-poster"
          />
        ) : (
          <div className="movie-poster movie-poster-placeholder">No Image</div>
        )}
      </Link>

      <Card.Body className="d-flex flex-column">
        <div className="d-flex align-items-start justify-content-between gap-2 mb-2">
          <Card.Title className="h6 mb-0 text-start">{movie.title}</Card.Title>
          <Badge bg="warning" text="dark" className="d-inline-flex align-items-center gap-1">
            <FaStar />
            {movie.vote_average?.toFixed(1) || '0.0'}
          </Badge>
        </div>

        <Card.Text className="movie-overview text-start text-muted">
          {movie.overview || 'No overview available.'}
        </Card.Text>

        <div className="d-flex gap-2 mt-auto">
          <Button as={Link} to={`/movies/${movie.id}`} variant="primary" className="flex-grow-1">
            Details
          </Button>
          <Button
            type="button"
            variant={isFavorite ? 'danger' : 'outline-danger'}
            onClick={handleFavorite}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default MovieCard
