import { type FormEvent } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  addToCart,
  removeFromCart,
  type CartItem,
  closeCart,
  deleteFromCart,
} from "../cartSlice";
import QuantityButtons from "../../../ui/QuantityButtons";
import DeleteButton from "../../../ui/DeleteButton";

export default function CartItem(item: CartItem) {
  const { items: cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const itemSumPrice = Number(item.price) * item.quantity;
  const formattedSumPrice = itemSumPrice.toFixed(2);

  function handleGoToProductPage() {
    dispatch(closeCart());
    navigate(`/products/${item.title}`);
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
    <div
      className={`flex h-36 w-full items-center gap-4 border-b border-t border-gray-300 py-4 dark:border-gray-500 ${
        cartItems.length > 1 ? "border-b-0" : ""
      }`}
    >
      <div className="w-1/3">
        <img
          className="max-h-full w-fit rounded-md hover:cursor-pointer dark:border dark:border-gray-500"
          loading="lazy"
          role="presentation"
          decoding="async"
          src={item.thumbnail}
          alt={item.title}
          onClick={handleGoToProductPage}
        />
      </div>
      <div className="flex h-full w-full flex-col justify-between dark:text-slate-200">
        <div className="flex items-center justify-between gap-4">
          <h5 className="line-clamp-1 text-lg font-light">{item.title}</h5>
          <DeleteButton onDelete={(e: FormEvent) => handleDeleteItem(e)} />
        </div>

        <div className="flex flex-col justify-between gap-4">
          <QuantityButtons
            item={item}
            onRemove={(e: FormEvent) => handleRemoveFromCart(e)}
            onAdd={(e: FormEvent) => handleAddToCart(item, e)}
          />
          <p className="font-normal">£{formattedSumPrice}</p>
        </div>
      </div>
    </div>
  );
}
