import React, { FC } from 'react'
import './productList.css'
import ProductItem from '../ProductItem/ProductItem'
import { useAppSelector } from '../../hooks'
import { Skeleton } from '@mui/material'

const ProductList: FC = () => {
   const { isLoading, filteredProducts } = useAppSelector(
      (state) => state.productsReducer
   )
   return (
      <div className={'productList'}>
         {isLoading ? (
            <div className={'productListItems'}>
               {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <Skeleton
                     key={i}
                     variant="rectangular"
                     width={250}
                     height={420}
                     sx={{ borderRadius: '5px', marginBottom: '20px' }}
                  />
               ))}
            </div>
         ) : (
            <div className={'productListItems'}>
               {filteredProducts.map((product) => (
                  <ProductItem key={product.id} product={product} />
               ))}
            </div>
         )}
      </div>
   )
}

export default ProductList
