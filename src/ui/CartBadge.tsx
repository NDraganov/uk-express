import { useAppSelector } from "../store/hooks";
import Icon from "./Icon";
import { BsCart4 } from "react-icons/bs";

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
      <span className="relative left-5 top-[-15px] font-semibold text-orange-400">
        {cartItems.length > 0 && cartQuantity}
      </span>
      <Icon value={{ className: "text-[1.5rem]" }}>
        <BsCart4 />
      </Icon>
    </button>
  );
}
