import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { hasTmdbApiKey, movieApi } from './movieApi'

const missingApiKeyMessage = 'Add VITE_TMDB_API_KEY to your .env file to load movies from TMDB.'

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async ({ page = 1, query = '', language = 'en-US' }, { rejectWithValue }) => {
    if (!hasTmdbApiKey) {
      return rejectWithValue(missingApiKeyMessage)
    }

    try {
      const endpoint = query ? '/search/movie' : '/movie/popular'
      const response = await movieApi.get(endpoint, {
        params: {
          page,
          language,
          ...(query ? { query } : {}),
        },
      })

      return response.data
    } catch (error) {
      return rejectWithValue(error.response?.data?.status_message || 'Could not load movies.')
    }
  },
)

export const fetchMovieDetails = createAsyncThunk(
  'movies/fetchMovieDetails',
  async ({ movieId, language = 'en-US' }, { rejectWithValue }) => {
    if (!hasTmdbApiKey) {
      return rejectWithValue('Add VITE_TMDB_API_KEY to your .env file to load movie details from TMDB.')
    }

    try {
      const response = await movieApi.get(`/movie/${movieId}`, {
        params: { language },
      })

      return response.data
    } catch (error) {
      return rejectWithValue(error.response?.data?.status_message || 'Could not load movie details.')
    }
  },
)

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    movieDetails: null,
    totalPages: 1,
    isLoading: false,
    detailsLoading: false,
    error: '',
    detailsError: '',
  },
  reducers: {
    clearMovieDetails: (state) => {
      state.movieDetails = null
      state.detailsError = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoading = false
        state.movies = action.payload.results || []
        state.totalPages = Math.min(action.payload.total_pages || 1, 500)
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoading = false
        state.movies = []
        state.totalPages = 1
        state.error = action.payload || action.error.message || 'Could not load movies.'
      })
      .addCase(fetchMovieDetails.pending, (state) => {
        state.detailsLoading = true
        state.detailsError = ''
        state.movieDetails = null
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.detailsLoading = false
        state.movieDetails = action.payload
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.detailsLoading = false
        state.detailsError = action.payload || action.error.message || 'Could not load movie details.'
      })
  },
})

export const { clearMovieDetails } = moviesSlice.actions

export const selectMovies = (state) => state.movies.movies
export const selectMoviesTotalPages = (state) => state.movies.totalPages
export const selectMoviesLoading = (state) => state.movies.isLoading
export const selectMoviesError = (state) => state.movies.error
export const selectMovieDetails = (state) => state.movies.movieDetails
export const selectMovieDetailsLoading = (state) => state.movies.detailsLoading
export const selectMovieDetailsError = (state) => state.movies.detailsError

export default moviesSlice.reducer
