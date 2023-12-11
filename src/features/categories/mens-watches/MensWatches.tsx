import { useGetMensWatchesQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../products/ProductsList";

export default function MensWatches() {
  const { data, isLoading } = useGetMensWatchesQuery(undefined);
  const mensWatches = data?.products;

  return (
    <div className="min-h-screen">
      <ProductsList data={mensWatches} isLoading={isLoading} />
    </div>
  );
}
