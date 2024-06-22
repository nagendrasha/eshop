import "./App.css";
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
