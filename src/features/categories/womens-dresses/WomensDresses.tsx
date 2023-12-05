import { useGetWomensDressesQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../product/ProductsList";

export default function WomensDresses() {
  const { data, isLoading } = useGetWomensDressesQuery(undefined);
  const womensDresses = data?.products;

  return (
    <div className="min-h-screen">
      <ProductsList data={womensDresses} isLoading={isLoading} />
    </div>
  );
}
