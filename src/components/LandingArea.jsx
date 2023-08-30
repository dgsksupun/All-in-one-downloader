import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export default function LandingArea() {
    const isSmallScreen = window.innerWidth <= 500;
  return (
    <>
    <div style={{ textAlign: 'center' }}>
    <h3> All in One Downloader | Download Videos and Images from Social Media</h3>
    </div>
   
    <Box sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        paddingTop:10,
        AlignItems: 'center',
        AlignContent: 'center',
        '@media (max-width: 500px)': {
            flexDirection: isSmallScreen ? 'row' : 'column',} 
    }}>
       
        <Box sx={{paddingLeft:5,paddingRight:5,paddingBottom:5}} >
        <Card sx={{ maxWidth: 345,backgroundColor:'#b1e1e9' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="./images/fb.jpg"
        title="Facebook"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Facebook
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Easily save Facebook videos and images by pasting the post's link.
        Download for offline viewing or sharing.
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"center"}}>
      <Link to="/facebook">
      <Button  variant="contained">Go to Downloader</Button>
      </Link>
      </CardActions>
    </Card>
        </Box>
       


<Box sx={{paddingLeft:5,paddingRight:5,paddingBottom:5}}>
    <Card sx={{ maxWidth: 345,backgroundColor:'#b1e1e9'  }}>
      <CardMedia
        sx={{ height: 140 }}
        image="./images/insta.jpg"
        title="Instagram"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Instagram
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Download Instagram videos and images via URL. 
        Capture and store your favorite Instagram content effortlessly.
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"center"}}>
        <Link to="/instagram">
      <Button  variant="contained">Go to Downloader</Button>
       </Link>
      </CardActions>
    </Card>
    </Box>
   

<Box sx={{paddingLeft:5,paddingRight:5,paddingBottom:5}}>
    <Card sx={{ maxWidth: 345 ,backgroundColor:'#b1e1e9' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="./images/yt.png"
        title="YouTube"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          YouTube
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Download YouTube videos by providing their link.
        Enjoy videos offline or share them seamlessly it across different platforms.
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"center"}}>
        <Link to="/youtube">
      <Button  variant="contained">Go to Downloader</Button>
      </Link>
      </CardActions>
    </Card>
    </Box>
    </Box>
   </>
  );
}
