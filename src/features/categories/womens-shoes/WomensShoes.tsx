import { useGetWomensShoesQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../../ui/ProductsList";

export default function WomensShoes() {
  const { data, isLoading } = useGetWomensShoesQuery(undefined);
  const womensShoes = data?.products;

  return (
    <div className="min-h-screen">
      <ProductsList data={womensShoes} isLoading={isLoading} />
    </div>
  );
}
