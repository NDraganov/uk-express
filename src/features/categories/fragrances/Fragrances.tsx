import { useGetFragrancesQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../../ui/ProductsList";

export default function Fragrances() {
  const { data, isLoading } = useGetFragrancesQuery(undefined);
  const fragrances = data?.products;

  return (
    <div className="min-h-screen">
      <ProductsList data={fragrances} isLoading={isLoading} />
    </div>
  );
}
