import { useGetGroceriesQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../product/ProductsList";

export default function Groceries() {
  const { data, isLoading } = useGetGroceriesQuery(undefined);
  const groceries = data?.products;

  return (
    <div className="min-h-screen">
      <ProductsList data={groceries} isLoading={isLoading} />
    </div>
  );
}
