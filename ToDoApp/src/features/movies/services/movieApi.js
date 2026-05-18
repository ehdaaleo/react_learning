import axios from 'axios'

export const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'

export const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 10000,
})

let startLoader = () => {}
let stopLoader = () => {}

export const configureMovieApiLoader = ({ onRequest, onResponse }) => {
  startLoader = onRequest
  stopLoader = onResponse
}

movieApi.interceptors.request.use((config) => {
  startLoader()

  config.params = {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    ...config.params,
  }

  return config
}, (error) => {
  stopLoader()
  return Promise.reject(error)
})

movieApi.interceptors.response.use(
  (response) => {
    stopLoader()
    return response
  },
  (error) => {
    stopLoader()
    return Promise.reject(error)
  },
)

export const hasTmdbApiKey = Boolean(import.meta.env.VITE_TMDB_API_KEY)
