import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import CheckoutButton from "../ui/CheckoutButton";

export default function ProductPage() {
  const { id } = useParams();

  const product = useAppSelector((state) =>
    state.allProducts.data.find((product) => product.id === Number(id)),
  );

  return (
    <main className="flex my-10 mx-20">
      {!product && <p>Error</p>}
      <div className="w-1/2 flex items-center justify-center">
        <img className="h-96" src={product?.image} alt={product?.title} />
      </div>
      <div className="w-1/2 flex items-baseline justify-start flex-col pt-10">
        <h2 className="text-3xl">{product?.title}</h2>
        <p className="pt-10">{product?.description}</p>
        <div className="flex items-baseline justify-left w-full flex-col">
          <p className="pt-5">
            ⭐️⭐️⭐️⭐️⭐️
            <span className="font-semibold"> {product?.rating.rate}</span>
          </p>
          <p className="pt-5">
            £<span className="text-2xl font-bold"> {product?.price}</span>
          </p>
          <p>
            availability:
            <span className="font-semibold"> {product?.rating.count}</span>
          </p>
        </div>
        <div className="flex items-center justify-end gap-4 w-full">
          <button className="rounded-full mt-2 border border-orange-500 px-5 py-1 mb-2 hover:bg-orange-500 hover:text-black">
            Add to cart
          </button>
          <CheckoutButton />
        </div>
      </div>
    </main>
  );
}
