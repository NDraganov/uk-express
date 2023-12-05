import { useGetMensShoesQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../product/ProductsList";

export default function MensShoes() {
  const { data, isLoading } = useGetMensShoesQuery(undefined);
  const mensShoes = data?.products;

  return (
    <div className="min-h-screen">
      <ProductsList data={mensShoes} isLoading={isLoading} />
    </div>
  );
}
