import React, { FC } from 'react'
import './productList.css'
import ProductItem from '../ProductItem/ProductItem'
import { useAppSelector } from '../../hooks'
import Loader from '../Loader/Loader'

const ProductList: FC = () => {
   const { isLoading, filteredProducts } = useAppSelector(
      (state) => state.productsReducer
   )
   return (
      <div className={'productList'}>
         <div className={'productListItems'}>
            {isLoading ? (
               <Loader />
            ) : (
               filteredProducts.map((product) => (
                  <ProductItem key={product.id} product={product} />
               ))
            )}
         </div>
      </div>
   )
}

export default ProductList
