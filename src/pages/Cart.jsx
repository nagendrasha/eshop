import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import safty from "../assets/safty.png";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AppContext } from "../context/ProductContext";

const Cart = ({ cartItems, setCartItem }) => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);

  // Calculate the total prices and discounts
  const totalPrice = state?.cartData?.reduce((total, item) => total + item.offer_price, 0);
  const totalMRP = state?.cartData?.reduce((total, item) => total + item.price, 0);
  const totalDiscount = totalMRP - totalPrice;

  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVEFROMCART", payload: id });
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const [watch, setWatch] = useState(0);

  const randomWatch = () => {
    setWatch(Math.floor(Math.random() * 20) + 1);
  };

  useEffect(() => {
    randomWatch();
  }, []);

  return (
    <>
      <Header />
      <Grid container spacing={2} sx={{ padding: "10px" }}>

       <Box sx={{ boxShadow:'5px',borderRadius:'10px' }}>
        


       </Box>

        {state?.cartData?.map((item) => (
          <Grid key={item.id} container fullWidth>
            <Grid
              container
              sx={{
                border: "1px solid gray",
                borderRadius: "10px",
                p: {
                  lg: "10px",
                  sm: "10px",
                  md: "10px",
                  xs: "10px",
                },
                marginBottom: "10px"
              }}
            >
              <Grid item lg={4} md={4} sm={3} xs={4}>
                <Box>
                  <img
                    src={`https://api.adelsocial.com/${item.thumb_image}`}
                    alt={item.name}
                    style={{ width: "160px", height: "130px" }}
                  />
                </Box>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>{item.name} </span>
                  <CloseIcon onClick={() => handleRemoveFromCart(item.id)} />
                </Box>
                <span
                  style={{
                    color: "gray",
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <VisibilityIcon
                    sx={{ color: "red", fontSize: "16px", marginRight: "5px" }}
                  />{" "}
                  <b>{watch}</b> &nbsp; people viewing now
                </span>
                <span style={{ fontSize: "12px" }}>QTY - 1</span>
                <br />
                <br />
                <span>
                  ₹ {item.offer_price} <del>₹ {item.price}</del>{" "}
                  <span style={{ color: "orange", marginLeft: "5px" }}> 86% Off</span>{" "}
                </span>
                <br />
                <br />
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                  }}
                >
                  <CheckOutlinedIcon sx={{ color: "green" }} /> &nbsp; Delivery Between <b> &nbsp; 27 Jun - 30 Jun</b>
                </span>
              </Grid>
            </Grid>
          </Grid>
        ))}

        <Grid container fullWidth >
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{ p: 2 }}>
            <Typography sx={{ fontWeight: "bold", marginTop: "30px" }}>
              Price Details
            </Typography>
            <hr />
            <span>
              Total MRP <b style={{ float: "right" }}> ₹ {totalMRP} </b>
            </span>
            <br />
            <br />
            <span>
              Discount on MRP <b style={{ float: "right", color: "green" }}> ₹ {totalDiscount} </b>
            </span>
            <br />
            <hr />
            <span style={{ fontWeight: "bold" }}>
              Total Amount <b style={{ float: "right" }}>₹ {totalPrice}</b>
            </span>
            <br />
            <Box
              sx={{
                textAlign: "center",
                backgroundColor: "#FFF6F4",
                py: 1,
                mt: 2,
              }}
            >
              <span style={{ fontSize: "12px", fontWeight: 600 }}>
                {state?.cartData?.length} item(s) Selected for Order
              </span>
            </Box>
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2, backgroundColor: "#00321F" }}
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
            >
              Place Order
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={12} sx={{ mt: 2 }}>
          <img src={safty} alt="" style={{ width: "100%" }} />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Cart;
