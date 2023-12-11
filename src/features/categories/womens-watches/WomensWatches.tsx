import { useGetWomesWatchesQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../products/ProductsList";

export default function WomensWatches() {
  const { data, isLoading } = useGetWomesWatchesQuery(undefined);
  const womensWatches = data?.products;

  return (
    <div className="min-h-screen">
      <ProductsList data={womensWatches} isLoading={isLoading} />
    </div>
  );
}
