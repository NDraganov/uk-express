import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { addToCart } from "../../cart/cartSlice";
import { closeSearchModal } from "../../header/search/searchSlice";
import { type Product } from "../../../api/products-types/productsTypes";
import { Img } from "react-image";
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
    <div className="flex h-[28rem] flex-col items-center shadow-gray-300 hover:shadow-lg dark:border-gray-500 dark:shadow-slate-800">
      <div className="h-3/5 w-full">
        <Img
          className="h-full w-full rounded-t-md"
          loading="lazy"
          src={thumbnail}
          alt={title}
        />
      </div>

      <div className="flex h-2/5 w-full flex-col justify-between p-2">
        <p className="line-clamp-1 text-lg font-normal dark:text-gray-300">
          {title}
        </p>

        <div className="my-2 flex items-center gap-1">
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
