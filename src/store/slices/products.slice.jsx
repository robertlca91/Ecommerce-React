import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { setIsloading } from './isLoading.slice'

export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload
    },
  },
})
//thunk  para completar el export const getproductsthunk
export const getProductsThunk = () => (dispatch) => {
  dispatch(setIsloading(true))
  axios
    .get(`https://e-commerce-api.academlo.tech/api/v1/products`)
    .then((res) => dispatch(setProducts(res.data.data.products)))
    .catch((error) => error?.response?.data)
    .finally(() => dispatch(setIsloading(false)))
}
export const filterProductsThunk = (id) => (dispatch) => {
  dispatch(setIsloading(true))
  return axios
    .get(`https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`)
    .then((res) => dispatch(setProducts(res.data.data.products)))
    .catch((error) => error?.response?.data)
    .finally(() => dispatch(setIsloading(false)))
}
export const filterHeadlineThunk = (inputSearch) => (dispatch) => {
  dispatch(setIsloading(true))
  return axios
    .get(
      `https://e-commerce-api.academlo.tech/api/v1/products?query=${inputSearch}`
    )
    .then((res) => dispatch(setProducts(res.data.data.products)))
    .catch((error) => error?.response?.data)
    .finally(() => dispatch(setIsloading(false)))
}

export const { setProducts } = productsSlice.actions

export default productsSlice.reducer

//slice es el atajo para todo los items
