import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Nav.css';


export default function Nav() {
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar  position="fixed" color="">
        <Toolbar className="nav">
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Boxin
          </Typography>
          <Button className="nav__button" color="inherit">Business Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
