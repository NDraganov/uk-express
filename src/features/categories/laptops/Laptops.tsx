import { useGetLaptopsQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../../ui/ProductsList";

export default function Laptops() {
  const { data, isLoading } = useGetLaptopsQuery(undefined);
  const laptops = data?.products;

  return (
    <div className="min-h-screen">
      <ProductsList data={laptops} isLoading={isLoading} />
    </div>
  );
}
