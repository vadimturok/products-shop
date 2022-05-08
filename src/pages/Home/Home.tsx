import React from 'react'
import './home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import ProductList from '../../components/ProductList/ProductList'
import AlertComponent from '../../components/Alert/AlertComponent'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { toggleItemAdded } from '../../store/cart/cart.slice'

const Home = () => {
   const { itemAdded } = useAppSelector((state) => state.cartReducer)
   const dispatch = useAppDispatch()
   return (
      <>
         <div className={'home'}>
            <div className={'homeSidebar'}>
               <Sidebar />
            </div>
            <div className={'homeProductList'}>
               <ProductList />
            </div>
         </div>
         <AlertComponent
            open={itemAdded}
            setOpen={() => dispatch(toggleItemAdded(false))}
            severity={'success'}
            text={'Successfully added to cart!'}
         />
      </>
   )
}

export default Home
