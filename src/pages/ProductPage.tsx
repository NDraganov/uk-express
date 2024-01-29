import { Link, NavLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  useGetAllProductsQuery,
  useGetCommentsQuery,
} from "../api/productsApiSlice";
import { openReviews } from "../features/products/productsSlice";
import ProductGallery from "../features/products/product/ProductGallery";
import CheckoutButton from "../ui/CheckoutButton";
import BackButton from "../ui/BackButton";
import Icon from "../ui/Icon";
import { BsBoxes } from "react-icons/bs";
import { BsTags } from "react-icons/bs";
import ErrorMessage from "../ui/ErrorMessage";
import RatingStars from "../ui/RatingStars";
import ProductReviews from "../features/products/product/ProductReviews";

export default function ProductPage() {
  const { isReviews } = useAppSelector((state) => state.products);
  const { data: products, error } = useGetAllProductsQuery(undefined);
  const { data: comments } = useGetCommentsQuery(undefined);
  const dispatch = useAppDispatch();
  const { productId } = useParams();

  const product = products?.products.find(
    (product) => product.id === Number(productId),
  );

  const productPrice = product?.price;
  const rating = product?.rating.toFixed(1);
  const discount = product?.discountPercentage.toFixed(0);
  const originalPrice =
    (product?.price || product?.discountPercentage) &&
    product.price / (1 - product.discountPercentage / 100);
  const formattedOriginalPrice = originalPrice?.toFixed(0);

  if (error) {
    if ("status" in error) {
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data);
      const errStatus = JSON.stringify(error.status);

      return (
        <ErrorMessage
          userMessage="The product you are looking for can not be found!"
          errorStatus={errStatus}
          errorMessage={errMsg}
        />
      );
    } else {
      return <div>{error.message}</div>;
    }
  }

  return (
    <main className="mx-4 mb-10 mt-28 sm:mx-20  sm:my-28">
      <BackButton />

      <div className="my-10 sm:flex sm:gap-10">
        <section className="sm:w-2/4">
          <ProductGallery id={productId} />
        </section>

        <section className="mt-4 flex flex-col items-baseline justify-start sm:mt-0 sm:w-2/4">
          <h2 className="text-3xl font-extralight dark:text-white">
            {product?.title}
          </h2>
          <p>{product?.brand}</p>

          {/* Rewiews */}
          <div className="mt-2 flex items-center gap-10">
            <div className="flex items-center gap-2">
              <RatingStars rating={product?.rating.toFixed(0).toString()} />
              <p className="font-light text-gray-500 dark:text-gray-400">
                <span>{rating}</span> out of 5
              </p>
            </div>
            <button
              className="font-light underline hover:cursor-pointer hover:text-slate-500 dark:hover:text-gray-300"
              onClick={() => dispatch(openReviews())}
            >
              <Link to="#productReviews" reloadDocument>
                Reviews ({comments?.comments.length})
              </Link>
            </button>
          </div>

          {/* Prices */}
          <div className="my-10 flex flex-col items-baseline gap-2">
            {product?.price
              ? (product.price <= 500 || product.price >= 1000) && (
                  <div className="flex items-baseline gap-2">
                    <p className="text-gray-500 dark:text-gray-300">
                      Was £
                      <span className="line-through">
                        {formattedOriginalPrice}
                      </span>
                    </p>
                    <p className="rounded-md bg-red-500 p-1 px-2 text-base font-semibold text-white">
                      <span>{discount}%</span> OFF
                    </p>
                  </div>
                )
              : ""}

            <p>
              <span className="text-xl font-medium dark:text-gray-300">
                {product?.price
                  ? (product.price <= 500 || product.price >= 1000) && (
                      <span>Now</span>
                    )
                  : ""}
                <span className="text-3xl font-semibold"> £{productPrice}</span>
              </span>
            </p>
          </div>

          {/* Availability */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Icon value={{ className: "text-xl dark:fill-cyan-500" }}>
                <BsBoxes />
              </Icon>
              <p>
                <span className="text-sky-700 dark:text-gray-300">
                  {product?.stock === 0 ? "Out of stock" : "In Stock"}
                </span>{" "}
                <span className="text-sky-700 dark:text-gray-300">
                  ({product?.stock} left)
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Icon value={{ className: "text-xl dark:fill-cyan-500" }}>
                <BsTags />
              </Icon>
              <p>
                <NavLink to={`/category/${product?.category}`}>
                  <span className="text-sky-700 hover:text-sky-900 dark:text-gray-300 dark:hover:text-cyan-300">
                    {product?.category}
                  </span>
                </NavLink>
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="pt-5 text-lg text-gray-500 dark:text-gray-400">
            {product?.description}
          </p>
        </section>
      </div>
      <div className="flex w-full items-center justify-end">
        <CheckoutButton title="Proceed to Checkout" />
      </div>
      {isReviews && <ProductReviews title={product?.title} />}
    </main>
  );
}
