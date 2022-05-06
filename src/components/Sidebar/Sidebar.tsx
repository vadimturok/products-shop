import React, { FC } from 'react'
import './sidebar.css'
import TextField from '@mui/material/TextField'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import { Slider } from '@mui/material'
import { IProduct } from '../../types'
import { findMaxPrice } from '../../utils'

const Sidebar: FC<{ products: IProduct[] }> = ({ products }) => {
   const [age, setAge] = React.useState('')
   const [value, setValue] = React.useState([0, 200])

   const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value)
   }

   const changePrice = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[])
   }

   return (
      <div className={'sidebar'}>
         <div className={'searchInput'}>
            <TextField
               fullWidth={true}
               id="standard-search"
               label="Search product"
               type="search"
               variant="standard"
            />
         </div>
         <div className={'selectCategory'}>
            <FormControl variant="standard" sx={{ minWidth: 150 }}>
               <InputLabel id="demo-simple-select-standard-label">
                  Select category
               </InputLabel>
               <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
                  label="Select category"
               >
                  <MenuItem value={0}>
                     <em>All</em>
                  </MenuItem>
                  <MenuItem value={10}>Electronics</MenuItem>
                  <MenuItem value={20}>Jewelery</MenuItem>
               </Select>
            </FormControl>
         </div>
         <div className={'selectPrice'}>
            <p>Filter by price:</p>
            <Slider
               getAriaLabel={() => 'Temperature range'}
               value={value}
               onChange={changePrice}
               valueLabelDisplay="auto"
               min={0}
               max={findMaxPrice(products)}
            />
         </div>
      </div>
   )
}

export default Sidebar
