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
          className: "text-2xl fill-slate-500 hover:fill-slate-700",
        }}
      >
        <button onClick={onRemove}>
          <CiCircleMinus />
        </button>
      </Icon>

      <span className="text-slate-700">{item.quantity}</span>

      <Icon
        value={{
          className: "text-2xl fill-slate-500 hover:fill-slate-700",
        }}
      >
        <button onClick={onAdd}>
          <CiCirclePlus />
        </button>
      </Icon>
    </div>
  );
}
