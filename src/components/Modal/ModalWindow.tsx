import React, { FC, useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Button, ButtonGroup, Typography } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { IProduct } from '../../types'
import './modalWindow.css'
import { useAppDispatch } from '../../hooks'
import { addProduct, toggleItemAdded } from '../../store/cart/cart.slice'

interface ModalWindowProps {
   open: boolean
   setOpen: (open: boolean) => void
   product: IProduct
}

const ModalWindow: FC<ModalWindowProps> = ({ setOpen, open, product }) => {
   const dispatch = useAppDispatch()
   const [count, setCount] = useState(1)
   const handleClose = () => {
      setOpen(false)
   }
   const addToCart = () => {
      dispatch(addProduct({ product, quantity: count }))
      dispatch(toggleItemAdded(true))
      setOpen(false)
   }
   const increase = () => {
      setCount((count) => count + 1)
   }
   const decrease = () => {
      if (count > 1) {
         setCount((count) => count - 1)
      }
   }
   return (
      <div className={'modalWindow'}>
         <Dialog
            maxWidth={'xs'}
            fullWidth={true}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
         >
            <DialogTitle id="alert-dialog-title">
               {'Do you submit adding to cart?'}
            </DialogTitle>
            <span className={'modalWindowSpan'} />
            <DialogContent>
               <Typography component={'div'} id="alert-dialog-description">
                  <div className={'modalWindowItem'}>
                     <img
                        className={'modalWindowItemImg'}
                        src={product.image}
                        alt={product.title}
                     />
                     <div className={'modalWindowItemInfo'}>
                        <h4>{product.title}</h4>
                        <h2 className={'modalWindowItemPrice'}>
                           {product.price} $
                        </h2>
                        <div className={'modalWindowCount'}>
                           <ButtonGroup>
                              <Button onClick={decrease}>
                                 <RemoveIcon fontSize="small" />
                              </Button>
                              <Button onClick={increase}>
                                 <AddIcon fontSize="small" />
                              </Button>
                           </ButtonGroup>
                           <div className={'modalWindowCountNumber'}>
                              {count}
                           </div>
                        </div>
                     </div>
                  </div>
               </Typography>
            </DialogContent>
            <span className={'modalWindowSpan'} />
            <DialogActions>
               <Button onClick={addToCart}>Agree</Button>
               <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
         </Dialog>
      </div>
   )
}

export default ModalWindow
