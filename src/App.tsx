import "./App.css";
import LandingPage from "./views/LandingPage";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import InsideCategory from "./views/insideCategory";
import DetailProduct from "./views/detailProduct";
import Cart from "./views/cart";
import Favorite from "./views/favorite";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/insideCategory" element={<InsideCategory />} />
        <Route path="/detailProduct" element={<DetailProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </Router>
  );
}

export default App;
