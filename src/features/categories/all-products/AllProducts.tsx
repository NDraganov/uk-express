import { useGetAllProductsQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../../ui/ProductsList";

export default function AllProducts() {
  const { data, isLoading } = useGetAllProductsQuery(undefined);
  const products = data?.products;
  console.log(products);
  return (
    <main className="min-h-screen">
      <ProductsList data={products} isLoading={isLoading} />
    </main>
  );
}
