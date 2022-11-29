import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/products.slice' // sin llaves
import isLoadingSlice from './slices/isLoading.slice' // sin llaves
import purchasesSlice from './slices/purchases.slice'

export default configureStore({
  reducer: {
    products: productsSlice,
    isLoading: isLoadingSlice,
    purchases: purchasesSlice,
  },
})
//store es el atajo para importar
