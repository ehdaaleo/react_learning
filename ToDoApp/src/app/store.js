import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/todos/services/todoSlice'
import authReducer from '../features/auth/services/authSlice'
import apiLoaderReducer from '../features/movies/services/apiLoaderSlice'
import favoritesReducer from '../features/movies/services/favoritesSlice'
import moviesReducer from '../features/movies/services/moviesSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,  
    auth: authReducer,
    apiLoader: apiLoaderReducer,
    favorites: favoritesReducer,
    movies: moviesReducer,
  },
})
