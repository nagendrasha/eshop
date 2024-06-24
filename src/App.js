import "./App.css";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import Homepage from "./pages/Homepage";
import Payment from "./pages/Payment";
import Product from "./pages/Product";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/single-product" element={<Product/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/checkout" element={<Checkout/>} />
          <Route exact path="/checkout/payment" element={<Payment/>} />
          <Route exact path="/shop" element={<Category/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
