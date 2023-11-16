import { useAppSelector } from "../../../store/hooks";
import ProductItem, {
  type ProductItemProps,
} from "../../all-products/ProductItem";

export default function WomenClothing() {
  const womenClothing = useAppSelector((state) => state.womanClothing);

  return (
    <>
      {womenClothing?.isLoading && <p>Loading........</p>}
      <ul className="grid gap-4 p-10 md:grid-cols-3">
        {womenClothing?.data?.map((product: ProductItemProps) => (
          <li key={product.id}>
            <ProductItem {...product} />
          </li>
        ))}
      </ul>
    </>
  );
}
