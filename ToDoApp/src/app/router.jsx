import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import TodoPage from '../features/todos/pages/TodoPage'
import LoginPage from '../features/auth/pages/LoginPage'
import RegisterPage from '../features/auth/pages/RegisterPage'
import FavoritesPage from '../features/movies/pages/FavoritesPage'
import MovieDetailsPage from '../features/movies/pages/MovieDetailsPage'
import MoviesPage from '../features/movies/pages/MoviesPage'

export const router = createBrowserRouter([
  {
    path: '/',           // URL path
    element: <MainLayout />,  // Layout wrapper
    children: [          // Nested routes
      {
        index: true,     // Default child route
        element: <MoviesPage />,
      },
      {
        path: 'movies',
        element: <MoviesPage />,
      },
      {
        path: 'movies/:movieId',
        element: <MovieDetailsPage />,
      },
      {
        path: 'favorites',
        element: <FavoritesPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'todos',
        element: <TodoPage />,
      },
    ],
  },
])
