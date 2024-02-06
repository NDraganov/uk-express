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
    <>
      {cartItems.length > 0 && (
        <div className={`mt-4 flex w-full flex-col ${isProcessed && "hidden"}`}>
          <p className="flex justify-between pb-2 text-lg dark:text-slate-100">
            Subtotal due:{" "}
            <span className="dark:text-white">£{formattedSubtotalPrice}</span>
          </p>
          <CheckoutButton type="cart-modal" title="Proceed to checkout" />
        </div>
      )}
    </>
  );
}
