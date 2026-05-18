import { useDispatch, useSelector } from 'react-redux'
import {
  authFailure,
  clearAuthMessage as clearMessage,
  loginStart,
  loginSuccess,
  logout as logoutUser,
} from '../services/authSlice'

export const useAuth = () => {
  const dispatch = useDispatch()
  const { user, isLoading, message } = useSelector((state) => state.auth)

  const register = async (formData) => {
    dispatch(loginStart())
    const savedUsers = JSON.parse(localStorage.getItem('movieUsers') || '[]')
    const userExists = savedUsers.some((savedUser) => savedUser.email === formData.email)

    if (userExists) {
      dispatch(authFailure('Email already registered'))
      return
    }

    const newUser = {
      id: crypto.randomUUID(),
      name: formData.name,
      email: formData.email,
    }

    localStorage.setItem('movieUsers', JSON.stringify([...savedUsers, { ...newUser, password: formData.password }]))
    dispatch(loginSuccess(newUser))
  }

  const login = async (formData) => {
    dispatch(loginStart())
    const savedUsers = JSON.parse(localStorage.getItem('movieUsers') || '[]')
    const matchedUser = savedUsers.find(
      (savedUser) => savedUser.email === formData.email && savedUser.password === formData.password,
    )

    if (!matchedUser) {
      dispatch(authFailure('Invalid email or password'))
      return
    }

    const userData = {
      id: matchedUser.id,
      name: matchedUser.name,
      email: matchedUser.email,
    }
    dispatch(loginSuccess(userData))
  }

  const logout = () => {
    dispatch(logoutUser())
  }

  const clearAuthMessage = () => {
    dispatch(clearMessage())
  }

  return { user, isLoading, message, register, login, logout, clearAuthMessage }
}
