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
      <div className="h-3/5">
        <img
          className="h-96 w-full rounded-md"
          src={product?.images[imageIndex]}
          alt={product?.title}
        />
      </div>
      <div className="grid h-2/5 grid-flow-col place-items-center gap-2">
        {product?.images.map((image, index) => (
          <div
            className={`rounded-md p-[0.125rem] ${
              imageIndex === index ? "bg-orange-500 dark:bg-cyan-500" : ""
            }`}
          >
            <div className="m-0 rounded-md bg-white p-0">
              <img
                className={`h-32 w-40 rounded-md hover:cursor-pointer hover:opacity-60 ${
                  imageIndex === index ? "opacity-60" : ""
                }`}
                key={image}
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
