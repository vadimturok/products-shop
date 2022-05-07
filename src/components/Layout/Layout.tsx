import React, { FC } from 'react'
import Navbar from '../Navbar/Navbar'
import { Container } from '@mui/material'
import AlertComponent from '../Alert/AlertComponent'
import Cart from '../Cart/Cart'

interface LayoutProps {
   children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
   return (
      <>
         <Navbar />
         <Container maxWidth={'xl'}>
            <div className={'pages'}>{children}</div>
            <AlertComponent
               severity={'success'}
               text={'Successfully added to cart!'}
            />
            <Cart />
         </Container>
      </>
   )
}

export default Layout
