import React, { FC } from 'react'
import './productList.css'
import ProductItem from '../ProductItem/ProductItem'
import { IProduct } from '../../types'

const ProductList: FC<{ products: IProduct[] }> = ({ products }) => {
   return (
      <div className={'productList'}>
         <div className={'productListItems'}>
            {products.map((product) => (
               <ProductItem key={product.id} product={product} />
            ))}
         </div>
      </div>
   )
}

export default ProductList
