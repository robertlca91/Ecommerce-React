import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsloading } from './isLoading.slice';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    setCart: (state, action) => {
      return action.payload
    }
  }
})

export const getCartThunk = () => (dispatch) => {
  dispatch(setIsloading(true));
  return axios.get('https://e-commerce-api.academlo.tech/api/v1/cart', getConfig())
    .then((res) => dispatch(setCart(res.data.data.cart.products)))
    .finally(() => dispatch(setIsloading(false)));
}

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
