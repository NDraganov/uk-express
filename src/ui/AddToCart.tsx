import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addToCart,
  decreaseProductCount,
  increaseProductCount,
} from "../features/cart/cartSlice";
import Icon from "./Icon";
import { GiShoppingCart } from "react-icons/gi";
import { FaMinus, FaPlus } from "react-icons/fa6";

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
    dispatch(addToCart({ id, title, price, thumbnail, quantity }));
    toast.success("Product added!");
  }
  return (
    <div className="flex h-full items-center justify-start gap-4">
      <div className="flex items-center justify-center gap-4 rounded-md border border-black px-4 py-2 text-lg dark:border-white">
        <button
          onClick={() => dispatch(decreaseProductCount())}
          title="Increase"
          disabled={productCount === 0}
        >
          <Icon
            value={{
              className:
                "text-base hover:fill-slate-500 dark:fill-white dark:hover:fill-slate-300",
            }}
          >
            <FaMinus />
          </Icon>
        </button>
        <span className="dark:text-white">{productCount}</span>
        <button
          onClick={() => dispatch(increaseProductCount())}
          title="Decrease"
        >
          <Icon
            value={{
              className:
                "text-base hover:fill-slate-500 dark:fill-white dark:hover:fill-slate-300",
            }}
          >
            <FaPlus />
          </Icon>
        </button>
      </div>
      <button
        className="flex items-center justify-center gap-2 rounded-md border bg-black px-16 py-2 text-lg text-white hover:border-black hover:bg-white hover:text-black dark:border-slate-900 dark:bg-white dark:text-black dark:hover:bg-slate-100"
        title="Add to cart"
        onClick={handleAddToCart}
      >
        <Icon value={{ className: "text-xl" }}>
          <GiShoppingCart />
        </Icon>
        Add to cart
      </button>
    </div>
  );
}
