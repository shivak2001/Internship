import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
  let nav=useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div">
            PET ADOPTION
          </Typography>
          
         

          <Typography sx={{ flexGrow: 3}}>
            <Link to="/Adminhome" style={{ textDecoration: "none", color: "white",marginLeft:"500px" }}>
              Home
            </Link>


            <Link to="/Addpet" style={{ textDecoration: "none", color: "white" ,marginLeft:"30px"}}>
              Add Pet
            </Link>

            <Link to="/Viewpet" style={{ textDecoration: "none", color: "white",marginLeft:"30px" }}>
              Viewpets
            </Link>
           
            

          </Typography>


          
        </Toolbar>
      </AppBar>
    </Box>
  );
}