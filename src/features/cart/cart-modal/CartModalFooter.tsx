import { useAppSelector } from "../../../store/hooks";
import CheckoutButton from "../../../ui/CheckoutButton";

export default function CartModalFooter() {
  const { items: cartItems, isProcessed } = useAppSelector(
    (state) => state.cart,
  );

  const subtotalPrice = cartItems.reduce(
    (value, item) => value + Number(item.price) * item.quantity,
    0,
  );
  const formattedSubtotalPrice = subtotalPrice.toFixed(2);

  return (
    <div className="mt-4 flex flex-col">
      <p className="dark:text-slate-100">
        Cart subtotal due:{" "}
        <strong className="dark:text-white">
          £{isProcessed ? "0" : formattedSubtotalPrice}
        </strong>
      </p>
      <CheckoutButton title="Checkout" />
    </div>
  );
}
