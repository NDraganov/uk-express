import { useAppDispatch } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";
import { type Product } from "../api/products-types/productsTypes";
import Button from "./Button";
import { Spinner } from "flowbite-react";

export default function ProductItem({
  id,
  brand,
  title,
  price,
  images,
  rating,
  stock,
  isLoading,
}: Product) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleAddToCart() {
    dispatch(addToCart({ id, title, price, images }));
  }

  function handleReviewProduct() {
    navigate(`/all-products/product/${id}`);
  }

  if (isLoading) return <Spinner color="info" size="xl" />;

  return (
    <div className=" flex h-full flex-col items-center justify-between border-b-2 border-slate-200 text-slate-700">
      <img className="mb-4 mt-4 w-32" src={images[1]} alt={title} />
      <div className=" w-full">
        <h3>{title}</h3>
        <h4>{brand}</h4>
        <p>
          ⭐️⭐️⭐️⭐️⭐️ <span>{rating}</span>
        </p>
        <p>
          £<span className="text-lg font-bold">{price}</span>
        </p>
        <p>
          availability: <span className="font-normal">{stock}</span>
        </p>
        <div className="flex justify-between gap-4">
          <Button title="Review" onClick={handleReviewProduct} />
          <Button title="Add to cart" onClick={handleAddToCart} />
        </div>
      </div>
    </div>
  );
}
