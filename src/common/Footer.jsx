import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '50vh',
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            E-Commerce
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {'Pin a footer to the bottom of the viewport.'}
            {'The footer will move as the main element of the page grows.'}
          </Typography>
          
          <Box 
          sx={{
            display:"flex",
            fontSize:"30px",
            gap:"10px",
            justifyContent:"center",
            ":hover":{
                cursor:"pointer"
            }
          }}
          >
        <FacebookIcon fontSize='10px'/>
        <LinkedInIcon fontSize='10px'/>
        <TwitterIcon fontSize='10px'/>
        <InstagramIcon fontSize='10px'/>
          </Box>

        </Container>
        <Box
          component="footer"
          sx={{
            backgroundColor:"purple",
            py: 3,
            px: 2,
            mt: 'auto',
            color:"white"
                
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              My sticky footer can be found here.
            </Typography>
          
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}