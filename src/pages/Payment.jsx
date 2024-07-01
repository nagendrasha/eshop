import React, { useState, useContext } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Countdown from "react-countdown";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MoneyIcon from "@mui/icons-material/Money";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GooglePayIcon from '@mui/icons-material/Google'; // Ensure you have an appropriate icon for Google Pay
import Payment_img from "../assets/payment.png";
import upi from "../assets/upi-2.gif";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AppContext } from "../context/ProductContext";

const Payment = () => {
  const { state } = useContext(AppContext);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const methods = [
    { id: "phonepe", label: "Phone Pay", icon: <PhoneIphoneIcon /> },
    { id: "paytm", label: "Paytm", icon: <AccountBalanceWalletIcon /> },
    { id: "bhim", label: "BHIM UPI", icon: <CreditCardIcon /> },
    { id: "whatsapp", label: "Whatsapp Pay", icon: <WhatsAppIcon /> },
    { id: "gpay", label: "Google Pay", icon: <GooglePayIcon /> }, // Added Google Pay
    { id: "cod", label: "COD", icon: <MoneyIcon /> },
  ];

  const handleSelect = (id) => {
    setSelectedMethod(id);
    if (id !== 'cod') {
      const paymentUrl = constructPaymentUrl(totalPrice);
      window.location.href = paymentUrl;
    }
  };

  const constructPaymentUrl = (amount) => {
    const baseUrl = "paytmmp://pay";
    const params = new URLSearchParams({
      pa: "MAB0450929A0151206@yesbank",
      pn: "Online Shopping",
      am: amount.toFixed(2),
      tr: "H2MkMGf5olejI",
      mc: "8931",
      cu: "INR",
      tn: "Online Shopping"
    });

    return `${baseUrl}?${params.toString()}`;
  };

  const totalPrice = state?.cartData?.reduce((total, item) => total + item.offer_price, 0);
  const totalMRP = state?.cartData?.reduce((total, item) => total + item.price, 0);
  const totalDiscount = totalMRP - totalPrice;

  return (
    <>
      <Header />
      <Grid container>
        <Box sx={{ textAlign: "center" }}>
          <img
            src={Payment_img}
            alt="Payment"
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <span>
            Offer Ends In <Countdown date={Date.now() + 480000} />
          </span>
        </Box>
      </Grid>
      <Grid container sx={{ backgroundColor: "#E7EDFF", mt: 2 }}>
        <Grid item lg={3}>
          <Box sx={{ padding: "10px", width: "60px", float: "right" }}>
            <img src={upi} alt="payment" style={{ width: "100%" }} />
          </Box>
        </Grid>
        <Grid item lg={9} sx={{ display: "flex", alignItems: "center", pl: 5 }}>
          <Typography sx={{ fontWeight: "bold" }}>
            Pay online & get EXTRA ₹33 off
          </Typography>
        </Grid>
      </Grid>

      <Box p={2}>
        <Grid container spacing={2}>
          {methods.map((method) => (
            <Grid item xs={12} sm={6} key={method.id}>
              <Button
                variant={selectedMethod === method.id ? "contained" : "outlined"}
                fullWidth
                startIcon={method.icon}
                onClick={() => handleSelect(method.id)}
              >
                {method.label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Grid container sx={{ p: { lg: '0px', sm: '10px', xs: '10px' } }}>
        <Grid lg={12} md={12} sm={12} xs={12} sx={{ mb: 5 }}>
          <Typography sx={{ fontWeight: "bold", marginTop: "30px" }}>
            Price Details ({state?.cartData?.length}) Items
          </Typography>
          <hr />
          <span>Total MRP <b style={{ float: 'right' }}>₹ {totalMRP}</b></span>
          <br /> <br />
          <span>Discount on MRP <b style={{ float: 'right', color: 'green' }}> - ₹ {totalDiscount}</b></span><br />
          <hr />
          <span style={{ fontWeight: 'bold' }}>Total Amount <b style={{ float: 'right' }}>₹ {totalPrice}</b></span>
          <br />
        </Grid>
        {/* <Grid item lg={6} sm={6} md={6} xs={6}>
          <span>₹ {totalPrice}</span> <br />
          <span style={{ color: 'red' }}>View More</span>
        </Grid>
        <Grid item lg={6} sm={6} md={6} xs={6}>
          <Button variant="contained" fullWidth sx={{ mt: 2, backgroundColor: '#00321F' }}>Pay Now</Button>
        </Grid> */}
      </Grid>

      <Footer />
    </>
  );
};

export default Payment;
