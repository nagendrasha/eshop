import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import product1 from "../assets/product-1.png";
import StarIcon from "@mui/icons-material/Star";
import feature from "../assets/feature.png";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Countdown from 'react-countdown';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Product = () => {
  return (
    <>
    <Header/>
      <Grid container>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{ backgroundColor: "black", my: 1 }}
        >
          <Typography sx={{ color: "white", py: 1 }}>
            <marquee
              behavior="scroll"
              direction="up"
              scrollamount="2"
              style={{ textAlign: "center" }}
            >
              Buy 2 Get 1 Free (Add 3 item to cart)
            </marquee>
          </Typography>
        </Grid>
      </Grid>
      {/* product */}
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <img
            src={product1}
            alt="product"
            style={{
              width: "300px",
              margin: "auto",
              display: "block",
              height: "280px",
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
              zIndex: "1000",
              float: "right",
            }}
          >
            4.6 <StarIcon sx={{ fontSize: "16px", color: "green" }} />{" "}
          </span>
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <Box sx={{ border: "2px solid black", borderRadius: "10px" }}>
            <img
              src={product1}
              alt="product"
              style={{
                width: "100px",
                margin: "auto",
                display: "block",
                height: "100px",
              }}
            />
          </Box>
        </Grid>
        <span style={{ marginTop: "10px", fontWeight: "bold" }}>
          Healthy & Tasty Premium Nuts and Berries Mix (1 Kg)
        </span>
        <span style={{ marginTop: "5px" }}>
          ₹ 299 <del> ₹ 599</del>{" "}
          <span style={{ color: "orange", marginLeft: "5px" }}> (85%) Off</span>{" "}
        </span>

        <Grid item lg={12} sx={{ mt: 2 }}>
          <Typography sx={{ fontWeight: "bold" }}>
            CHECK DELIVERY & SERVICES
          </Typography>
          <Paper
            component="form"
            sx={{
              mx: { lg: 0, sm: 2, xs: 2, md: 2 },
              mt: 2,
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Enter Your Pin Code"
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton sx={{ p: "10px" }} aria-label="search">
              <span style={{ fontSize: "14px" }}>check</span>
            </IconButton>
          </Paper>
          <br />
          <span>
            Pay on delivery might be available <br /> Easy 14 days returns and
            exchanges <br /> Try & Buy might be available
          </span>
          <Typography sx={{ fontWeight: "bold", marginTop: "30px" }}>
            Product Details
          </Typography>
          <span>
            When you think of macadamia nuts, Indiais not the place where you’d
            think you can find them. And even if you do, themacadamia nuts
            costis often so high that it doesn’t feel worth it. Well, Foodilo
            now brings to you premium quality, exoticmacadamia nuts onlineat a
            reasonable macadamia price. Here are a few reasons why you shouldbuy
            macadamia nuts onlinetoday Macadamia nuts have a taste like no
            other! Its creamy, rich texture and buttery taste make it hard to
            believe that this nut is packed with nutrients and is actually good
            for you. Macadamia nuts have more antioxidant levels than most tree
            nuts. Antioxidants are needed by your body to help prevent cell
            damage and keep you looking youthful. Eating a handful of macadamia
            nuts can boost your immunity and enrich you with nutrients.
            Macadamia nuts are high in calories and unsaturated fats, but don’t
            be worried about eating them if you are on a diet. The healthy fats
            in these nuts nourish your body and keep you full, making them one
            of the best healthy snacks for weight loss.
          </span>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <img src={feature} alt="etc" />
        </Grid>

        <Grid
          container
          sx={{ backgroundColor: "#00321F", my: 1, borderRadius: "10px", p: 3,cursor:'pointer' }}
        >
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <span style={{ color: "white", fontSize: "14px" }}>
              Sales Ends Soon <br />
              <Countdown 
              date={Date.now() + 480000}/> 
              &nbsp; Hurry! Up
            </span>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography
              sx={{ color: "white", fontSize: "18px", float: "right" }}
            >
              <ShoppingBagOutlinedIcon />
              GO TO BAG
            </Typography>
          </Grid>

          {/* realated products */}
        </Grid>
      </Grid>
      <Typography sx={{ fontWeight: "bold", marginTop: "30px" }}>
        Related Products
      </Typography>
      <Grid
        container
        sx={{ p: { lg: "0px", sm: "5px", md: "5px", xs: "5px" }, mt: 2 }}
      >
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Box>
            <Card variant="outlined">
              <CardContent>
                <img
                  src={product1}
                  alt="product"
                  style={{
                    width: "150px",
                    margin: "auto",
                    display: "block",
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
                    zIndex: "1000",
                  }}
                >
                  4.6 <StarIcon sx={{ fontSize: "16px", color: "green" }} />{" "}
                </span>
                <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
                  Healthy & Tasty Premium Nuts and Berries Mix (1 Kg){" "}
                  <FavoriteBorderIcon />
                </Typography>
                <span>
                  ₹ 299 <del>₹ 599 </del>{" "}
                  <span style={{ color: "orange", marginLeft: "5px" }}>
                    {" "}
                    86% Off
                  </span>{" "}
                </span>
              </CardContent>
              <CardActions>
                <Button
                  size="large"
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: "#00321F" }}
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Box>
            <Card variant="outlined">
              <CardContent>
                <img
                  src={product1}
                  alt="product"
                  style={{
                    width: "150px",
                    margin: "auto",
                    display: "block",
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
                    zIndex: "1000",
                  }}
                >
                  4.6 <StarIcon sx={{ fontSize: "16px", color: "green" }} />{" "}
                </span>
                <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
                  Healthy & Tasty Premium Nuts and Berries Mix (1 Kg){" "}
                  <FavoriteBorderIcon />
                </Typography>
                <span>
                  ₹ 299 <del>₹ 599 </del>{" "}
                  <span style={{ color: "orange", marginLeft: "5px" }}>
                    {" "}
                    86% Off
                  </span>{" "}
                </span>
              </CardContent>
              <CardActions>
                <Button
                  size="large"
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: "#00321F" }}
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Grid>
      <Footer/>
    </>
  );
};

export default Product;
