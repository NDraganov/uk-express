import { type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { addToCart, openCartModal } from "../../cart/cartSlice";
import { closeSearchModal } from "../../header/search/searchSlice";
import Button from "../../../ui/Button";
import RatingStars from "../../../ui/RatingStars";

interface ProductItemProps {
  id: number | undefined;
  title: string | undefined;
  price: number | undefined;
  rating: number;
  thumbnail: string | undefined;
  quantity?: number | undefined;
}

export default function ProductItem({
  id,
  title,
  price,
  rating,
  thumbnail,
  quantity,
}: ProductItemProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleAddToCart(e: FormEvent) {
    e.stopPropagation();
    dispatch(addToCart({ id, title, price, thumbnail, quantity }));
    dispatch(openCartModal());
  }

  return (
    <div className="flex h-[28rem] flex-col items-center rounded-md shadow-gray-300 hover:shadow-lg dark:border-gray-500 dark:shadow-slate-800">
      <div className="h-3/5">
        <img
          className="h-full w-full rounded-t-md"
          loading="lazy"
          role="presentation"
          decoding="async"
          src={thumbnail}
          alt={title}
        />
      </div>

      <div className="flex h-2/5 w-full flex-col justify-between p-2">
        <p className="line-clamp-1 text-lg font-normal dark:text-gray-300">
          {title}
        </p>

        <div className="my-2 flex items-center gap-1">
          <RatingStars rating={rating.toFixed(0).toString()} />
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
              navigate(`/products/${title}`);
            }}
          />
          <Button title="Add to cart" onClick={handleAddToCart} />
        </div>
      </div>
    </div>
  );
}
