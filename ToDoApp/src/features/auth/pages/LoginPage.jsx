import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import AuthCard from '../components/AuthForm'

const LoginPage = () => {
  const { user, login, isLoading, message, clearAuthMessage } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/movies')
    }
  }, [user, navigate])

  return (
    <AuthCard
      type="login"
      onSubmit={login}
      isLoading={isLoading}
      error={message}
      clearError={clearAuthMessage}
    />
  )
}

export default LoginPage
