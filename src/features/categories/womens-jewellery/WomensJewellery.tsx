import { useGetWomensJewelleryQuery } from "../../../api/productsApiSlice";
import ProductsList from "../../products/ProductsList";

export default function WomensJewellery() {
  const { data, isLoading } = useGetWomensJewelleryQuery(undefined);
  const womensJewellery = data?.products;

  return (
    <div className="min-h-screen">
      <ProductsList data={womensJewellery} isLoading={isLoading} />
    </div>
  );
}
