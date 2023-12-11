import { useGetFurnitureQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../products/ProductsList";

export default function Furniture() {
  const { data, isLoading } = useGetFurnitureQuery(undefined);
  const furniture = data?.products;

  return (
    <div className="min-h-screen">
      <ProductsList data={furniture} isLoading={isLoading} />
    </div>
  );
}
