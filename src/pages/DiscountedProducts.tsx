import { useGetAllProductsQuery } from "../api/productsApiSlice";
import ProductsList from "../features/products/ProductsList";

export default function DiscountedProducts() {
  const { data: products, isLoading } = useGetAllProductsQuery(undefined);
  const discountedProducts = products?.products.filter(
    (product) => product.price <= 500 || product.price >= 1000,
  );

  return (
    <div className="min-h-screen">
      <ProductsList data={discountedProducts} isLoading={isLoading} />
    </div>
  );
}
