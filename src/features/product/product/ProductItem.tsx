import { useAppDispatch } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../cart/cartSlice";
import { type Product } from "../../../api/products-types/productsTypes";
import Button from "../../../ui/Button";

export default function ProductItem({
  id,
  title,
  price,
  rating,
  images,
  thumbnail,
}: Product) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleAddToCart() {
    dispatch(addToCart({ id, title, price, thumbnail, images }));
  }

  function handleReviewProduct() {
    navigate(`/products/${id}`);
  }

  return (
    <div className="flex h-[28rem] flex-col items-center rounded-md border border-gray-300 p-2 shadow-lg shadow-gray-300 dark:border-gray-500 dark:bg-slate-800 dark:shadow-none">
      <div className="h-3/5 w-full">
        <img
          className="h-full w-full rounded-t-md"
          src={thumbnail}
          alt={title}
        />
      </div>
      <div className="flex h-2/5 w-full flex-col justify-between">
        <p className="text-xl dark:text-white">{title}</p>
        <p className="my-2">
          ⭐️⭐️⭐️⭐️⭐️ <span>{rating}</span>
        </p>
        <p className="text-xl font-light dark:text-cyan-500">
          £<span className="font-normal">{price}</span>
        </p>
        <div className="flex justify-between">
          <Button title="Review" onClick={handleReviewProduct} />
          <Button title="Add to cart" onClick={handleAddToCart} />
        </div>
      </div>
    </div>
  );
}
