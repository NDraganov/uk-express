import { useState } from "react";
import { useGetAllProductsQuery } from "../../../api/productsApiSlice";
import ErrorMessage from "../../../ui/ErrorMessage";
import ProductsList from "../../products/ProductsList";
import { Pagination } from "flowbite-react";
import CategoriesNav from "../../header/categories-nav/CategoriesNav";

export default function AllProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useGetAllProductsQuery(undefined);
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

  if (error) {
    if ("status" in error) {
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data);
      const errStatus = JSON.stringify(error.status);

      return (
        <ErrorMessage
          userMessage="The products you are looking for can not be found!"
          errorStatus={errStatus}
          errorMessage={errMsg}
        />
      );
    } else {
      return <div>{error.message}</div>;
    }
  }

  return (
    <div className="mt-20">
      <CategoriesNav />
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
