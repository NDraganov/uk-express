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
    <main className="mx-20 my-40">
      {!product && <p>Error</p>}

      <BackButton />

      <div className="my-10 flex gap-4">
        <section className="w-1/2">
          <ProductGallery id={productId} />
        </section>

        <section className="flex w-1/2 flex-col items-baseline justify-start">
          <h2 className="text-3xl font-extralight dark:text-white">
            {product?.title}
          </h2>

          <p>{product?.brand}</p>

          <p className="pt-5">
            ⭐️⭐️⭐️⭐️⭐️
            <span className="dark:text-white"> {product?.rating}</span>
          </p>

          <p className="pt-5">
            <span className="text-xl font-semibold dark:text-white">
              £<span className="text-2xl">{product?.price}</span>
            </span>
          </p>
          <p>
            Availability :
            <span className="dark:text-white">
              {" "}
              {product?.stock === 0 ? "Out of stock" : "In Stock"}
            </span>
          </p>

          <p className="pt-5">{product?.description}</p>
        </section>
      </div>
      <div className="flex w-full items-center justify-end gap-4">
        <CheckoutButton />
      </div>
    </main>
  );
}
