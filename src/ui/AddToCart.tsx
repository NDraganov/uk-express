import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addToCart,
  decreaseProductCount,
  increaseProductCount,
} from "../features/cart/cartSlice";

interface AddToCartProps {
  id: number | undefined;
  title: string | undefined;
  price: number | undefined;
  thumbnail: string | undefined;
  quantity: number | undefined;
}

export default function AddToCart({
  id,
  title,
  price,
  thumbnail,
  quantity,
}: AddToCartProps) {
  const { productCount } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  function handleAddToCart() {
    quantity = productCount;
    dispatch(addToCart({ id, title, price, thumbnail, quantity }));
    toast.success("Product added!");
  }
  return (
    <div>
      <button onClick={() => dispatch(decreaseProductCount())}>-</button>
      <span>{productCount}</span>
      <button onClick={() => dispatch(increaseProductCount())}>+</button>
      <button
        className="border bg-cyan-300 px-5 py-2"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
}
