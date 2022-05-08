import { CartItem } from '../../types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartState {
   cartItems: CartItem[]
   isOpen: boolean
   isEmpty: boolean
   totalSum: number
   itemAdded: boolean
   itemRemoved: boolean
}
const initialState: CartState = {
   cartItems: [],
   isOpen: false,
   isEmpty: true,
   totalSum: 0,
   itemAdded: false,
   itemRemoved: false,
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
      removeProduct(state, action: PayloadAction<CartItem>) {
         state.cartItems = state.cartItems.filter(
            (item) =>
               JSON.stringify(item.product) !==
               JSON.stringify(action.payload.product)
         )
         if (state.cartItems.length === 0) state.isEmpty = true
         state.totalSum -=
            action.payload.quantity * action.payload.product.price
      },
      increaseCount(state, action: PayloadAction<CartItem>) {
         state.cartItems = state.cartItems.map((item) => {
            if (JSON.stringify(item) === JSON.stringify(action.payload)) {
               item.quantity += 1
               return item
            }
            return item
         })
         state.totalSum += action.payload.product.price
      },
      decreaseCount(state, action: PayloadAction<CartItem>) {
         state.cartItems = state.cartItems.map((item) => {
            if (JSON.stringify(item) === JSON.stringify(action.payload)) {
               item.quantity -= 1
               return item
            }
            return item
         })
         state.totalSum -= action.payload.product.price
      },
      clearCart(state) {
         state.cartItems = []
         state.totalSum = 0
         state.isEmpty = true
      },
      toggleCart(state, action: PayloadAction<boolean>) {
         state.isOpen = action.payload
      },
      toggleItemAdded(state, action: PayloadAction<boolean>) {
         state.itemAdded = action.payload
      },
      toggleItemRemoved(state, action: PayloadAction<boolean>) {
         state.itemRemoved = action.payload
      },
   },
})

export const {
   addProduct,
   toggleCart,
   toggleItemAdded,
   toggleItemRemoved,
   removeProduct,
   increaseCount,
   decreaseCount,
   clearCart,
} = cartSlice.actions

export default cartSlice.reducer
