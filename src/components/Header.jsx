import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography
} from "@mui/material";
import React from "react";
import logo from "../assets/logo-2.png";
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ flexGrow: 1,p:0 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "white" }}
          elevation={0}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1,cursor:'pointer' }}>
              <img src={logo} alt="logo" width={180}
              onClick={()=>{navigate("/")}} />
            </Typography>
            <Button>
              <FavoriteBorderIcon style={{ color: "black" }} />
            </Button>
            <Button>
              <ShoppingBagOutlinedIcon style={{ color: "black" }} />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
