import { useGetHomeDecorationQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../products/ProductsList";

export default function HomeDecoration() {
  const { data, isLoading } = useGetHomeDecorationQuery(undefined);
  const homeDecoration = data?.products;

  return (
    <div className="min-h-screen">
      <ProductsList data={homeDecoration} isLoading={isLoading} />
    </div>
  );
}
