import { useNavigate } from "react-router-dom";
import PaymentButton from "../../ui/PaymentButton";
import PaymentDetails from "./PaymentDetails";
import Shipping from "./Shipping";

export default function Payment() {
  const navigate = useNavigate();

  function handlePayment() {
    navigate("/order-confirmation");
  }
  return (
    <aside className="w-1/2">
      <PaymentButton onPayment={handlePayment}>Pay</PaymentButton>
      <Shipping />
      <PaymentDetails />
      <PaymentButton onPayment={handlePayment}>Pay £130</PaymentButton>
    </aside>
  );
}
