import { Spinner } from "flowbite-react";
import { useGetSingleProductQuery } from "../api/productsApiSlice";
import { useState } from "react";

export default function Input() {
  const [isActive, setIsActive] = useState(false);
  const [input, setInput] = useState("");
  const {
    data: singleProduct,
    isLoading,
    isError,
    error,
  } = useGetSingleProductQuery(input || "");

  function handleClick() {
    setIsActive((active) => !active);
  }

  if (isError) return error;

  return (
    <div>
      <form>
        <input
          className="h-8 w-96 rounded-l-md p-2 text-black"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          onClick={() => handleClick()}
          placeholder="Search products"
        />
      </form>
      {isActive && (
        <div className="absolute mt-2 w-96 rounded-sm border border-gray-400 bg-slate-50 p-2 text-black">
          <ul>
            {isLoading && <Spinner />}

            {singleProduct?.products.map((product) => (
              <li key={product.id}>
                <h2>{product.title}</h2>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
