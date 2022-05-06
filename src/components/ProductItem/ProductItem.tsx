import React, { FC } from 'react'
import './productItem.css'
import { IProduct } from '../../types'
import { Button, Rating } from '@mui/material'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
   return (
      <div className={'productItem'}>
         <div className={'productTop'}>
            <img
               alt={product.title}
               src={product.image}
               className={'productItemImg'}
            />
         </div>
         <hr />
         <div className={'productItemDescription'}>
            <p className={'productItemTitle'}>{product.title}</p>
            <h2 className={'productItemPrice'}>{product.price} $</h2>
            <Rating name="read-only" value={2} readOnly />
            <div className={'productItemBtn'}>
               <Button variant="contained" color="success">
                  Add to cart
               </Button>
            </div>
         </div>
      </div>
   )
}

export default ProductItem
