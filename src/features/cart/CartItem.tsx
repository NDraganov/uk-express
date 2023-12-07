import { useAppDispatch } from "../../store/hooks";
import {
  addToCart,
  removeFromCart,
  type CartItem,
  deleteFromCart,
} from "./cartSlice";
import QuantityButtons from "../../ui/QuantityButtons";
import DeleteButton from "../../ui/DeleteButton";

export default function CartItem(item: CartItem) {
  const dispatch = useAppDispatch();

  const itemSumPrice = item.price * item.quantity;
  const formattedSumPrice = itemSumPrice.toFixed(2);

  function handleAddToCart(item: CartItem) {
    dispatch(addToCart(item));
  }

  return (
    <div className="mt-6 flex w-full items-center gap-4">
      <img
        className="w-10 dark:border dark:border-gray-300"
        src={item.thumbnail}
        alt={item.title}
      />
      <div className="flex w-full flex-col">
        <div className="flex items-center justify-between dark:text-gray-300">
          <span className="overflow-hidden font-medium">{item.title}</span>
          <div className="flex items-center gap-4">
            <span className="font-medium">£{formattedSumPrice}</span>
            <DeleteButton onDelete={() => dispatch(deleteFromCart(item.id))} />
          </div>
        </div>
        <QuantityButtons
          item={item}
          onRemove={() => dispatch(removeFromCart(item.id))}
          onAdd={() => handleAddToCart(item)}
        />
      </div>
    </div>
  );
}
