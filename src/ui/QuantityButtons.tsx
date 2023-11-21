import { type CartItem } from "../features/cart/cartSlice";
import { IconContext } from "react-icons";
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
      <IconContext.Provider
        value={{
          className: "text-2xl fill-slate-500 hover:fill-slate-700",
        }}
      >
        <button onClick={onRemove}>
          <CiCircleMinus />
        </button>
      </IconContext.Provider>
      <span className="text-slate-700">{item.quantity}</span>
      <IconContext.Provider
        value={{
          className: "text-2xl fill-slate-500 hover:fill-slate-700",
        }}
      >
        <button onClick={onAdd}>
          <CiCirclePlus />
        </button>
      </IconContext.Provider>
    </div>
  );
}
