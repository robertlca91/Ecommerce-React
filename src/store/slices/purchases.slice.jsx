import { createSlice } from '@reduxjs/toolkit'
import getConfig from '../../utils/getConfig'
import { setIsloading } from './isLoading.slice'
import axios from 'axios'

export const purchasesSlice = createSlice({
  name: 'purchases',
  initialState: [],
  reducers: {
    setPucharses: (state, action) => {
      return action.payload
    },
  },
})
export const getPucharsesthunk = () => (dispatch) => {
  /// revisar
  dispatch(setIsloading(true))
  return axios
    .get(`https://e-commerce-api.academlo.tech/api/v1/purchases/`, getConfig())
    .then((res) => dispatch(setPucharses(res.data.data.purchases))) //revisar
    .finally(() => dispatch(setIsloading(false)))
}

export const { setPucharses } = purchasesSlice.actions

export default purchasesSlice.reducer
