import { useState } from "react";
import { useGetAllProductsQuery } from "../../../api/productsApiSlice";

interface ProductGalleryProps {
  id: string | undefined;
}

export default function ProductGallery({ id }: ProductGalleryProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const { data } = useGetAllProductsQuery(undefined);
  const product = data?.products.find((product) => product.id === Number(id));

  function handleSetIndex(index: number) {
    setImageIndex(index);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="h-3/5">
        <img
          className="h-96 w-full rounded-md border-2 border-gray-400 dark:border-gray-500"
          src={product?.images[imageIndex]}
          alt=""
        />
      </div>
      <div className="grid h-2/5 grid-flow-col place-items-center gap-2">
        {product?.images.map((image, index) => (
          <img
            className={`h-32 w-40 rounded-md border-4 hover:cursor-pointer hover:opacity-60 ${
              imageIndex === index
                ? "border-orange-500 opacity-60 dark:border-cyan-500"
                : "border-white dark:border-slate-900"
            }`}
            key={image}
            src={image}
            alt="image"
            onClick={() => handleSetIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
