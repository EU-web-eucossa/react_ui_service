import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Order from "./Order";
import Cart from "./Cart";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  );
}

export default Pages;
