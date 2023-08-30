import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';



export default function Navbar() {
  const isSmallScreen = window.innerWidth <= 500;
  return (
   
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{
            justifyContent:'center',
           flexDirection: 'row',
           '@media (max-width: 500px)': {
          flexDirection: isSmallScreen ? 'row' : 'column',} 
        }}>
          <>
          <Typography variant="h6" component="div" sx={{
            flexGrow: 1,
            textAlign: { xs: 'center', sm: 'center' } // Center for xs and left for sm and above
          }}>
            All in One Downloader
          </Typography>
          <div sx={{  flexDirection: 'row',
           '@media (max-width: 500px)': {
          flexDirection: isSmallScreen ? 'row' : 'row',}
           }}>
          <FacebookIcon sx={{paddingRight:2,paddingLeft:2}} fontSize="large" />
          
          <InstagramIcon sx={{paddingRight:2,paddingLeft:2}} fontSize="large" />
        
          <YouTubeIcon sx={{paddingRight:2,paddingLeft:2}} fontSize="large" />
          </div>
           
        </>
          
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
