import React from 'react'
import { Box,Typography, CardMedia,CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({channelDetail, marginTop}) => (
    <Box
      sx={{
        display:'flex', alignItems:'center' , justifyContent:"center" ,
        width: { xs:'356px', md:'320px'   } ,
        height:'326px', margin:'auto',
        boxShadow:'none', borderRadius:'1rem',
        marginTop
      }} >
        <Link to={`/channel/${channelDetail?.id?.channelId}`} >
        <CardContent sx={{
            display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', color:'#fff' 
        }} >
            <CardMedia image={ channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture }
                alt={channelDetail?.snippet?.title}
                sx={{
                borderRadius:'50%', height:'180px', width:'180px', mb:2, border:'.1rem solid #e3e3e3'}}
            />
                <Typography variant='h6'>
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{ fontSize:'.7rem', color:'gray', ml: '0.3rem'}} />
                </Typography>
                
                { channelDetail?.statistics?.subscriberCount && (
                    <Typography>
                        { parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString() }{' '} Subsribers
                    </Typography>)  }
        </CardContent>
        </Link>

    </Box>
  )

export default ChannelCard