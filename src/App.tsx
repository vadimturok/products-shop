import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import AppRoutes from './components/Routes/AppRoutes'
import { Container } from '@mui/material'
import './App.css'
import { fetchProducts } from './store/products/products.action'
import { useAppDispatch } from './hooks'

const App = () => {
   const dispatch = useAppDispatch()
   useEffect(() => {
      dispatch(fetchProducts())
   }, [dispatch])
   return (
      <>
         <Navbar />
         <Container maxWidth={'xl'}>
            <div className={'pages'}>
               <AppRoutes />
            </div>
         </Container>
      </>
   )
}

export default App
