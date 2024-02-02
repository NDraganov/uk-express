import { toast } from "react-toastify";
import { addToCart } from "../features/cart/cartSlice";
import { useAppDispatch } from "../store/hooks";

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
  const dispatch = useAppDispatch();

  function handleAddToCart() {
    dispatch(addToCart({ id, title, price, thumbnail, quantity }));
    toast.success("Product added!");
  }
  return (
    <div>
      <button>-</button>
      <span>{quantity}</span>
      <button>+</button>
      <button
        className="border bg-cyan-300 px-5 py-2"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
}
