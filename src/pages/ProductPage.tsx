import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { IconContext } from "react-icons";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export default function ProductPage() {
  const { id } = useParams();
  const product = useAppSelector((state) =>
    state.allProducts.data.find((product) => product.id === Number(id)),
  );

  return (
    <main className="flex my-10 mx-20">
      {!product && <p>Error</p>}
      <div className="w-1/2 flex items-center justify-center">
        <img className="h-96" src={product?.image} alt={product?.title} />
      </div>
      <div className="w-1/2 flex items-baseline justify-start flex-col pt-10">
        <h2 className="text-3xl">{product?.title}</h2>
        <p className="pt-10">{product?.description}</p>
        <div className="flex items-baseline justify-left w-full flex-col">
          <p className="pt-5">
            ⭐️⭐️⭐️⭐️⭐️
            <span className="font-semibold"> {product?.rating.rate}</span>
          </p>
          <p className="pt-5">
            £<span className="text-2xl font-bold"> {product?.price}</span>
          </p>
          <p>
            availability:
            <span className="font-semibold"> {product?.rating.count}</span>
          </p>
        </div>
        <div className="flex items-center justify-between w-full gap-4 mt-3">
          <div className="flex gap-3">
            <IconContext.Provider
              value={{ className: "text-2xl hover:fill-orange-500" }}
            >
              <button>
                <CiCircleMinus />
              </button>
            </IconContext.Provider>
            <span className="text-orange-500">1</span>
            <IconContext.Provider
              value={{ className: "text-2xl hover:fill-orange-500" }}
            >
              <button>
                <CiCirclePlus />
              </button>
            </IconContext.Provider>
          </div>
          <button className="rounded-full mt-2 w-full border border-orange-500 px-5 py-1 mb-2 hover:bg-orange-500 hover:text-black">
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}
