import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home/HomePage";
import { useState, UseEffect } from "react";
import axios from "axios";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { TrackingPage } from "./pages/tracking/TrackingPage";

import "./App.css";
import { useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart}></HomePage>}></Route>
      <Route
        path="checkout"
        element={<CheckoutPage cart={cart} loadCart={loadCart}></CheckoutPage>}
      ></Route>
      <Route
        path="orders"
        element={<OrdersPage cart={cart}></OrdersPage>}
      ></Route>
      <Route path="tracking"
       element={<TrackingPage cart={cart} loadCart={loadCart}></TrackingPage>}></Route>
    </Routes>
  );
}

export default App;
