import { useState } from "react";
import { useGetAllProductsQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../products/ProductsList";
import { Pagination } from "flowbite-react";

export default function AllProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetAllProductsQuery(undefined);
  const products = data?.products;

  const productsPerPage = 21;

  const totalPages = Math.ceil(100 / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="min-h-screen">
      <ProductsList data={currentProducts} isLoading={isLoading} />
      <div className="mx-auto my-4 flex justify-center">
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
