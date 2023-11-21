import { useAppDispatch } from "../../store/hooks";
import { addToCart, removeFromCart, type CartItem } from "./cartSlice";
import QuantityButtons from "../../ui/QuantityButtons";

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
    <div className="flex items-center w-full mt-6 gap-4">
      <img className="w-10" src={item.image} alt={item.title} />
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between">
          <span className="font-medium text-slate-700">{item.title}</span>
          <span className="font-medium text-slate-700">
            £{formattedSumPrice}
          </span>
        </div>
        <QuantityButtons
          item={item}
          onRemove={() => handleRemoveFromCart(item.id)}
          onAdd={() => handleAddToCart(item)}
        />
      </div>
    </div>
  );
}
