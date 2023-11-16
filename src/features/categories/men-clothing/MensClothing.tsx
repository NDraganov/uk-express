import { useAppSelector } from "../../../store/hooks";
import ProductItem, {
  type ProductItemProps,
} from "../../all-products/ProductItem";

export default function MenClothing() {
  const menClothing = useAppSelector((state) => state.menClothing);

  return (
    <>
      {menClothing?.isLoading && <p>Loading........</p>}
      <ul className="grid gap-4 p-10 md:grid-cols-3">
        {menClothing?.data?.map((product: ProductItemProps) => (
          <li key={product.id}>
            <ProductItem {...product} />
          </li>
        ))}
      </ul>
    </>
  );
}
