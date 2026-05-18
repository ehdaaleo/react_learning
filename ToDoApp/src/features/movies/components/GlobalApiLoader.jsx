import { useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'
import { selectIsApiLoading } from '../services/apiLoaderSlice'
import '../styles/movies.css'

const GlobalApiLoader = () => {
  const isLoading = useSelector(selectIsApiLoading)

  if (!isLoading) {
    return null
  }

  return (
    <div className="global-api-loader" role="status" aria-live="polite">
      <Spinner animation="border" size="sm" />
      <span>Loading</span>
    </div>
  )
}

export default GlobalApiLoader
