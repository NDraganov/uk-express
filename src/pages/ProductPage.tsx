import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import CheckoutButton from "../ui/CheckoutButton";
import BackButton from "../ui/BackButton";

export default function ProductPage() {
  const { productId } = useParams();

  const product = useAppSelector(
    (state) =>
      state.allProducts?.data?.find(
        (product) => product.id === Number(productId),
      ),
  );

  return (
    <main className="my-40">
      {!product && <p>Error</p>}
      <div className="ml-10 mt-10">
        <BackButton />
      </div>
      <div className="mx-20 my-10 flex">
        <div className="flex w-1/2 items-center justify-center">
          <img className="h-96" src={product?.image} alt={product?.title} />
        </div>
        <section className="flex w-1/2 flex-col items-baseline justify-start pt-10">
          <h2 className="text-3xl text-slate-700">{product?.title}</h2>
          <p className="pt-10 text-slate-600">{product?.description}</p>
          <div className="justify-left flex w-full flex-col items-baseline">
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
          <div className="flex w-full items-center justify-end gap-4">
            <CheckoutButton />
          </div>
        </section>
      </div>
    </main>
  );
}
