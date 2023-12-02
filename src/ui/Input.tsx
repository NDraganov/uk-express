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

  if (isLoading) return <Spinner />;

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
            {singleProduct?.products.map((product) => (
              <li key={product.id}>
                <p>{product.title}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
