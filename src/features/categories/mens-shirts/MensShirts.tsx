import { useGetMensShirtsQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../../ui/ProductsList";

export default function MensShirts() {
  const { data, isLoading } = useGetMensShirtsQuery(undefined);
  const mensShirts = data?.products;

  return (
    <div className="min-h-screen">
      <ProductsList data={mensShirts} isLoading={isLoading} />
    </div>
  );
}
