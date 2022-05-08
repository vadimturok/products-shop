import React, { FC } from 'react'
import { Snackbar } from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

interface AlertComponentProps {
   severity: 'success' | 'error' | 'info'
   text: string
   open: boolean
   setOpen: () => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
   props,
   ref
) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const AlertComponent: FC<AlertComponentProps> = ({
   text,
   severity,
   open,
   setOpen,
}) => {
   const handleClose = (
      event?: React.SyntheticEvent | Event,
      reason?: string
   ) => {
      if (reason === 'clickaway') {
         return
      }
      setOpen()
   }
   return (
      <Snackbar onClose={handleClose} autoHideDuration={1000} open={open}>
         <Alert onClose={handleClose} variant={'filled'} severity={severity}>
            {text}
         </Alert>
      </Snackbar>
   )
}

export default AlertComponent
