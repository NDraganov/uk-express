import { type FormEvent } from "react";
import { type CartItem } from "../features/cart/cartSlice";
import Icon from "./Icon";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

interface QuantityButtonsProps {
  item: CartItem;
  onAdd: (e: FormEvent) => void;
  onRemove: (e: FormEvent) => void;
}

export default function QuantityButtons({
  item,
  onAdd,
  onRemove,
}: QuantityButtonsProps) {
  return (
    <div className="flex gap-3">
      <button
        title="Reduce quantity"
        onClick={onRemove}
        disabled={item.quantity <= 1}
      >
        <Icon
          value={{
            className:
              "text-2xl fill-black hover:fill-slate-500 dark:fill-cyan-500 hover:dark:fill-cyan-300",
          }}
        >
          <CiCircleMinus />
        </Icon>
      </button>

      <span className="dark:text-gray-300">{item.quantity}</span>

      <button title="Increase quantity" onClick={onAdd}>
        <Icon
          value={{
            className:
              "text-2xl fill-black hover:fill-slate-500 dark:fill-cyan-500 hover:dark:fill-cyan-300",
          }}
        >
          <CiCirclePlus />
        </Icon>
      </button>
    </div>
  );
}
