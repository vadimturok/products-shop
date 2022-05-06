import { CartItem } from '../../types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartState {
   cartItems: CartItem[]
   isOpen: boolean
   isEmpty: boolean
   totalSum: number
}
const initialState: CartState = {
   cartItems: [],
   isOpen: false,
   isEmpty: true,
   totalSum: 0,
}

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addProduct(state, action: PayloadAction<CartItem>) {
         state.cartItems.push(action.payload)
         if (state.isEmpty) state.isEmpty = false
         state.totalSum +=
            action.payload.quantity * action.payload.product.price
      },
   },
})

export const { addProduct } = cartSlice.actions

export default cartSlice.reducer
