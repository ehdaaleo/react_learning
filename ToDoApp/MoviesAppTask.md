# Movies App Task

## Task Summary

This task adds a Movies App inside the existing React project. The app uses The Movie Database API to show popular movies, search movies, view movie details with dynamic routes, add/remove favorites, handle pagination, and change API language.

## Main Features Applied

### 1. Navbar Links

Updated the main navbar to include:

- Movies
- Favorites
- Login
- Register
- Favorites count badge
- Language selector

File:

- `src/layouts/Navbar.jsx`

### 2. Movies API Setup

Created a TMDB axios instance with:

- `baseURL`: `https://api.themoviedb.org/3`
- API key added automatically using request interceptor
- Global loader starts before each request
- Global loader stops after each response or error

Files:

- `src/features/movies/services/movieApi.js`
- `src/features/movies/services/apiLoaderSlice.js`
- `src/features/movies/components/GlobalApiLoader.jsx`

API key is stored in `.env`:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

### 3. Redux Thunk for Movies API

Created Redux async thunks to fetch data from TMDB:

- `fetchMovies`: gets popular movies or search results
- `fetchMovieDetails`: gets one movie details by movie ID

The slice stores:

- movies list
- movie details
- loading states
- errors
- total pages

File:

- `src/features/movies/services/moviesSlice.js`

### 4. Movies List Page

The movies page now:

- Gets movies using Redux thunk
- Supports pagination using `page` query param
- Supports search using `query` query param
- Refetches data when language changes
- Shows loader and error messages

File:

- `src/features/movies/pages/MoviesPage.jsx`

Example URLs:

```txt
/movies
/movies?page=2
/movies?query=batman&page=1
```

### 5. Dynamic Movie Details Route

Created dynamic route for movie details:

```txt
/movies/:movieId
```

Example:

```txt
/movies/880009
```

The movie ID comes from the URL and is used in the API request.

File:

- `src/features/movies/pages/MovieDetailsPage.jsx`

### 6. Movie Images

Movie poster images use the static TMDB image URL before `poster_path`:

```js
https://image.tmdb.org/t/p/w500/${poster_path}
```

File:

- `src/features/movies/services/movieApi.js`

### 7. Favorites Redux Cycle

Created a Redux slice for favorites.

The user can:

- Add movie to favorites
- Remove movie from favorites
- See filled heart icon when movie is favorite
- See bordered heart icon when movie is not favorite
- See favorites count in navbar
- Go to favorites page
- Remove movies directly from favorites page

Favorites are also saved in `localStorage` so they remain after refresh.

Files:

- `src/features/movies/services/favoritesSlice.js`
- `src/features/movies/components/MovieCard.jsx`
- `src/features/movies/pages/FavoritesPage.jsx`
- `src/layouts/Navbar.jsx`

### 8. Language Context

Added Context API to store the selected app language.

The selected language:

- Is saved in `localStorage`
- Appears in the navbar select input
- Is sent to TMDB API using `language` query param
- Refetches movies/details when changed

Files:

- `src/context/languageContext.js`
- `src/context/LanguageProvider.jsx`
- `src/context/useLanguage.js`

Example API query:

```txt
https://api.themoviedb.org/3/movie/popular?api_key=KEY&page=1&language=en-US
```

## Routes Added

Routes are configured in:

- `src/app/router.jsx`

Routes:

```txt
/movies
/movies/:movieId
/favorites
/login
/register
/todos
```

## Store Setup

The Redux store includes:

- `todos`
- `auth`
- `apiLoader`
- `favorites`
- `movies`

File:

- `src/app/store.js`

## Packages Used

Main packages:

- `react`: UI library
- `react-dom`: renders React app
- `react-router-dom`: routing and dynamic routes
- `@reduxjs/toolkit`: Redux slices and async thunks
- `react-redux`: connect React with Redux store
- `axios`: API requests and interceptors
- `bootstrap`: Bootstrap styles
- `react-bootstrap`: Bootstrap React components
- `react-icons`: icons like heart, star, and film

Dev packages:

- `vite`: development server and build tool
- `eslint`: code linting
- `@vitejs/plugin-react`: React support for Vite

## Steps to Run

1. Open the project folder:

```bash
cd ToDoApp
```

2. Add TMDB API key in `.env`:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

3. Install packages if needed:

```bash
npm install
```

4. Run the app:

```bash
npm run dev
```

5. Open the browser:

```txt
http://127.0.0.1:5173/
```

## Checks Used

The project was checked with:

```bash
npm run lint
npm run build
```

Both commands passed after implementation.
