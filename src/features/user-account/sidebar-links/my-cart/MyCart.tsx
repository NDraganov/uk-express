import CartDetails from "../../../checkout/CartDetails";
import CheckoutButton from "../../../../ui/CheckoutButton";

export default function MyCart() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1>MY CARD</h1>
      <CartDetails />
      <CheckoutButton />
    </div>
  );
}
