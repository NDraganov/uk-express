import { useGetLaptopsQuery } from "../../../api/productsApiSlice";
import ErrorMessage from "../../../ui/ErrorMessage";
import ProductsList from "../../products/ProductsList";

export default function Laptops() {
  const { data, isLoading, error } = useGetLaptopsQuery(undefined);
  const laptops = data?.products;

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
    <div className="min-h-screen">
      <ProductsList data={laptops} isLoading={isLoading} />
    </div>
  );
}
