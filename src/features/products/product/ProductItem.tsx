import { useAppDispatch } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../cart/cartSlice";
import { closeSearchModal } from "../../header/search/searchSlice";
import { type Product } from "../../../api/products-types/productsTypes";
import ProductRating from "./ProductRating";
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

  return (
    <div className="flex h-[28rem] flex-col items-center rounded-md border border-gray-300 p-2 shadow-lg shadow-gray-300 dark:border-gray-500 dark:bg-slate-800 dark:shadow-none">
      <div className="h-3/5 w-full">
        <img
          className="h-full w-full rounded-t-md"
          src={images[0]}
          alt={title}
        />
      </div>

      <div className="flex h-2/5 w-full flex-col justify-between pt-2">
        <p className="line-clamp-1 text-lg font-normal dark:text-gray-300">
          {title}
        </p>

        <div className="my-2 flex items-center gap-1">
          <ProductRating rating={rating.toFixed(0)} />
          <p className="text-gray-500 dark:text-gray-400">
            <span>{rating.toFixed(0)}</span>
          </p>
        </div>

        <p className="text-xl font-light dark:text-gray-300">
          £<span className="font-normal">{price}</span>
        </p>

        <div className="flex justify-between">
          <Button
            title="Review"
            onClick={() => {
              dispatch(closeSearchModal());
              navigate(`/products/${id}`);
            }}
          />
          <Button
            title="Add to cart"
            onClick={() =>
              dispatch(addToCart({ id, title, price, thumbnail, images }))
            }
          />
        </div>
      </div>
    </div>
  );
}
