import { createSlice } from '@reduxjs/toolkit'

const FAVORITES_KEY = 'movieFavorites'

const loadFavorites = () => {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]')
}

const saveFavorites = (favorites) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
}

const initialState = {
  movies: loadFavorites(),
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const movieExists = state.movies.some((movie) => movie.id === action.payload.id)

      if (!movieExists) {
        state.movies.push(action.payload)
        saveFavorites(state.movies)
      }
    },
    removeFavorite: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload)
      saveFavorites(state.movies)
    },
    toggleFavorite: (state, action) => {
      const movieExists = state.movies.some((movie) => movie.id === action.payload.id)

      if (movieExists) {
        state.movies = state.movies.filter((movie) => movie.id !== action.payload.id)
      } else {
        state.movies.push(action.payload)
      }

      saveFavorites(state.movies)
    },
  },
})

export const { addFavorite, removeFavorite, toggleFavorite } = favoritesSlice.actions

export const selectFavoriteMovies = (state) => state.favorites.movies
export const selectFavoritesCount = (state) => state.favorites.movies.length
export const selectIsFavorite = (movieId) => (state) => {
  return state.favorites.movies.some((movie) => movie.id === Number(movieId))
}

export default favoritesSlice.reducer
