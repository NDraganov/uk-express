import { useAppDispatch } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../cart/cartSlice";
import Button from "../../ui/Button";

export interface ProductItemProps {
  id: number;
  title: string;
  description?: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductItem({
  id,
  title,
  price,
  image,
  rating: { rate, count },
}: ProductItemProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleAddToCart() {
    dispatch(addToCart({ id, title, price }));
  }

  function handleReviewProduct() {
    navigate(`product/${id}`);
  }

  return (
    <div className=" flex h-full flex-col items-center justify-between border-b-2 border-slate-200">
      <img className="mb-4 mt-4 w-32" src={image} alt={title} />
      <div className=" w-full">
        <h3>{title}</h3>
        <p>
          rate: <span>{rate}</span>
        </p>
        <p>
          £<span className="text-lg font-bold"> {price}</span>
        </p>
        <p>
          availability: <span className="font-semibold">{count}</span>
        </p>
        <Button title="Add to Cart" onClick={handleAddToCart} />
        <Button title="Review" onClick={handleReviewProduct} />
      </div>
    </div>
  );
}
