import "./CheckoutPage.css";
import { Header } from "../../components/Header";

import axios from "axios";
import { useEffect, useState } from "react";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";


export function CheckoutPage({ cart,loadCart }) {
  const [deliveryOptions, setDeliveryOptionts] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  useEffect(() => {
    axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((responce) => {
        setDeliveryOptionts(responce.data);
      });

    axios.get("api/payment-summary").then((response) => {
      setPaymentSummary(response.data);
    });
  }, [cart]);

  return (
    <>
      <title>Checkout</title>

      <Header cart={cart}></Header>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary loadCart={loadCart} cart={cart} deliveryOptions={deliveryOptions}></OrderSummary>

          <PaymentSummary loadCart={loadCart} paymentSummary={paymentSummary}></PaymentSummary>
        </div>
      </div>
    </>
  );
}
