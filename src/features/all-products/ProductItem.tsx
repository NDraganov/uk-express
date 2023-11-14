export interface ProductItemProps {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductItem({
  title,
  price,
  image,
  rating: { rate, count },
}: ProductItemProps) {
  return (
    <div className=" flex h-full flex-col items-center justify-between border-b-2 border-slate-200">
      <img className="mb-4 mt-4 w-32" src={image} alt={title} />
      <div className=" w-full">
        <h3>{title}</h3>
        <p>
          rate: <span>{rate}</span>
        </p>
        <p>
          £<span className="text-lg font-bold">{price}</span>
        </p>
        <p>
          availability: <span className="font-semibold">{count}</span>
        </p>
        <button className="m-2 rounded-full border border-orange-400 px-4 py-1">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
