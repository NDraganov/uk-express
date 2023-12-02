import { useGetWomensBagsQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../../ui/ProductsList";

export default function WomensBags() {
  const { data, isLoading } = useGetWomensBagsQuery(undefined);
  const womensBags = data?.products;

  return (
    <div className="min-h-screen">
      <ProductsList data={womensBags} isLoading={isLoading} />
    </div>
  );
}
