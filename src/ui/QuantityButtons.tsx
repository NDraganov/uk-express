import { type CartItem } from "../features/cart/cartSlice";
import Icon from "./Icon";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

interface QuantityButtonsProps {
  item: CartItem;
  onAdd: () => void;
  onRemove: () => void;
}

export default function QuantityButtons({
  item,
  onAdd,
  onRemove,
}: QuantityButtonsProps) {
  return (
    <div className="flex gap-3">
      <Icon
        value={{
          className:
            "text-2xl fill-black hover:fill-slate-500 dark:fill-cyan-500 hover:dark:fill-cyan-300",
        }}
      >
        <button onClick={onRemove}>
          <CiCircleMinus />
        </button>
      </Icon>

      <span className="dark:text-gray-300">{item.quantity}</span>

      <Icon
        value={{
          className:
            "text-2xl fill-black hover:fill-slate-500 dark:fill-cyan-500 hover:dark:fill-cyan-300",
        }}
      >
        <button onClick={onAdd}>
          <CiCirclePlus />
        </button>
      </Icon>
    </div>
  );
}
