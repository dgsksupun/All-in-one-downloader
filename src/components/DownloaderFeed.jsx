import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import ButtonGroup from '@mui/material/ButtonGroup';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#b1e1e9' : '#b1e1e9',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color:"black",
}));


export default function DownloaderFeed(props) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const { title, subtitle } = props;
  
  const [textFieldValue, setTextFieldValue] = useState('');

  const handleTextFieldChange = event => {
    setTextFieldValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (textFieldValue.trim() === '') {
      // Copy logic here
      // You can use libraries like clipboard.js to implement copying
    } else {
      copyToClipboard(textFieldValue);
      setTextFieldValue('');
    }
  };

  const copyToClipboard = text => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  const buttonIcon = textFieldValue.trim() === '' ? <FileCopyIcon /> : <ClearIcon />;
  const buttonText = textFieldValue.trim() === '' ? 'Copy' : 'Clear';
  return (
    <div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
     
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        sx={{
          '@media (max-width: 500px)': {  // Media query for screens up to 600px wide (adjust the value as needed)
            flexDirection: 'column',     // Change direction to column for mobile view
          },
          paddingBottom:2,
          paddingTop:1,
        }}
      >
        <Item>Download Facebook Images</Item>
        <Item>Download Facebook Videos</Item>
        <Item>Download Facebook Reels</Item>
      </Stack>
    </div>
      <div style={{display:'flex',justifyContent:'center',alignItems: 'center'}} >
      <Box sx={{
        width: 600,
        height: 100,
        backgroundColor: '#bdc3c7',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
      </Box>
      </div>
      <div>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Oslo, sans-serif',
    fontWeight: 'normal'}}>
  <h2>{title}</h2>
  </div>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',textAlign:'center', fontFamily: 'Oslo, sans-serif',
    fontWeight: 'normal' }}>
  <h3>{subtitle}</h3>
  </div>
</div>

<div>
  <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',textAlign:'center',paddingBottom:10}}>
  <TextField  id="outlined-basic" label="Copy URL Here" variant="outlined" size="small" sx={{width:400}} value={textFieldValue} onChange={handleTextFieldChange}/>
  <Button variant="outlined" onClick={handleButtonClick}>
  {buttonIcon}
  {buttonText}
</Button>
<Button variant="contained" color="success">
  <DownloadDoneIcon/> 
</Button>
  </Box>
  <div style={{display:'flex',justifyContent:'center',alignItems: 'center'}} >
      <Box sx={{
        width: 250,
        height: 150,
        backgroundColor: '#00b4d8',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
        
      }}>
      </Box>

      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems: 'center',paddingTop:10}} >
      <Box>
      <ButtonGroup variant="contained" aria-label="outlined primary button group" color="success">
      <Button>1080p</Button>
      <Button>720p</Button>
      <Button>480p</Button>
      <Button>MP3</Button>
    </ButtonGroup>
      </Box>
      </div>

</div>
    </div>
  );
}
