import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import isMobilePhone from 'validator/es/lib/isMobilePhone';

export default function DirectChatForm() {
 const [phoneNumber,setPhoneNumber] = useState('')

 const isValidMobileNumber=  () =>{
  return isMobilePhone(`${"+91"}${phoneNumber.replace(/\s|\+91/g, "")}`, 'en-IN')
 } 

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <WhatsAppIcon sx={{ m: 1,  }}>
            <LockOutlinedIcon />
          </WhatsAppIcon>
          <Typography component="h1" variant="h5">
          One Click WhatsApp Message
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="mobileNumber"
              label="Phone Number"
              name="mobileNumber"
              autoComplete="mobileNumber"
              autoFocus
              onChange={(e)=> setPhoneNumber(e.target.value)}
            />
          <Link href={`https://wa.me/+91${phoneNumber.replace(/\s|\+91/g, "")}`} underline="none">
          <Button
             
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!isValidMobileNumber()}
            >
             Send Message
            </Button>
          </Link>
          

          </Box>
        </Box>
      </Container>
  );
}
