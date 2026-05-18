import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './app/store'
import { finishApiRequest, startApiRequest } from './features/movies/services/apiLoaderSlice'
import { configureMovieApiLoader } from './features/movies/services/movieApi'
import 'bootstrap/dist/css/bootstrap.min.css'

configureMovieApiLoader({
  onRequest: () => store.dispatch(startApiRequest()),
  onResponse: () => store.dispatch(finishApiRequest()),
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

// Provider → Router → App
