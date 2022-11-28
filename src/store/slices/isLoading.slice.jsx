import { createSlice } from '@reduxjs/toolkit'

export const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: true,
  reducers: {
    setIsloading: (state, action) => {
      return action.payload
    },
  },
})

export const { setIsloading } = isLoadingSlice.actions

export default isLoadingSlice.reducer
