import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import { Box, Button, Grid, IconButton, InputBase, Paper, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import product1 from "../assets/product-1.png";
import product2 from "../assets/product-2.png";
import termscond from "../assets/terms&cond.png";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";




const slideImages = [
  {
    url: banner1,
    caption: "Slide 1",
  },
  {
    url: banner2,
    caption: "Slide 2",
  },
];

const products = [
  {
    id: 1,
    name: "100% Natural Premium California Almonds (1 Kg)",
    price: 1776,
    s_price: 279,
    img: product1,
    rating: "4.6",
    off: "83%",
    product_desc: "this desc",
  },
  {
    id: 2,
    name: "100% Natural Premium California Almonds (2 Kg)",
    price: 1776,
    s_price: 279,
    img: product2,
    rating: "4.6",
    off: "83%",
    product_desc: "this desc",
  },
];

const Homepage = () => {

  const navigate = useNavigate();

  return (
    <>
    <Header/>
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
      <Grid sx={{ display:{lg:'block',md:'none',sm:'none',xs:'none'} }}>
        <div className="slide-container" style={{ marginTop: "20px" }}>
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    height: "130px",
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                ></div>
              </div>
            ))}
          </Slide>
        </div>
      </Grid>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ backgroundColor: "#00321F",my:1 }}>
          <Typography sx={{ color: "white", py: 1 }}>
            <marquee behavior="scroll" direction="left">
              Buy 2 Get 1 Free (Add 3 item to cart)
            </marquee>
          </Typography>
        </Grid>
        <Box>
          <img src={termscond} alt="Terms&Cond" style={{ width: "100%" }} />
        </Box>
      </Grid>

      {/* Products  */}
      <Typography
        variant="h5"
        sx={{ textAlign: "center", fontWeight: "bold", my: 1 }}
      >
        Pack Of 1 Kg Collection
      </Typography>
      <Grid container sx={{ p:{lg:'0px',sm:'5px',xs:'5px'}}}>
        {products.map((e) => (
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Box>
              <Card variant="outlined">
                <CardContent>
                  <img
                    src={e.img}
                    alt="product"
                    style={{
                      width: "150px",
                      margin:'auto',
                      display:'block',
                      height: "150px",
                    }}
                  />
                  <span
                    style={{
                      marginTop: "-40px",
                      fontSize: "14px",
                      border: "1px solid gray",
                      borderRadius: "20px",
                      padding: "5px",
                      display: "flex",
                      alignItems: "center",
                      width: "40px",
                      zIndex:'1000'
                    }}
                  >
                    {e.rating}{" "}
                    <StarIcon sx={{ fontSize: "16px", color: "green" }} />{" "}
                  </span>
                  <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
                    {e.name} <FavoriteBorderIcon />
                  </Typography>
                  <span>
                    ₹ {e.s_price} <del>{e.price}</del>{" "}
                    <span style={{ color: "orange", marginLeft: "5px" }}>
                      {" "}
                      {e.off} Off
                    </span>{" "}
                  </span>
                </CardContent>
                <CardActions>
                  <Button
                    size="large"
                    variant="contained"
                    fullWidth
                    onClick={()=>{navigate("/single-product")}}
                    sx={{ backgroundColor: "#00321F" }}
                  >
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{display:'flex',justifyContent:'center'}}>
      <Button variant="outlined" sx={{ border:'2px solid #00321F',mt:2,color:'#00321F' }}>View More</Button>
      </Box>
      <Footer/>
      {/* products end */}
    </>
  );
};

export default Homepage;