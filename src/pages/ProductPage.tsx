import { useParams } from "react-router-dom";
import {
  useGetAllProductsQuery,
  useGetCommentsQuery,
} from "../api/productsApiSlice";
import ProductGallery from "../features/product/product/ProductGallery";
import CheckoutButton from "../ui/CheckoutButton";
import BackButton from "../ui/BackButton";
import ProductReviews from "../features/product/product/ProductReviews";
import { useState } from "react";

export default function ProductPage() {
  const [reviews, setReviews] = useState(false);

  const { productId } = useParams();

  const { data } = useGetAllProductsQuery(undefined);
  const { data: comments } = useGetCommentsQuery(undefined);
  const product = data?.products.find(
    (product) => product.id === Number(productId),
  );
  const productPrice = product?.price;
  const rating = product?.rating.toFixed(1);
  const discount = product?.discountPercentage.toFixed(0);
  const originalPrice =
    (product?.price || product?.discountPercentage) &&
    product.price / (1 - 13 / 100);
  const formattedOriginalPrice = originalPrice?.toFixed(0);

  return (
    <main className="mx-20 my-40">
      {!product && <p>Error</p>}

      <BackButton />

      <div className="my-10 flex">
        <section className="w-3/5">
          <ProductGallery id={productId} />
        </section>

        <section className="flex w-2/5 flex-col items-baseline justify-start">
          <h2 className="text-3xl font-extralight dark:text-white">
            {product?.title}
          </h2>
          <p>{product?.brand}</p>

          {/* Rewiews */}
          <div className="mt-2 flex items-center gap-4">
            <p className="">
              ⭐️⭐️⭐️⭐️⭐️
              <span className="dark:text-white"> {rating}</span>
            </p>
            <button
              className="font-light underline hover:cursor-pointer hover:text-slate-500 dark:hover:text-gray-300"
              onClick={() => setReviews(true)}
            >
              Reviews ({comments?.comments.length})
            </button>
          </div>

          {/* Prices */}
          <div className="my-10 flex flex-col items-baseline gap-2">
            {product?.price
              ? product.price < 500 ||
                (product.price > 1000 && (
                  <div className="flex items-baseline gap-2">
                    <p className="text-gray-500 dark:text-orange-500">
                      Was £
                      <span className="line-through">
                        {formattedOriginalPrice}
                      </span>
                    </p>
                    <p className="rounded-md bg-red-500 px-1 text-white">
                      <span className="text-lg">{discount}%</span> OFF
                    </p>
                  </div>
                ))
              : ""}

            <p>
              <span className="text-xl font-normal dark:text-white">
                Now £<span className="text-2xl">{productPrice}</span>
              </span>
            </p>
          </div>

          {/* Availability */}
          <div>
            <p>
              Availability :
              <span className="text-sky-700 dark:text-white">
                {" "}
                {product?.stock === 0 ? "Out of stock" : "In Stock"}
              </span>{" "}
              <span className="text-sky-700 dark:text-white">
                ({product?.stock})
              </span>
            </p>
            <p>
              Tags :{" "}
              <span className="text-sky-700 dark:text-white">
                {product?.category}
              </span>
            </p>
          </div>

          {/* Description */}
          <p className="pt-5 text-xl">{product?.description}</p>
        </section>
      </div>
      <div className="flex w-full items-center justify-end gap-4">
        <CheckoutButton title="Proceed to Checkout" />
      </div>
      {reviews && (
        <ProductReviews title={product?.title} setState={setReviews} />
      )}
    </main>
  );
}
