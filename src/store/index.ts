import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productsReducer from './products/products.slice'
import cartReducer from './cart/cart.slice'

const rootReducer = combineReducers({
   productsReducer,
   cartReducer,
})

export const store = configureStore({
   reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
