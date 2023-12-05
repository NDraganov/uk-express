import ProductItem from "./product/ProductItem";
import { type Product } from "../../api/products-types/productsTypes";
import { Spinner } from "flowbite-react";

interface ProductListProps {
  data: Product[] | undefined;
  isLoading: boolean;
}

export default function ProductsList({ data, isLoading }: ProductListProps) {
  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner color="info" size="xl" />
      </div>
    );
  return (
    <div className="mx-40 my-40">
      <p className="mb-4 text-2xl font-normal dark:text-gray-400">
        Results <span className="text-lg font-light">1 of {data?.length}</span>
      </p>
      <ul className="grid gap-5 md:grid-cols-4">
        {data?.map((product) => (
          <li key={product.id}>
            <ProductItem {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
}