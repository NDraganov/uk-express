import { NavLink } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

interface CheckoutButtonProps {
  onClose?: () => void;
}

export default function CheckoutButton({ onClose }: CheckoutButtonProps) {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <div>
      {cartItems.length > 0 && (
        <button
          className="rounded-full ring-1 ring-slate-700 px-5 py-1 mt-2 mb-2 hover:ring-offset-1 hover:ring-orange-500 text-slate-700"
          onClick={onClose}
        >
          <NavLink to="/checkout">Checkout</NavLink>
        </button>
      )}
    </div>
  );
}
