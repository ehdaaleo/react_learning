import { createSlice } from '@reduxjs/toolkit'

const apiLoaderSlice = createSlice({
  name: 'apiLoader',
  initialState: {
    pendingRequests: 0,
  },
  reducers: {
    startApiRequest: (state) => {
      state.pendingRequests += 1
    },
    finishApiRequest: (state) => {
      state.pendingRequests = Math.max(0, state.pendingRequests - 1)
    },
  },
})

export const { startApiRequest, finishApiRequest } = apiLoaderSlice.actions
export const selectIsApiLoading = (state) => state.apiLoader.pendingRequests > 0

export default apiLoaderSlice.reducer
