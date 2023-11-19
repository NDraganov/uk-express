import PaymentButton from "../../ui/PaymentButton";
import PaymentDetails from "./PaymentDetails";
import Shipping from "./Shipping";

export default function Payment() {
  return (
    <div>
      <PaymentButton>Pay</PaymentButton>
      <Shipping />
      <PaymentDetails />
      <PaymentButton>Pay £130</PaymentButton>
    </div>
  );
}
