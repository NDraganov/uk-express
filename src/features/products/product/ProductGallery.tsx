import { useState } from "react";
import { useGetAllProductsQuery } from "../../../api/productsApiSlice";

interface ProductGalleryProps {
  title: string | undefined;
}

export default function ProductGallery({ title }: ProductGalleryProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const { data: products } = useGetAllProductsQuery(undefined);
  const product = products?.products.find((product) => product.title === title);

  function handleImageIndex(index: number) {
    setImageIndex(index);
  }

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-start justify-start gap-2">
        {product?.images.map((image, index) => (
          <div
            className={`rounded-md p-[0.125rem] ${
              imageIndex === index ? "bg-orange-500 dark:bg-cyan-500" : ""
            }`}
            key={image}
          >
            <div className="m-0 rounded-md bg-white p-0">
              <img
                className={`h-16 rounded-md hover:cursor-pointer hover:opacity-60 sm:h-16 ${
                  imageIndex === index ? "opacity-60" : ""
                }`}
                loading="lazy"
                role="presentation"
                decoding="async"
                src={image}
                alt={product.title}
                onClick={() => handleImageIndex(index)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full items-center justify-center border dark:border-gray-500">
        <img
          className="w-full"
          loading="lazy"
          role="presentation"
          decoding="async"
          src={product?.images[imageIndex]}
          alt={product?.title}
        />
      </div>
    </div>
  );
}
