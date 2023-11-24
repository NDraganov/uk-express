import { useAppSelector } from "../../store/hooks";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import CheckoutButton from "../../ui/CheckoutButton";

interface CartProps {
  onClose: () => void;
}

export default function CartModal({ onClose }: CartProps) {
  const cartItems = useAppSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (value, item) => value + item.price * item.quantity,
    0,
  );

  const formattedTotalPrice = totalPrice.toFixed(2);

  return (
    <div className="right-6 top-28 z-10 absolute w-2/4 rounded-md border bg-neutral-50 border-slate-300 shadow-md p-4 text-slate-600">
      <div>
        <h3 className="text-xl font-medium">Your cart</h3>

        {cartItems.length === 0 && <p>No items in cart!</p>}

        {cartItems.length > 0 && (
          <ul className="mb-2 mt-2">
            {cartItems.map((item) => {
              return (
                <li className="justify-between flex items-center" key={item.id}>
                  <CartItem {...item} />
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p>
          Total due:{" "}
          <strong className="text-orange-500">£{formattedTotalPrice}</strong>
        </p>
        <div className="flex items-center gap-4">
          <Button title="Close" onClick={onClose} />
          <CheckoutButton />
        </div>
      </div>
    </div>
  );
}
