import CircularProgress from '@mui/material/CircularProgress'
import React, { FC } from 'react'
import './loader.css'

const Loader: FC = () => {
   return (
      <div className={'loader'}>
         <CircularProgress />
      </div>
   )
}

export default Loader
