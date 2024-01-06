import { useGetAllProductsQuery } from "../../../api/productsApiSlice";
import ErrorMessage from "../../../ui/ErrorMessage";
import ProductsList from "../../products/ProductsList";

export default function AllProducts() {
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

  return (
    <div className="mt-20">
      <ProductsList data={allProducts?.products} isLoading={isLoading} />
    </div>
  );
}
