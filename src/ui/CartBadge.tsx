import { useAppSelector } from "../store/hooks";
import { IconContext } from "react-icons";
import { BsCart4 } from "react-icons/bs";

interface CartBadgeProps {
  onOpen: () => void;
}

export default function CartBadge({ onOpen }: CartBadgeProps) {
  const cartQuantity = useAppSelector((state) =>
    state.cart.items.reduce((val, item) => val + item.quantity, 0),
  );

  return (
    <IconContext.Provider value={{ className: "text-[1.5rem] mt-2" }}>
      <button className="flex items-center h-full" onClick={onOpen}>
        <BsCart4 />{" "}
        <span className="absolute top-1 right-4 text-orange-400 rounded-full">
          {cartQuantity}
        </span>
      </button>
    </IconContext.Provider>
  );
}
