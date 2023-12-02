import { useGetLaptopsQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../../ui/ProductsList";

export default function Laptops() {
  const { data, isLoading } = useGetLaptopsQuery(undefined);
  const laptops = data?.products;
  console.log(laptops);
  return (
    <main className="min-h-screen">
      <ProductsList data={laptops} isLoading={isLoading} />
    </main>
  );
}
