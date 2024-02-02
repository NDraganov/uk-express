import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  completePayment,
  endProcessPayment,
  processPayment,
} from "../cart/cartSlice";
import PaymentButton from "../../ui/PaymentButton";
import PaymentDetails from "./PaymentDetails";
import Shipping from "./Shipping";

export default function Payment() {
  const { items: cartItems, shipping } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const totalPriceItems = cartItems.reduce(
    (value, item) => value + Number(item.price) * item.quantity,
    0,
  );

  const totalPriceWithShipping = totalPriceItems + shipping;
  const formattedTotalPriceWithShipping = totalPriceWithShipping.toFixed(2);

  function handlePayment() {
    dispatch(processPayment());
    setTimeout(() => {
      dispatch(completePayment());
    }, 4000);
    setTimeout(() => {
      dispatch(endProcessPayment());
      navigate("/order-confirmation");
    }, 6000);
  }
  return (
    <aside className="px-4 sm:w-1/2 sm:px-0">
      <PaymentButton title="Pay" type="apple" onPayment={handlePayment} />
      <Shipping />
      <PaymentDetails />
      <PaymentButton
        title={`Pay £${formattedTotalPriceWithShipping}`}
        onPayment={handlePayment}
      />
    </aside>
  );
}
