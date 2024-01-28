import { useAppSelector } from "../../../store/hooks";
import { useGetAllProductsQuery } from "../../../api/productsApiSlice";
import ErrorMessage from "../../../ui/ErrorMessage";
import ProductsList from "../../products/ProductsList";
import Pagination from "../../pagination/Pagination";

export default function AllProducts() {
  const { currentPage, itemsPerPage } = useAppSelector(
    (state) => state.pagination,
  );
  const {
    data: allProducts,
    isLoading,
    error,
  } = useGetAllProductsQuery(undefined);

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

  const totalPages =
    allProducts?.products.length &&
    Math.ceil(allProducts.products.length / itemsPerPage);

  // Get current products
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allProducts?.products?.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  return (
    <div className="mt-20">
      <ProductsList data={currentItems} isLoading={isLoading} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
