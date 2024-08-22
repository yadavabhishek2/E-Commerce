import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useDispatch, useSelector } from 'react-redux';
import {  Link, useNavigate } from 'react-router-dom';
import { Badge, Fab } from '@mui/material';
import { UserName } from '../features/userSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const pages = [
  {name:"Products", url:"/product"}
];
const settings = [
  {name:"Profile",url:"/fdgfh"},
  {name:"Log-Out",url:"/"}
];

function Navbar() {




  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const firstName = useSelector((state)=>state.Login.userName)
  const cart = useSelector((state)=>state.AllCart.cart)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  function handleLogout(){
    navigate("/")
    dispatch(UserName({FirstName:""}))
  }

  return (
    <AppBar position="static" sx={{backgroundColor:"purple"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={`${page.url}`}>
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
              </Link> 
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          {
            firstName===""?"":
            <IconButton size="large" aria-label="show 4 new mails" color="success">
          <Link to={"/cart"}>
              <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon sx={{marginRight:"10px"}} color='success'/>
              </Badge>
              </Link>   
            </IconButton>
          }
         
            
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

              {
                firstName===""? <Avatar src='' alt=''/> :
                <Fab variant='extended' color='success'>
                <Avatar sx={{marginRight:"5px",bgcolor:"orange"}} >{firstName && firstName[0]}</Avatar>
                {firstName}
                </Fab>
              }
              </IconButton>
            </Tooltip>
            {
              firstName===""?"": <Button variant='contained' color='error' sx={{marginLeft:"10px"}} onClick={handleLogout}>Log-Out</Button>
            }
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;