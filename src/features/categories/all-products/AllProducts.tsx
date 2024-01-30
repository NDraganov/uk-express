import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useGetAllProductsQuery } from "../../../api/productsApiSlice";
import { getTotalPages } from "../../pagination/paginationSlice";
import ErrorMessage from "../../../ui/ErrorMessage";
import ProductsList from "../../products/ProductsList";
import Pagination from "../../pagination/Pagination";

export default function AllProducts() {
  const { currentPage, itemsPerPage, totalPages } = useAppSelector(
    (state) => state.pagination,
  );
  const dispatch = useAppDispatch();
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

  dispatch(getTotalPages(allProducts?.products.length));

  // Get current products
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allProducts?.products?.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  return (
    <div className="mt-20">
      <ProductsList
        data={allProducts?.products}
        currentData={currentItems}
        isLoading={isLoading}
        firstIndex={indexOfFirstItem}
        lastIndex={indexOfLastItem}
      />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
