import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGetSingleProductQuery } from "../api/productsApiSlice";
import { Spinner } from "flowbite-react";

export default function Input() {
  const [isActive, setIsActive] = useState(false);
  const [input, setInput] = useState("");
  const {
    data: singleProduct,
    isLoading,
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
    <div>
      <form>
        <input
          className="mr-2 h-8 w-96 rounded-l-md border-none p-2 font-light placeholder:font-light placeholder:text-gray-400 focus:ring-orange-500 dark:border-gray-500 dark:bg-slate-900 dark:text-white dark:focus:ring-cyan-500"
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
            setIsActive(true);
          }}
          onClick={() => setIsActive((prevActive) => !prevActive)}
          placeholder="Search products"
        />
      </form>
      {isActive && (
        <div className="absolute z-20 mt-1 h-auto max-h-60 w-96 overflow-y-scroll rounded-b-lg border border-t-0 border-gray-400 bg-white px-4 py-2 shadow-md dark:border-gray-500 dark:bg-slate-800 dark:text-gray-300">
          <ul>
            {isLoading && <Spinner />}
            {input !== "" &&
              singleProduct?.products.map((product) => (
                <li key={product.id}>
                  <NavLink
                    to={`/products/${product.id}`}
                    onClick={() => {
                      setIsActive(false);
                      setInput("");
                    }}
                  >
                    <p>{product.title}</p>
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
