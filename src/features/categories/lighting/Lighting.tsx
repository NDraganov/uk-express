import { useGetLightingQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../../ui/ProductsList";

export default function Lighting() {
  const { data, isLoading } = useGetLightingQuery(undefined);
  const lighting = data?.products;

  return (
    <div className="min-h-screen">
      <ProductsList data={lighting} isLoading={isLoading} />
    </div>
  );
}
