import { AppBar, Button, Container } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import './navbar.css'
import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { toggleCart } from '../../store/cart/cart.slice'
import { useNavigate } from 'react-router-dom'

const Navbar: FC = () => {
   const dispatch = useAppDispatch()
   const navigate = useNavigate()
   const { cartItems } = useAppSelector((state) => state.cartReducer)
   return (
      <AppBar sx={{ zIndex: 100 }} position={'fixed'} color={'default'}>
         <Container maxWidth={'xl'}>
            <div className={'navbar'}>
               <h1 onClick={() => navigate('/')} className={'navbarLogo'}>
                  MyStore
               </h1>
               <Button
                  onClick={() => dispatch(toggleCart(true))}
                  startIcon={<ShoppingCartIcon />}
                  variant={'outlined'}
               >
                  Cart({cartItems.length})
               </Button>
            </div>
         </Container>
      </AppBar>
   )
}
export default Navbar
