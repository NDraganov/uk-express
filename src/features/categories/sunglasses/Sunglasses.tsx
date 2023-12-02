import { useGetSunglassesQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../../ui/ProductsList";

export default function Sunglasses() {
  const { data, isLoading } = useGetSunglassesQuery(undefined);
  const sunglasses = data?.products;

  return (
    <div className="min-h-screen">
      <ProductsList data={sunglasses} isLoading={isLoading} />
    </div>
  );
}
