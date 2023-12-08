import { useAppSelector } from "../store/hooks";
import Icon from "./Icon";
import { GiShoppingCart } from "react-icons/gi";

interface CartBadgeProps {
  onOpen: () => void;
}

export default function CartBadge({ onOpen }: CartBadgeProps) {
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartQuantity = useAppSelector((state) =>
    state.cart.items.reduce((val, item) => val + item.quantity, 0),
  );

  return (
    <button className="flex h-full items-center" onClick={onOpen}>
      <span className="absolute right-4 top-0 font-extrabold text-red-600 dark:text-red-600">
        {cartItems.length > 0 && cartQuantity}
      </span>
      <Icon
        value={{
          className: `text-[1.5rem] hover:fill-orange-500 dark:hover:fill-cyan-300 ${
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
