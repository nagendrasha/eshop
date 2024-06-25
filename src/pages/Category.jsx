import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Category = () => {
  const API = "https://api.adelsocial.com/api/product-by-category/1";

  const navigate = useNavigate();

  const [data,setData] = useState([]);

  const getProducts = async () =>{
    const res = await axios.get(API);
    setData(res.data.products);
  }

  useEffect(()=>{
    getProducts();
  },[]);

  return (
    <>
      <Header />
      <Grid container sx={{ p: { lg: "0px", sm: "5px", xs: "5px" } }}>
        {data.map((e, key = 0) => (
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Box>
              <Card variant="outlined">
                <CardContent>
                  <img
                    src={`https://api.adelsocial.com/` + e.thumb_image}
                    alt="product"
                    style={{
                      width: "120px",
                      margin: "auto",
                      display: "block",
                      height: "120px",
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
                    {e.rating}{" "}
                    <StarIcon sx={{ fontSize: "16px", color: "green" }} />{" "}
                  </span>
                  <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
                    {e.name.slice(0, 20) + `..`} <FavoriteBorderIcon />
                  </Typography>
                  <span>
                    ₹ {e.offer_price} <del> ₹ {e.price}</del>{" "}
                    <span style={{ color: "orange", marginLeft: "5px" }}>
                      {" "}
                      50% Off
                    </span>{" "}
                  </span>
                </CardContent>
                <CardActions>
                  <Button
                    size="large"
                    variant="contained"
                    fullWidth
                    onClick={() => {
                      navigate("/single-product");
                    }}
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

      <Footer />
    </>
  );
};

export default Category;
