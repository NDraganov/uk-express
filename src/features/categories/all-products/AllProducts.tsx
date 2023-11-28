import { useAppSelector } from "../../../store/hooks";
import ProductItem, { type ProductItemProps } from "./ProductItem";
import { Spinner } from "flowbite-react";

export default function AllProducts() {
  const allProducts = useAppSelector((state) => state.allProducts);

  return (
    <main className="min-h-screen">
      <div className="absolute left-1/2 top-1/2">
        {allProducts?.isLoading && <Spinner color="info" size="xl" />}
      </div>
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
