import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productsReducer from './products/products.slice'

const rootReducer = combineReducers({
   productsReducer,
})

export const store = configureStore({
   reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
