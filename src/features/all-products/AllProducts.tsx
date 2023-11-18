import { useAppSelector } from "../../store/hooks";
import ProductItem, { type ProductItemProps } from "./ProductItem";

export default function AllProducts() {
  const allProducts = useAppSelector((state) => state.allProducts);

  return (
    <main>
      {allProducts?.isLoading && <p>Loading...</p>}
      <ul className="m-6 grid gap-8 md:grid-cols-4">
        {allProducts?.data?.map((product: ProductItemProps) => (
          <li key={product.id}>
            <ProductItem {...product} />
          </li>
        ))}
      </ul>
    </main>
  );
}
