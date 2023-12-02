import { useGetSmartphonesQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../../ui/ProductsList";

export default function Smartphones() {
  const { data, isLoading } = useGetSmartphonesQuery(undefined);
  const smartphones = data?.products;
  console.log(data);
  return (
    <main className="min-h-screen">
      <ProductsList data={smartphones} isLoading={isLoading} />
    </main>
  );
}
