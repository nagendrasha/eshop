import "./App.css";
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
