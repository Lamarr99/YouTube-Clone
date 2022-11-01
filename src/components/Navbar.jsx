import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '.././utils/constants'
import SearchBar from './SearchBar'

const Navbar = () =>  (
    <Stack
     direction='row'
     alignItems='center' 
     m={0}
     p={2} 
     sx={{color:'white', background: '#000',zIndex:'10000', 
     position: 'sticky', top: 0, justifyContent: 'space-between',display: 'flex', alignItems: 'center'}} >

        <Link to='/'>
          <img src={logo} alt="logo" height={40} />
        </Link>

        <SearchBar />

    </Stack>
  )

export default Navbar