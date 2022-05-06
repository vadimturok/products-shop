import React from 'react'
import './home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import ProductList from '../../components/ProductList/ProductList'
import { useAppSelector } from '../../hooks'
import Loader from '../../components/Loader/Loader'

const Home = () => {
   const { isLoading, products } = useAppSelector(
      (state) => state.productsReducer
   )
   return (
      <div className={'home'}>
         {isLoading || products.length == 0 ? (
            <Loader />
         ) : (
            <>
               <div className={'homeSidebar'}>
                  <Sidebar products={products} />
               </div>
               <div className={'homeProductList'}>
                  <ProductList products={products} />
               </div>
            </>
         )}
      </div>
   )
}

export default Home
