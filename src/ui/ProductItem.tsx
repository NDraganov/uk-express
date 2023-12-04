import { useAppDispatch } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";
import { type Product } from "../api/products-types/productsTypes";
import Button from "./Button";

export default function ProductItem({
  id,

  title,
  price,
  images,
  rating,
}: Product) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleAddToCart() {
    dispatch(addToCart({ id, title, price, images }));
  }

  function handleReviewProduct() {
    navigate(`/all-products/product/${id}`);
  }

  return (
    <div className="flex h-full flex-col items-center justify-between rounded-md border border-gray-300 p-2 shadow-lg shadow-gray-300 dark:border-gray-500 dark:bg-slate-800 dark:shadow-none">
      <img className="h-1/2 w-full rounded-t-md" src={images[1]} alt={title} />
      <div className=" w-full">
        <p className="text-xl">{title}</p>
        <p className="my-2">
          ⭐️⭐️⭐️⭐️⭐️ <span>{rating}</span>
        </p>
        <p className="font-light">
          £
          <span className="text-xl font-normal dark:text-cyan-500">
            {price}
          </span>
        </p>
        <div className="flex justify-between gap-4">
          <Button title="Review" onClick={handleReviewProduct} />
          <Button title="Add to cart" onClick={handleAddToCart} />
        </div>
      </div>
    </div>
  );
}
