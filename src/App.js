import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Error from "./Error";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Charkha from "./pages/Charkha";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Homepage from "./pages/Homepage";
import Payment from "./pages/Payment";
import Privacypolicy from "./pages/Privacypolicy";
import Product from "./pages/Product";
import Refundreturn from "./pages/Refundreturn";
import Shoppolicy from "./pages/Shoppolicy";
import Termsofservice from "./pages/Termsofservice";
import Trackorder from "./pages/Trackorder";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/charkha" element={<Charkha />} />
          <Route exact path="/single-product/:slug" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/checkout/payment" element={<Payment />} />
          <Route exact path="/shop" element={<Category />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/refund-policy" element={<Refundreturn />} />
          <Route exact path="/privacy-policy" element={<Privacypolicy />} />
          <Route exact path="/shoppingpolicy" element={ <Shoppolicy/> }/>
          <Route exact path="/termsofservice" element={ <Termsofservice/> }/>
          <Route exact path="/track" element={ <Trackorder/> }/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/faq" element={<Faq/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
