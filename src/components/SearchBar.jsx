import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'



const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
  
      setSearchTerm('');
  };
  }

  return (
    <Paper
    component='form'
    onSubmit={handleSubmit}
    sx={{
    borderRadius: 20,
    border: '1px solid #e3e3e3',
    px: 2,
    boxShadow:'none',
    mr: {sm: 5},
    width:`clamp(15vw,100px ,50vw)`,
    height:{xs:'1.5rem', md:'2rem'},
    display:'flex',
    flexWrap:'nowrap',
    justifyContent:'space-between',
    alignItems:'center',
    right:'0'
    }}>
  
    <input style={{maxWidth:'70%',position:'relative'}} className='search-bar' placeholder='Search...' value={searchTerm}
    onChange={(e)=> setSearchTerm(e.target.value) } />
    <IconButton type='submit' sx={{p: ".5rem", color: 'red'}}>
      <Search />
    </IconButton>
    </Paper>
  )
}

export default SearchBar