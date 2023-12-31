import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setInput, showSearchResults } from "./searchSlice";
import { useGetSingleProductQuery } from "../../../api/productsApiSlice";
import ProductItem from "../../products/product/ProductItem";
import Icon from "../../../ui/Icon";
import { IoIosSearch } from "react-icons/io";

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
    <div className="relative hidden sm:block">
      <div className="flex items-center justify-center">
        <input
          className="h-8 border border-l-0 border-r-0 border-t-0 border-slate-300 p-2 font-light placeholder:text-sm placeholder:font-light placeholder:text-gray-400 focus:border-orange-500 focus:ring-0 dark:border-gray-500 dark:bg-slate-900 dark:text-white dark:focus:border-cyan-500 sm:w-3/5"
          type="text"
          title="Search products"
          autoFocus
          onChange={(e) => {
            dispatch(setInput(e.target.value));
            dispatch(showSearchResults());
          }}
          placeholder="Search products"
        />
        <Icon value={{ className: "text-xl" }}>
          <IoIosSearch />
        </Icon>
      </div>

      {isActive && (
        <div className="absolute z-20 mt-10 overflow-y-scroll rounded-md bg-white dark:bg-slate-900 sm:max-h-[30rem] sm:w-full">
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
    </div>
  );
}
