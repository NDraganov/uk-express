import { useGetTopsQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../product/ProductsList";

export default function Tops() {
  const { data, isLoading } = useGetTopsQuery(undefined);
  const tops = data?.products;

  return (
    <div className="min-h-screen">
      <ProductsList data={tops} isLoading={isLoading} />
    </div>
  );
}
