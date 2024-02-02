import { toast } from "react-toastify";
import { type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import {
  addToCart,
  removeFromCart,
  type CartItem,
  closeCart,
  deleteFromCart,
} from "./cartSlice";
import QuantityButtons from "../../ui/QuantityButtons";
import DeleteButton from "../../ui/DeleteButton";

export default function CartItem(item: CartItem) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const itemSumPrice = Number(item.price) * item.quantity;
  const formattedSumPrice = itemSumPrice.toFixed(2);

  function handleGoToProductPage() {
    dispatch(closeCart());
    navigate(`/products/${item.id}`);
  }

  function handleAddToCart(item: CartItem, e: FormEvent) {
    e.stopPropagation();
    dispatch(addToCart(item));
  }

  function handleRemoveFromCart(e: FormEvent) {
    e.stopPropagation();
    dispatch(removeFromCart(Number(item.id)));
  }

  function handleDeleteItem(e: FormEvent) {
    e.stopPropagation();
    dispatch(deleteFromCart(Number(item.id)));
    toast.success("Product deleted!");
  }
  return (
    <div className="mt-6 flex w-full items-center gap-4">
      <img
        className="w-10 hover:cursor-pointer dark:border dark:border-gray-300"
        loading="lazy"
        role="presentation"
        decoding="async"
        src={item.thumbnail}
        alt={item.title}
        onClick={handleGoToProductPage}
      />
      <div className="flex w-full flex-col">
        <div className="flex items-center justify-between gap-10 dark:text-gray-300">
          <span className="line-clamp-1 overflow-hidden font-medium">
            {item.title}
          </span>
          <div className="flex items-center gap-4">
            <span className="font-medium">£{formattedSumPrice}</span>
            <DeleteButton onDelete={(e: FormEvent) => handleDeleteItem(e)} />
          </div>
        </div>
        <QuantityButtons
          item={item}
          onRemove={(e: FormEvent) => handleRemoveFromCart(e)}
          onAdd={(e: FormEvent) => handleAddToCart(item, e)}
        />
      </div>
    </div>
  );
}
