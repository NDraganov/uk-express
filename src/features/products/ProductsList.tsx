import ProductItem from "./product/ProductItem";
import Spinner from "../../ui/Spinner";
import { type Product } from "../../api/products-types/productsTypes";

interface ProductListProps {
  data: Product[] | undefined;
  isLoading: boolean;
}

export default function ProductsList({ data, isLoading }: ProductListProps) {
  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  return (
    <div className="mx-4 my-20 md:mx-40">
      <p className="mb-4 text-2xl font-normal dark:text-gray-400">
        Results{" "}
        <span className="text-lg font-normal dark:text-cyan-500">1</span>{" "}
        <span className="text-lg font-light">of</span>{" "}
        <span className="text-lg font-normal dark:text-cyan-500">
          {data?.length}
        </span>
      </p>
      <ul className="grid gap-5 md:grid-cols-3 2xl:grid-cols-4">
        {data?.map((product) => (
          <li key={product.id}>
            <ProductItem {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
