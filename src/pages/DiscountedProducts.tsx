import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useGetAllProductsQuery } from "../api/productsApiSlice";
import { getTotalPages } from "../features/pagination/paginationSlice";
import Pagination from "../features/pagination/Pagination";
import ProductsList from "../features/products/ProductsList";
import AnimationPageWrapper from "../ui/AnimationPageWrapper";

export default function DiscountedProducts() {
  const { currentPage, itemsPerPage, totalPages } = useAppSelector(
    (state) => state.pagination,
  );
  const { data: products, isLoading } = useGetAllProductsQuery(undefined);
  const dispatch = useAppDispatch();

  const discountedProducts = products?.products.filter(
    (product) => product.price <= 500 || product.price >= 1000,
  );

  useEffect(() => {
    dispatch(getTotalPages(discountedProducts?.length));
  }, [dispatch, discountedProducts]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = discountedProducts?.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  return (
    <div className="min-h-screen">
      <AnimationPageWrapper>
        <ProductsList
          data={discountedProducts}
          currentData={currentItems}
          isLoading={isLoading}
          firstIndex={indexOfFirstItem}
          lastIndex={indexOfLastItem}
        />
        <Pagination totalPages={totalPages} />
      </AnimationPageWrapper>
    </div>
  );
}
