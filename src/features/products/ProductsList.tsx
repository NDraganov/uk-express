import ProductItem from "./product/ProductItem";
import { type Product } from "../../api/products-types/productsTypes";

interface ProductListProps {
  data: Product[] | undefined;
  currentData?: Product[] | undefined;
  isLoading?: boolean;
  firstIndex?: number;
  lastIndex?: number;
}

export default function ProductsList({
  data,
  currentData,
  firstIndex,
  lastIndex,
}: ProductListProps) {
  return (
    <div className="mx-4 my-20 md:mx-40">
      {currentData ? (
        <p className="mb-4 text-2xl font-light dark:text-slate-100">
          Results{" "}
          <span className="text-lg dark:text-cyan-500">{firstIndex}</span>
          <span className="text-sm"> to </span>
          <span className="text-lg dark:text-cyan-500">{lastIndex}</span>
          <span className="text-sm"> of </span>
          <span className="text-lg font-normal dark:text-cyan-500">
            {data?.length}
          </span>
        </p>
      ) : (
        <p className="mb-4 text-2xl font-light dark:text-slate-100">
          Results <span className="text-lg dark:text-cyan-500">1</span>
          <span className="text-sm dark:text-gray-400"> of </span>
          <span className="text-lg dark:text-cyan-500">{data?.length}</span>
        </p>
      )}

      <ul className="grid gap-5 md:grid-cols-3 2xl:grid-cols-4">
        {currentData
          ? currentData?.map((product) => (
              <li key={product.id}>
                <ProductItem {...product} />
              </li>
            ))
          : data?.map((product) => (
              <li key={product.id}>
                <ProductItem {...product} />
              </li>
            ))}
      </ul>
    </div>
  );
}
