import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeCartModal } from "../features/cart/cartSlice";

interface CheckoutButtonProps {
  title: string;
  type?: string;
}

export default function CheckoutButton({ title, type }: CheckoutButtonProps) {
  const { isProcessed } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleCheckout() {
    dispatch(closeCartModal());
    navigate("/checkout");
  }

  if (type === "cart-modal") {
    return (
      <button
        className={`flex items-center justify-center gap-4 border bg-black px-5 py-4 text-lg text-white hover:border-black hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-slate-200 ${
          isProcessed ? "hidden" : ""
        }`}
        title="Checkout"
        onClick={handleCheckout}
      >
        {title}
      </button>
    );
  } else {
    return (
      <button
        className={`my-2 rounded-full px-5 py-1 text-sm ring-1 ring-black hover:ring-orange-500 hover:ring-offset-1 hover:ring-offset-white dark:text-white dark:ring-cyan-500 dark:hover:text-cyan-300 dark:hover:ring-cyan-300 dark:hover:ring-offset-gray-800 sm:text-base ${
          isProcessed ? "hidden" : ""
        }`}
        title="Checkout"
        onClick={handleCheckout}
      >
        {title}
      </button>
    );
  }
}
