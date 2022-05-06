import React, { FC, useState } from 'react'
import './productItem.css'
import { IProduct } from '../../types'
import { Button, Rating } from '@mui/material'
import ModalWindow from '../Modal/ModalWindow'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
   const [open, setOpen] = useState(false)
   const handleClickItem = () => {
      setOpen(true)
   }
   return (
      <div className={'productItem'}>
         <ModalWindow product={product} open={open} setOpen={setOpen} />
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
            <div className={'productItemRate'}>
               <Rating name="read-only" value={product.rating.rate} readOnly />
               <span className={'productItemRateCount'}>
                  ({product.rating.count})
               </span>
            </div>

            <div className={'productItemBtn'}>
               <Button
                  onClick={handleClickItem}
                  variant="contained"
                  color="success"
               >
                  Add to cart
               </Button>
            </div>
         </div>
      </div>
   )
}

export default ProductItem
