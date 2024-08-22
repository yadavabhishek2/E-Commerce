import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UserName } from '../features/userSlice';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
      const email = data.get('email')
      const password = data.get('password')

      const formdata = {email,password}

      fetch("/api/logindata",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formdata)
      }).then((res)=>{
        return res.json()
      }).then((result)=>{

        console.log(result)
      
        if(result.Message === "Successfully Login.🥳"){
          if(result.Data && result.Data.useremail === "admin123@gmail.com"){
            navigate("/admin")
            toast.success("Welcome Admin.👤")
          }

          else if(result.Data.status==="Suspended"){
            toast.error("Contact Admin..👤")
          }

          else{
            navigate("/product")
            dispatch(UserName({FirstName:result.Data.userfisrt}))
            toast.success(result.Message)
          }  
        }
        else{
          toast.error(result.Message)
        }

      })

  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log-In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="text"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              color='success'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log-In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/reg" variant="body2">
                  {"Don't have an account? Registration"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}