import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setInput, showSearchResults } from "./searchSlice";
import { useGetSingleProductQuery } from "../../../api/productsApiSlice";
import ProductItem from "../../products/product/ProductItem";

export default function SearchBar() {
  const { isActive, input } = useAppSelector((state) => state.search);
  const {
    data: singleProduct,
    isError,
    error,
  } = useGetSingleProductQuery(input || "");
  const dispatch = useAppDispatch();

  if (isError) {
    if ("status" in error) {
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data);
      return (
        <div>
          <p>An error has occurred:</p>
          <p className="text-red-600">{errMsg}</p>
        </div>
      );
    } else {
      return <p className="text-red-600">{error.message}</p>;
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <input
          className={`h-8 w-4/5 rounded-none border border-l-0 border-r-0 border-t-0 border-slate-300 p-2 font-light placeholder:text-sm placeholder:font-light placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-0 dark:border-gray-500 dark:bg-slate-900 dark:text-white dark:focus:border-cyan-500 ${
            input ? "sm:w-3/5" : "sm:w-4/5"
          }`}
          type="text"
          title="Search products"
          autoFocus
          onChange={(e) => {
            dispatch(setInput(e.target.value));
            dispatch(showSearchResults());
          }}
          placeholder="Search products"
        />
      </div>

      {isActive && (
        <div
          className={`z-20 mt-10 overflow-y-scroll rounded-md bg-white dark:bg-slate-900 sm:max-h-[30rem] sm:w-full ${
            input ? "h-[32rem]" : "h-auto"
          }`}
        >
          <ul className="grid gap-4 sm:grid-cols-3">
            {input !== "" &&
              singleProduct?.products.map((product) => (
                <li className="" key={product.id}>
                  <ProductItem {...product} />
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
}
