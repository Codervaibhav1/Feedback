import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import logo from '../assets/Screenshot_2023-10-08_072303-removebg-preview.png'
const Navbar = () => {
  return (
    <AppBar position="static" sx={{backgroundColor:'black'}} className='position-sticky top-0'>
    <Toolbar sx={{display:'flex', justifyContent:'center'}}>
        <img id='logo' className='my-2' src={logo} alt="" />   
    </Toolbar>
  </AppBar>
  )
}

export default Navbar