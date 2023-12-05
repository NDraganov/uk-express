import { useGetAllProductsQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../product/ProductsList";

export default function AllProducts() {
  const { data, isLoading } = useGetAllProductsQuery(undefined);
  const products = data?.products;

  return (
    <div className="min-h-screen">
      <ProductsList data={products} isLoading={isLoading} />
    </div>
  );
}
