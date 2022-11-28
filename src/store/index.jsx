import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/products.slice' // sin llaves
import isLoadingSlice from './slices/isLoading.slice' // sin llaves

export default configureStore({
  reducer: {
    products: productsSlice,
    isLoading: isLoadingSlice,
  },
})
//store es el atajo para importar
