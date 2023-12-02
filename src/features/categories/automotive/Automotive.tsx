import { useGetAutomotiveQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../../ui/ProductsList";

export default function Automotive() {
  const { data, isLoading } = useGetAutomotiveQuery(undefined);
  const automotive = data?.products;

  return (
    <div className="min-h-screen">
      <ProductsList data={automotive} isLoading={isLoading} />
    </div>
  );
}
