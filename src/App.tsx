import "./App.css";
import LandingPage from "./views/LandingPage";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import InsideCategory from "./views/insideCategory";
import DetailProduct from "./views/detailProduct";
import Cart from "./views/components/Cart";
import Favorite from "./views/components/favorite";
import Profile from "./views/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./views/admin/Dashboard";
import Products from "./views/admin/Product";
import AddProduct from "./views/admin/Form/AddProduct";
import User from "./views/admin/User";
import Category from "./views/admin/Category";
import ProtectedRoute from "./views/components/ProtectedRoute";

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
        <Route path="/profile" element={<Profile />} />

        {/* Admin Routes - Protected */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/dashboard/products/add" element={<AddProduct />} />
          <Route path="/dashboard/users" element={<User />} />
          <Route path="/dashboard/category" element={<Category />} />
        </Route>
        {/* <Route path="/settings" element={<Profile />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
