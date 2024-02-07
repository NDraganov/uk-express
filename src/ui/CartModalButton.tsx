import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeCartModal } from "../features/cart/cartSlice";

interface CheckoutButtonProps {
  title: string;
}

export default function CartModalButton({ title }: CheckoutButtonProps) {
  const { isProcessed } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleCheckout() {
    dispatch(closeCartModal());
    if (title === "Proceed to checkout") {
      navigate("/checkout");
    } else {
      navigate("/products");
    }
  }

  return (
    <button
      className={`flex items-center justify-center gap-4 border bg-black px-5 py-4 text-lg text-white hover:border-black hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-slate-200 ${
        isProcessed ? "hidden" : ""
      }`}
      title={title}
      onClick={handleCheckout}
    >
      {title}
    </button>
  );
}
