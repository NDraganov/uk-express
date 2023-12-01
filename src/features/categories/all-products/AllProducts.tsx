import { useGetAllProductsQuery } from "../../../api/productsApiSlice";
import ProductItem from "./ProductItem";
import { Spinner } from "flowbite-react";

export default function AllProducts() {
  const { data: products, isLoading } = useGetAllProductsQuery(undefined);

  return (
    <main className="min-h-screen">
      <div className="absolute left-1/2 top-1/2">
        {isLoading && <Spinner color="info" size="xl" />}
      </div>
      <ul className="m-6 grid gap-8 md:grid-cols-4">
        {products?.products?.map((product) => (
          <li key={product.id}>
            <ProductItem {...product} />
          </li>
        ))}
      </ul>
    </main>
  );
}
