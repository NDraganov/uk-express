import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeCart } from "../features/cart/cartSlice";

interface CheckoutButtonProps {
  title: string;
}

export default function CheckoutButton({ title }: CheckoutButtonProps) {
  const { items: cartItems, isProcessed } = useAppSelector(
    (state) => state.cart,
  );
  const dispatch = useAppDispatch();

  return (
    <div>
      {cartItems.length > 0 && (
        <button
          className={`mb-2 mt-2 animate-bounce rounded-full px-5 py-1 ring-1 ring-black hover:ring-orange-500 hover:ring-offset-1 hover:ring-offset-white dark:text-white dark:ring-cyan-500 dark:hover:text-cyan-300 dark:hover:ring-cyan-300 dark:hover:ring-offset-gray-800 ${
            isProcessed ? "hidden" : ""
          }`}
          onClick={() => dispatch(closeCart())}
        >
          <NavLink to="/checkout">{title}</NavLink>
        </button>
      )}
    </div>
  );
}
