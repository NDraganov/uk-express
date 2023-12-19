import { useState } from "react";
import { useGetSingleProductQuery } from "../api/productsApiSlice";
import { NavLink } from "react-router-dom";

import { IoIosSearch } from "react-icons/io";
import Icon from "./Icon";

export default function SearchBar() {
  const [isActive, setIsActive] = useState(false);
  const [input, setInput] = useState("");
  const {
    data: singleProduct,
    isError,
    error,
  } = useGetSingleProductQuery(input || "");

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
      <div className="flex items-center">
        <input
          className="h-8 w-40 border border-l-0 border-r-0 border-t-0 border-slate-300 p-2 font-light placeholder:text-sm placeholder:font-light placeholder:text-gray-400 focus:w-56 focus:border-orange-500 focus:ring-0 dark:border-gray-500 dark:bg-slate-900 dark:text-white dark:focus:border-cyan-500"
          type="text"
          title="Search products"
          onChange={(e) => {
            setInput(e.target.value);
            setIsActive(true);
          }}
          onClick={() => setIsActive((prevActive) => !prevActive)}
          placeholder="Search products"
        />
        <Icon value={{ className: "text-xl" }}>
          <IoIosSearch />
        </Icon>
      </div>
      {isActive && (
        <div className="absolute z-20 mt-2 max-h-60 w-56 overflow-y-scroll rounded-md bg-white shadow-md shadow-slate-400 dark:bg-slate-800 dark:text-gray-300">
          {input !== "" &&
            singleProduct?.products.map((product) => (
              <div className="px-2" key={product.id}>
                <NavLink
                  to={`/products/${product.id}`}
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  <p className="line-clamp-1 text-sm hover:text-gray-500 dark:hover:text-gray-400">
                    {product.title}
                  </p>
                </NavLink>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
