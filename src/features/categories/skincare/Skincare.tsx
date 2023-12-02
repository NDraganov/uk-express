import { useGetSkincareQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../../ui/ProductsList";

export default function Skincare() {
  const { data, isLoading } = useGetSkincareQuery(undefined);
  const skincare = data?.products;

  return (
    <div className="min-h-screen">
      <ProductsList data={skincare} isLoading={isLoading} />
    </div>
  );
}
