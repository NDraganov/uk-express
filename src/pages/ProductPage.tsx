import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../api/productsApiSlice";
import ProductGallery from "../features/product/product/ProductGallery";
import CheckoutButton from "../ui/CheckoutButton";
import BackButton from "../ui/BackButton";

export default function ProductPage() {
  const { productId } = useParams();
  const { data } = useGetAllProductsQuery(undefined);
  const product = data?.products.find(
    (product) => product.id === Number(productId),
  );

  return (
    <main className="my-40">
      {!product && <p>Error</p>}
      <div className="ml-10 mt-10">
        <BackButton />
      </div>
      <div className="my-10 flex">
        <div className="w-1/2">
          <ProductGallery id={productId} />
        </div>
        <section className="flex w-1/2 flex-col items-baseline justify-start pt-10">
          <h2 className="text-3xl text-slate-700">{product?.title}</h2>
          <p>{product?.brand}</p>
          <p className="pt-10 text-slate-600">{product?.description}</p>
          <div className="justify-left flex w-full flex-col items-baseline">
            <p className="pt-5">
              ⭐️⭐️⭐️⭐️⭐️
              <span className="text-slate-700"> {product?.rating}</span>
            </p>
            <p className="pt-5">
              <span className="text-2xl font-semibold text-slate-700">
                £{product?.price}
              </span>
            </p>
            <p className="text-slate-700">
              availability:
              <span> {product?.stock}</span>
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
