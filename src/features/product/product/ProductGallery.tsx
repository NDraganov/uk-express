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
    <div className="flex gap-4">
      <div className="grid gap-2">
        {product?.images.map((image, index) => (
          <div
            className={`rounded-md p-[3px] ${
              imageIndex === index ? "bg-orange-500 dark:bg-cyan-500" : ""
            }`}
          >
            <img
              className={`border-1 w-40 rounded-md border-gray-400 hover:cursor-pointer hover:opacity-60 ${
                imageIndex === index
                  ? "border-orange-500 dark:border-cyan-500"
                  : ""
              }`}
              key={index}
              src={image}
              alt="image"
              onClick={() => handleSetIndex(index)}
            />
          </div>
        ))}
      </div>
      <div>
        <img
          className="rounded-md border-2 border-gray-400 dark:border-gray-500"
          src={product?.images[imageIndex]}
          alt=""
        />
      </div>
    </div>
  );
}
