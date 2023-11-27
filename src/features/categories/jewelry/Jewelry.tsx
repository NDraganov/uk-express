import { useAppSelector } from "../../../store/hooks";
import ProductItem, {
  type ProductItemProps,
} from "../all-products/ProductItem";
import { Spinner } from "flowbite-react";

export default function Jewelry() {
  const jewelery = useAppSelector((state) => state.jewelery);

  return (
    <main>
      <div className="absolute top-1/2 left-1/2">
        {jewelery?.isLoading && <Spinner color="info" size="xl" />}
      </div>
      <ul className="grid gap-4 p-10 md:grid-cols-3">
        {jewelery?.data?.map((product: ProductItemProps) => (
          <li key={product.id}>
            <ProductItem {...product} />
          </li>
        ))}
      </ul>
    </main>
  );
}