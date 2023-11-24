import { useAppSelector } from "../../../store/hooks";
import ProductItem, {
  type ProductItemProps,
} from "../all-products/ProductItem";
import { Spinner } from "flowbite-react";

export default function WomenClothing() {
  const womenClothing = useAppSelector((state) => state.womanClothing);

  return (
    <main>
      <div className="absolute top-1/2 left-1/2">
        {womenClothing?.isLoading && <Spinner color="info" size="xl" />}
      </div>
      <ul className="grid gap-4 p-10 md:grid-cols-3">
        {womenClothing?.data?.map((product: ProductItemProps) => (
          <li key={product.id}>
            <ProductItem {...product} />
          </li>
        ))}
      </ul>
    </main>
  );
}
