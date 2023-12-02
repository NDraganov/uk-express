import ProductItem from "./ProductItem";
import { Spinner } from "flowbite-react";
import { type Product } from "../api/productsApiSlice";

interface ProductListProps {
  data: Product[] | undefined;
  isLoading: boolean;
}

export default function ProductsList({ data, isLoading }: ProductListProps) {
  return (
    <div>
      <div className="absolute left-1/2 top-1/2">
        {isLoading && <Spinner color="info" size="xl" />}
      </div>
      <ul className="m-6 grid gap-8 md:grid-cols-4">
        {data?.map((product) => (
          <li key={product.id}>
            <ProductItem {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
