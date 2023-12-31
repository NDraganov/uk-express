import { useState } from "react";
import { useGetAllProductsQuery } from "../../../api/productsApiSlice";

interface ProductGalleryProps {
  id: string | undefined;
}

export default function ProductGallery({ id }: ProductGalleryProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const { data: products } = useGetAllProductsQuery(undefined);
  const product = products?.products.find(
    (product) => product.id === Number(id),
  );

  function handleImageIndex(index: number) {
    setImageIndex(index);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center">
        <img
          className="h-96 rounded-md"
          src={product?.images[imageIndex]}
          alt={product?.title}
        />
      </div>
      <div className="grid grid-flow-col place-items-center justify-center gap-2">
        {product?.images.map((image, index) => (
          <div
            className={`rounded-md p-[0.125rem] ${
              imageIndex === index ? "bg-orange-500 dark:bg-cyan-500" : ""
            }`}
            key={image}
          >
            <div className="m-0 rounded-md bg-white p-0">
              <img
                className={`h-28 rounded-md hover:cursor-pointer hover:opacity-60 ${
                  imageIndex === index ? "opacity-60" : ""
                }`}
                src={image}
                alt={product.title}
                onClick={() => handleImageIndex(index)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
