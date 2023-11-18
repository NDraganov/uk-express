import { useAppSelector } from "../../../store/hooks";
import ProductItem, {
  type ProductItemProps,
} from "../../all-products/ProductItem";

export default function Electronics() {
  const electronics = useAppSelector((state) => state.electronics);

  return (
    <main>
      {electronics?.isLoading && <p>Loading........</p>}
      <ul className="grid gap-4 p-10 md:grid-cols-3">
        {electronics?.data?.map((product: ProductItemProps) => (
          <li key={product.id}>
            <ProductItem {...product} />
          </li>
        ))}
      </ul>
    </main>
  );
}
