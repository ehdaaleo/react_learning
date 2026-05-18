import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Navbar from './Navbar'
import GlobalApiLoader from '../features/movies/components/GlobalApiLoader'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <GlobalApiLoader />
      <Container className="mt-4">
        <Outlet />
      </Container>
    </>
  )
}

export default MainLayout
