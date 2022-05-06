import { AppBar, Button, Container } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import './navbar.css'
import { FC } from 'react'

const Navbar: FC = () => {
   return (
      <AppBar sx={{ zIndex: 100 }} position={'fixed'} color={'default'}>
         <Container maxWidth={'xl'}>
            <div className={'navbar'}>
               <h1>MyStore</h1>
               <Button startIcon={<ShoppingCartIcon />} variant={'outlined'}>
                  Cart
               </Button>
            </div>
         </Container>
      </AppBar>
   )
}
export default Navbar
