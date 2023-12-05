import { useNavigate } from "react-router-dom";
import PaymentButton from "../../ui/PaymentButton";
import PaymentDetails from "./PaymentDetails";
import Shipping from "./Shipping";
import { useAppSelector } from "../../store/hooks";

export default function Payment() {
  const { items: cartItems, shipping } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  const totalPriceItems = cartItems.reduce(
    (value, item) => value + item.price * item.quantity,
    0,
  );

  const totalPriceWithShipping = totalPriceItems + shipping;
  const formattedTotalPriceWithShipping = totalPriceWithShipping.toFixed(2);

  function handlePayment() {
    navigate("/order-confirmation");
  }
  return (
    <aside className="w-1/2">
      <PaymentButton title="Pay" onPayment={handlePayment} />
      <Shipping />
      <PaymentDetails />
      <PaymentButton
        title={`Pay  £${formattedTotalPriceWithShipping}`}
        onPayment={handlePayment}
      />
    </aside>
  );
}
