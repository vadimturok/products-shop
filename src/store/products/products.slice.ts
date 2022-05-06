import { IProduct } from '../../types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProductsState {
   products: IProduct[]
   isLoading: boolean
   error: string
}

const initialState: ProductsState = {
   products: [],
   isLoading: false,
   error: '',
}
export const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      startFetching(state) {
         state.isLoading = true
      },
      successFetching(state, action: PayloadAction<IProduct[]>) {
         state.isLoading = false
         state.error = ''
         state.products = action.payload
      },
      errorFetching(state, action: PayloadAction<string>) {
         state.isLoading = false
         state.error = action.payload
      },
   },
})

export const { startFetching, successFetching, errorFetching } =
   productsSlice.actions

export default productsSlice.reducer
