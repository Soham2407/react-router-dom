import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OrderSummery from "./components/OrderSummery";
import NoMatch from "./components/NoMatch";
import Product from "./components/Product";
import FeaturedProduct from "./components/FeaturedProduct";
import NewProduct from "./components/NewProduct";
import Users from "./components/Users";
import Admin from "./components/Admin";
import UserDetails from "./components/UserDetails";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummery />} />
        <Route path="products" element={<Product />}>
          <Route index element={<FeaturedProduct />} />
          <Route path="featured" element={<FeaturedProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":id" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
