import { type FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { closeCart } from "../cartSlice";
import CartItemsList from "./CartItemsList";
import CheckoutButton from "../../../ui/CheckoutButton";
import Icon from "../../../ui/Icon";
import { AiOutlineClose } from "react-icons/ai";

export default function CartModal() {
  const { items: cartItems, isProcessed } = useAppSelector(
    (state) => state.cart,
  );

  const dispatch = useAppDispatch();

  const subtotalPrice = cartItems.reduce(
    (value, item) => value + Number(item.price) * item.quantity,
    0,
  );
  const formattedSubtotalPrice = subtotalPrice.toFixed(2);

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-black/30 dark:bg-white/30">
      <div
        className="absolute bottom-0 left-2/3 right-0 top-0 z-10 mx-3 w-1/3 border border-slate-300 bg-white p-4 text-black shadow-md  dark:border-gray-500 dark:bg-slate-900 dark:text-gray-400 dark:shadow-slate-700"
        onClick={(e: FormEvent) => e.stopPropagation()}
      >
        <div className="flex h-full flex-col justify-between">
          <div className="flex items-start justify-between">
            <p className="pb-2 text-lg font-medium dark:text-white">My Cart</p>
            <button onClick={() => dispatch(closeCart())} title="Close cart">
              <Icon
                value={{
                  className:
                    "text-lg fill-black hover:fill-orange-500 dark:fill-white dark:hover:fill-cyan-300",
                }}
              >
                <AiOutlineClose />
              </Icon>
            </button>
          </div>

          <CartItemsList />

          <div className="mt-4 flex items-center justify-between">
            <p className="dark:text-slate-100">
              Cart subtotal due:{" "}
              <strong className="dark:text-white">
                £{isProcessed ? "0" : formattedSubtotalPrice}
              </strong>
            </p>
            <div className="flex items-center gap-4">
              <CheckoutButton title="Checkout" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
