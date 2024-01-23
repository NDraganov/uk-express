import { type FormEvent } from "react";
import { useAppSelector } from "../store/hooks";
import Icon from "./Icon";
import { GiShoppingCart } from "react-icons/gi";

interface CartBadgeProps {
  size: string;
  onOpen?: (e: FormEvent) => void;
}

export default function CartBadge({ size, onOpen }: CartBadgeProps) {
  const { items: cartItems, isProcessed } = useAppSelector(
    (state) => state.cart,
  );
  const cartQuantity = useAppSelector((state) =>
    state.cart.items.reduce((val, item) => val + item.quantity, 0),
  );

  return (
    <button className="relative" onClick={onOpen}>
      <div
        className={`absolute left-5 h-5 w-5 rounded-full ${
          cartQuantity > 0 ? "bg-orange-500 dark:bg-lime-400" : ""
        } sm:left-3 sm:h-4 sm:w-4 ${isProcessed ? "hidden" : ""}`}
      >
        <span
          className={`flex h-full w-full items-center justify-center font-bold text-white dark:text-black ${
            cartQuantity >= 10 ? "text-xs" : "text-sm"
          }`}
        >
          {cartItems.length > 0 && cartQuantity}
        </span>
      </div>
      <Icon
        value={{
          className: `${size} hover:fill-orange-500 dark:hover:fill-cyan-300 ${
            cartItems.length > 0
              ? "dark:fill-cyan-300"
              : "fill-black dark:fill-white"
          }`,
        }}
      >
        <GiShoppingCart />
      </Icon>
    </button>
  );
}
