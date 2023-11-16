import { useAppSelector } from "../../../store/hooks";
import ProductItem, {
  type ProductItemProps,
} from "../../all-products/ProductItem";

export default function Jewelery() {
  const jewelery = useAppSelector((state) => state.jewelery);

  return (
    <>
      {jewelery?.isLoading && <p>Loading........</p>}
      <ul className="grid gap-4 p-10 md:grid-cols-3">
        {jewelery?.data?.map((product: ProductItemProps) => (
          <li key={product.id}>
            <ProductItem {...product} />
          </li>
        ))}
      </ul>
    </>
  );
}
