import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { completePayment, processPayment } from "../cart/cartSlice";
import PaymentButton from "../../ui/PaymentButton";
import PaymentDetails from "./PaymentDetails";
import Shipping from "./Shipping";

export default function Payment() {
  const { items: cartItems, shipping } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const totalPriceItems = cartItems.reduce(
    (value, item) => value + item.price * item.quantity,
    0,
  );

  const totalPriceWithShipping = totalPriceItems + shipping;
  const formattedTotalPriceWithShipping = totalPriceWithShipping.toFixed(2);

  function handlePayment() {
    dispatch(processPayment());
    setTimeout(() => {
      dispatch(completePayment());
      navigate("/order-confirmation");
    }, 3000);
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
