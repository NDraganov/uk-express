import { useAppDispatch } from "../../store/hooks";
import { addToCart, removeFromCart, type CartItem } from "./cartSlice";

export default function CartItem(item: CartItem) {
  const dispatch = useAppDispatch();

  const itemSumPrice = item.price * item.quantity;
  const formattedSumPrice = itemSumPrice.toFixed(2);

  function handleAddToCart(item: CartItem) {
    dispatch(addToCart(item));
  }

  function handleRemoveFromCart(id: number) {
    dispatch(removeFromCart(id));
  }

  return (
    <div className="mb-2 flex w-full items-center justify-between">
      <div>
        <span>{item.title}</span>
        <span className="font-semibold"> (£ {formattedSumPrice})</span>
      </div>
      <div className="flex gap-3">
        <button
          className="rounded-full border border-orange-400 px-2"
          onClick={() => handleRemoveFromCart(item.id)}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          className="rounded-full border border-orange-400 px-2"
          p-2
          onClick={() => handleAddToCart(item)}
        >
          +
        </button>
      </div>
    </div>
  );
}
