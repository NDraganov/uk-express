import { useGetMotorcycleQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../../ui/ProductsList";

export default function Motorcycle() {
  const { data, isLoading } = useGetMotorcycleQuery(undefined);
  const motorcycle = data?.products;

  return (
    <div className="min-h-screen">
      <ProductsList data={motorcycle} isLoading={isLoading} />
    </div>
  );
}
