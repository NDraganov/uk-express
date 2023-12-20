import { useGetSunglassesQuery } from "../../../api/productsApiSlice";
import ErrorMessage from "../../../ui/ErrorMessage";
import ProductsList from "../../products/ProductsList";

export default function Sunglasses() {
  const { data, isLoading, error } = useGetSunglassesQuery(undefined);
  const sunglasses = data?.products;

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
      <ProductsList data={sunglasses} isLoading={isLoading} />
    </div>
  );
}
