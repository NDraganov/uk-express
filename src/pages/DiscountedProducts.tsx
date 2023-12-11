import { useState } from "react";
import { useGetAllProductsQuery } from "../api/productsApiSlice";
import ProductsList from "../features/products/ProductsList";
import { Pagination } from "flowbite-react";

export default function DiscountedProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: products, isLoading } = useGetAllProductsQuery(undefined);
  const discountedProducts = products?.products.filter(
    (product) => product.price <= 500 || product.price >= 1000,
  );

  const productsPerPage = 20;

  const totalPages = Math.ceil(91 / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = discountedProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const onPageChange = (page: number) => setCurrentPage(page);

  console.log(totalPages);
  return (
    <div className="min-h-screen">
      <ProductsList data={currentProducts} isLoading={isLoading} />
      <div className="my-4 flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
}
