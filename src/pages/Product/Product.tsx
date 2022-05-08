import React, { FC, useState } from 'react'
import './product.css'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Button, Chip, Rating, Skeleton, Typography } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import ModalWindow from '../../components/Modal/ModalWindow'
import { toggleItemAdded } from '../../store/cart/cart.slice'
import AlertComponent from '../../components/Alert/AlertComponent'

const Product: FC = () => {
   const { productId } = useParams()
   const { products } = useAppSelector((state) => state.productsReducer)
   const { cartItems, itemAdded } = useAppSelector((state) => state.cartReducer)
   const dispatch = useAppDispatch()
   const product = products.filter(
      (product) => product.id === Number(productId)
   )[0]
   const [open, setOpen] = useState(false)

   const handleClickItem = () => {
      setOpen(true)
   }
   if (product) {
      return (
         <div className={'product'}>
            <AlertComponent
               open={itemAdded}
               setOpen={() => dispatch(toggleItemAdded(false))}
               severity={'success'}
               text={'Successfully added to cart!'}
            />
            <ModalWindow product={product} open={open} setOpen={setOpen} />
            <div className="productWrapper">
               <div className="productImage">
                  <img
                     className={'productImg'}
                     src={product.image}
                     alt={product.title}
                  />
               </div>
               <div className={'productDescription'}>
                  <Chip
                     color={'primary'}
                     size={'medium'}
                     label={product.category}
                     variant="outlined"
                  />
                  <h1 className={'productTitle'}>{product.title}</h1>
                  <p className={'productText'}>{product.description}</p>
                  <Rating
                     readOnly
                     name="size-large"
                     value={product.rating.rate}
                     size="large"
                  />
                  <h1 className={'productPrice'}>{product.price} $</h1>
                  <Button
                     disabled={
                        !!cartItems.find(
                           (item) => item.product.id === product.id
                        )
                     }
                     onClick={handleClickItem}
                     color={'success'}
                     variant={'contained'}
                     endIcon={<AddShoppingCartIcon />}
                  >
                     Add to cart
                  </Button>
               </div>
            </div>
         </div>
      )
   } else {
      return (
         <div className={'product'}>
            <div className={'productWrapper'}>
               <Skeleton variant="rectangular" width={500} height={500} />
               <div className={'productDescription'}>
                  <Typography variant={'h1'} className={'productTitle'}>
                     <Skeleton />
                  </Typography>
                  <div className={'productText'}>
                     <Skeleton />
                     <Skeleton />
                  </div>
                  <div className={'productPrice'}>
                     <Skeleton />
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Product
