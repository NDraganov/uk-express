import { useAppSelector } from "../../../store/hooks";
import ProductItem, { type ProductItemProps } from "../../../ui/ProductItem";
import { Spinner } from "flowbite-react";

export default function MenClothing() {
  const menClothing = useAppSelector((state) => state.menClothing);

  return (
    <main>
      <div className="absolute left-1/2 top-1/2">
        {menClothing?.isLoading && <Spinner color="info" size="xl" />}
      </div>
      <ul className="grid gap-4 p-10 md:grid-cols-3">
        {menClothing?.data?.map((product: ProductItemProps) => (
          <li key={product.id}>
            <ProductItem {...product} />
          </li>
        ))}
      </ul>
    </main>
  );
}
