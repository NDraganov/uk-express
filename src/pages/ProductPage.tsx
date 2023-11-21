import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import CheckoutButton from "../ui/CheckoutButton";
import BackButton from "../ui/BackButton";
import Button from "../ui/Button";

export default function ProductPage() {
  const { productId } = useParams();

  const product = useAppSelector(
    (state) =>
      state.allProducts?.data?.find(
        (product) => product.id === Number(productId),
      ),
  );

  return (
    <main>
      {!product && <p>Error</p>}
      <div className="mt-10 ml-10">
        <BackButton />
      </div>
      <div className="flex my-10 mx-20">
        <div className="w-1/2 flex items-center justify-center">
          <img className="h-96" src={product?.image} alt={product?.title} />
        </div>
        <section className="w-1/2 flex items-baseline justify-start flex-col pt-10">
          <h2 className="text-3xl text-slate-700">{product?.title}</h2>
          <p className="pt-10 text-slate-600">{product?.description}</p>
          <div className="flex items-baseline justify-left w-full flex-col">
            <p className="pt-5">
              ⭐️⭐️⭐️⭐️⭐️
              <span className="text-slate-700"> {product?.rating.rate}</span>
            </p>
            <p className="pt-5">
              <span className="text-2xl font-semibold text-slate-700">
                £{product?.price}
              </span>
            </p>
            <p className="text-slate-700">
              availability:
              <span> {product?.rating.count}</span>
            </p>
          </div>
          <div className="flex items-center justify-end gap-4 w-full">
            <CheckoutButton />
          </div>
        </section>
      </div>
    </main>
  );
}
