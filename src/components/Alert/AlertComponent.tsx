import React, { FC } from 'react'
import { Snackbar } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../hooks'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { toggleItemAdded } from '../../store/cart/cart.slice'

interface AlertComponentProps {
   severity: 'success' | 'error'
   text: string
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
   props,
   ref
) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const AlertComponent: FC<AlertComponentProps> = ({ text, severity }) => {
   const { itemAdded } = useAppSelector((state) => state.cartReducer)
   const dispatch = useAppDispatch()
   const handleClose = (
      event?: React.SyntheticEvent | Event,
      reason?: string
   ) => {
      if (reason === 'clickaway') {
         return
      }
      dispatch(toggleItemAdded(false))
   }
   return (
      <Snackbar onClose={handleClose} autoHideDuration={1000} open={itemAdded}>
         <Alert onClose={handleClose} variant={'filled'} severity={severity}>
            {text}
         </Alert>
      </Snackbar>
   )
}

export default AlertComponent
