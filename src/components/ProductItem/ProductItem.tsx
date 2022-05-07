import React, { FC, useState } from 'react'
import './productItem.css'
import { IProduct } from '../../types'
import { Button, Rating } from '@mui/material'
import ModalWindow from '../Modal/ModalWindow'
import { useAppSelector } from '../../hooks'
import { useNavigate } from 'react-router-dom'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
   const navigate = useNavigate()
   const [open, setOpen] = useState(false)
   const { cartItems } = useAppSelector((state) => state.cartReducer)
   const handleClickItem = () => {
      setOpen(true)
   }
   const navigateToProduct = () => {
      navigate(`/product/${product.id}`)
   }
   return (
      <div className={'productItem'}>
         <ModalWindow product={product} open={open} setOpen={setOpen} />
         <div onClick={navigateToProduct} className={'productTop'}>
            <img
               alt={product.title}
               src={product.image}
               className={'productItemImg'}
            />
         </div>
         <div className={'modalWindowSpan'} />
         <div className={'productItemDescription'}>
            <p onClick={navigateToProduct} className={'productItemTitle'}>
               {product.title}
            </p>
            <h2 className={'productItemPrice'}>{product.price} $</h2>
            <div className={'productItemRate'}>
               <Rating name="read-only" value={product.rating.rate} readOnly />
               <span className={'productItemRateCount'}>
                  ({product.rating.count})
               </span>
            </div>

            <div className={'productItemBtn'}>
               <Button
                  disabled={
                     !!cartItems.find((item) => item.product.id === product.id)
                  }
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
