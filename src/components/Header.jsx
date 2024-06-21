import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Toolbar,
  Typography
} from "@mui/material";
import React from "react";
import logo from "../assets/logo-2.png";

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1,p:0 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "white" }}
          elevation={0}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={logo} alt="logo" width={180} />
            </Typography>
            <Button>
              <FavoriteBorderIcon style={{ color: "black" }} />
            </Button>
            <Button>
              <ShoppingBagOutlinedIcon style={{ color: "black" }} />
            </Button>
          </Toolbar>
          <Paper
            component="form"
            sx={{
              mx:{lg:0,sm:2,xs:2,md:2},
              p: "2px 4px",
              display: "flex",
              alignItems: "center"
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml:1, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
          </Paper>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
