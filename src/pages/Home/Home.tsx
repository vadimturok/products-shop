import React from 'react'
import './home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import ProductList from '../../components/ProductList/ProductList'

const Home = () => {
   return (
      <div className={'home'}>
         <div className={'homeSidebar'}>
            <Sidebar />
         </div>
         <div className={'homeProductList'}>
            <ProductList />
         </div>
      </div>
   )
}

export default Home
