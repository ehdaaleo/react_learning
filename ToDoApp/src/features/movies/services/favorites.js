const FAVORITES_KEY = 'movieFavorites'

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]')
}

export const saveFavorites = (favorites) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
}

export const isFavoriteMovie = (movieId) => {
  return getFavorites().some((movie) => movie.id === movieId)
}

export const toggleFavoriteMovie = (movie) => {
  const favorites = getFavorites()
  const exists = favorites.some((favorite) => favorite.id === movie.id)

  if (exists) {
    const nextFavorites = favorites.filter((favorite) => favorite.id !== movie.id)
    saveFavorites(nextFavorites)
    return nextFavorites
  }

  const nextFavorites = [...favorites, movie]
  saveFavorites(nextFavorites)
  return nextFavorites
}
