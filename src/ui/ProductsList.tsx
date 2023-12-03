import ProductItem from "./ProductItem";
import { type Product } from "../api/products-types/productsTypes";
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
    <div className="mx-40 my-20">
      <p className="mb-4 text-2xl font-medium text-slate-700">Results</p>
      <ul className="grid gap-20 md:grid-cols-3">
        {data?.map((product) => (
          <li key={product.id}>
            <ProductItem {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
