import ProductItem from "./ProductItem";
import { type Product } from "../api/products-types/productsTypes";

interface ProductListProps {
  data: Product[] | undefined;
  isLoading: boolean;
}

export default function ProductsList({ data, isLoading }: ProductListProps) {
  return (
    <div className="mx-40 my-20">
      <p className="mb-4 text-2xl font-medium text-slate-700">Results</p>
      <ul className="grid gap-20 md:grid-cols-3">
        {data?.map((product) => (
          <li key={product.id}>
            <ProductItem {...product} isLoading={isLoading} />
          </li>
        ))}
      </ul>
    </div>
  );
}
