import { createSlice } from '@reduxjs/toolkit'

const loadUser = () => {
  const savedUser = localStorage.getItem('movieUser')
  return savedUser ? JSON.parse(savedUser) : null
}

const initialState = {
  user: loadUser(),
  isLoading: false,
  message: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true
      state.message = null
    },
    loginSuccess: (state, action) => {
      state.isLoading = false
      state.user = action.payload
      state.message = null
      localStorage.setItem('movieUser', JSON.stringify(action.payload))
    },
    authFailure: (state, action) => {
      state.isLoading = false
      state.message = action.payload
    },
    logout: (state) => {
      state.user = null
      state.message = null
      localStorage.removeItem('movieUser')
    },
    clearAuthMessage: (state) => {
      state.message = null
    },
  },
})

export const { loginStart, loginSuccess, authFailure, logout, clearAuthMessage } = authSlice.actions

export default authSlice.reducer
