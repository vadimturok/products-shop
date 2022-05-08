import {
   Box,
   Button,
   Dialog,
   DialogContent,
   DialogContentText,
   SwipeableDrawer,
} from '@mui/material'
import React, { useState } from 'react'
import './cart.css'
import { useAppDispatch, useAppSelector } from '../../hooks'
import {
   clearCart,
   toggleCart,
   toggleItemRemoved,
} from '../../store/cart/cart.slice'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import CartProduct from '../CartProduct/CartProduct'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import { useNavigate } from 'react-router-dom'
import AlertComponent from '../Alert/AlertComponent'

const Cart = () => {
   const { isOpen, cartItems, isEmpty, totalSum, itemRemoved } = useAppSelector(
      (state) => state.cartReducer
   )
   const navigate = useNavigate()
   const [dialogOpen, setDialogOpen] = useState(false)
   const dispatch = useAppDispatch()
   const handleClose = () => {
      dispatch(toggleCart(false))
   }
   const handleSubmit = () => {
      dispatch(toggleCart(false))
      setDialogOpen(true)
   }
   const handleCloseSubmit = () => {
      setDialogOpen(false)
      dispatch(toggleCart(true))
   }
   const handleSubmitOrder = () => {
      navigate('/success')
      setDialogOpen(false)
      dispatch(clearCart())
   }
   return (
      <div className={'cart'}>
         <Dialog open={dialogOpen} maxWidth={'xs'} fullWidth={true}>
            <DialogTitle id="alert-dialog-title">{'Place order'}</DialogTitle>
            <span className={'modalWindowSpan'} />
            <DialogContent>
               <DialogContentText>
                  Do you submit placing order?
               </DialogContentText>
            </DialogContent>
            <span className={'modalWindowSpan'} />
            <DialogActions>
               <Button onClick={handleSubmitOrder}>Agree</Button>
               <Button onClick={handleCloseSubmit}>Cancel</Button>
            </DialogActions>
         </Dialog>
         <SwipeableDrawer
            anchor={'right'}
            onClose={handleClose}
            onOpen={handleClose}
            open={isOpen}
         >
            <Box sx={{ width: 400, paddingTop: 2 }}>
               <AlertComponent
                  open={itemRemoved}
                  setOpen={() => dispatch(toggleItemRemoved(false))}
                  text={'Successfully removed product!'}
                  severity={'info'}
               />
               <div className={'cartHeader'}>
                  <h1 className={'cartTitle'}>Your cart</h1>
                  <ShoppingBasketIcon className={'cartIcon'} />
               </div>
               <div className={'cartSpan'} />
               <div className={'cartList'}>
                  {isEmpty ? (
                     <div className={'emptyCart'}>Cart is empty</div>
                  ) : (
                     cartItems.map((item) => (
                        <CartProduct key={item.product.id} product={item} />
                     ))
                  )}
               </div>
               {!isEmpty && (
                  <>
                     <div className={'cartSpan'} />
                     <div className={'cartBottom'}>
                        <h3 className={'cartTotal'}>
                           Total: {totalSum.toFixed(2)} $
                        </h3>
                        <Button onClick={handleSubmit} variant={'contained'}>
                           Place order
                        </Button>
                     </div>
                  </>
               )}
            </Box>
         </SwipeableDrawer>
      </div>
   )
}

export default Cart
