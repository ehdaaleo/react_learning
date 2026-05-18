import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import MovieCard from '../components/MovieCard'
import { useLanguage } from '../../../context/useLanguage'
import {
  fetchMovies,
  selectMovies,
  selectMoviesError,
  selectMoviesLoading,
  selectMoviesTotalPages,
} from '../services/moviesSlice'
import '../styles/movies.css'

const MoviesPage = () => {
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const { language } = useLanguage()
  const movies = useSelector(selectMovies)
  const totalPages = useSelector(selectMoviesTotalPages)
  const isLoading = useSelector(selectMoviesLoading)
  const error = useSelector(selectMoviesError)
  const [searchValue, setSearchValue] = useState(searchParams.get('query') || '')

  const page = Number(searchParams.get('page') || 1)
  const query = searchParams.get('query') || ''

  useEffect(() => {
    dispatch(fetchMovies({ page, query, language }))
  }, [dispatch, language, page, query])

  const handleSearch = (event) => {
    event.preventDefault()
    const nextQuery = searchValue.trim()
    setSearchParams(nextQuery ? { query: nextQuery, page: '1' } : { page: '1' })
  }

  const goToPage = (nextPage) => {
    const nextParams = { page: String(nextPage) }

    if (query) {
      nextParams.query = query
    }

    setSearchParams(nextParams)
  }

  return (
    <section className="movies-page">
      <div className="movies-header">
        <div className="text-start">
          <h1 className="h2 mb-1">Movies</h1>
          <p className="text-muted">Popular movies from The Movie Database</p>
        </div>

        <Form className="movie-search" onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="Search movies"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <Button type="submit" variant="primary">
            Search
          </Button>
        </Form>
      </div>

      {error && <Alert variant="warning">{error}</Alert>}

      {isLoading ? (
        <div className="movies-loader">
          <Spinner animation="border" role="status" />
        </div>
      ) : (
        <>
          <Row className="g-4">
            {movies.map((movie) => (
              <Col sm={6} lg={4} xl={3} key={movie.id}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>

          {!error && movies.length === 0 && (
            <Alert variant="info" className="mt-4">
              No movies found.
            </Alert>
          )}

          <div className="pagination-bar">
            <Button variant="outline-primary" disabled={page <= 1} onClick={() => goToPage(page - 1)}>
              Prev
            </Button>
            <span>
              Page {page} of {totalPages}
            </span>
            <Button
              variant="outline-primary"
              disabled={page >= totalPages}
              onClick={() => goToPage(page + 1)}
            >
              Next
            </Button>
          </div>
        </>
      )}
    </section>
  )
}

export default MoviesPage
