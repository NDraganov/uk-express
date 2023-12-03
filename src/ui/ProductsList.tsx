import ProductItem from "./ProductItem";
import { type Product } from "../api/products-types/productsTypes";

interface ProductListProps {
  data: Product[] | undefined;
  isLoading: boolean;
}

export default function ProductsList({ data, isLoading }: ProductListProps) {
  return (
    <div>
      <ul className="m-6 grid gap-8 md:grid-cols-4">
        {data?.map((product) => (
          <li key={product.id}>
            <ProductItem {...product} isLoading={isLoading} />
          </li>
        ))}
      </ul>
    </div>
  );
}
