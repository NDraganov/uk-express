import { IconContext } from "react-icons";
import { useAppDispatch } from "../../store/hooks";
import { addToCart, removeFromCart, type CartItem } from "./cartSlice";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

export default function CartItem(item: CartItem) {
  const dispatch = useAppDispatch();

  const itemSumPrice = item.price * item.quantity;
  const formattedSumPrice = itemSumPrice.toFixed(2);

  function handleAddToCart(item: CartItem) {
    dispatch(addToCart(item));
  }

  function handleRemoveFromCart(id: number) {
    dispatch(removeFromCart(id));
  }

  return (
    <div className="flex items-center w-full mt-6 gap-4">
      <img className="w-10" src={item.image} alt={item.title} />
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between">
          <span className="font-medium text-slate-700">{item.title}</span>
          <span className="font-medium text-slate-700">
            £{formattedSumPrice}
          </span>
        </div>
        <div className="flex gap-3">
          <IconContext.Provider
            value={{
              className: "text-2xl fill-slate-500 hover:fill-slate-700",
            }}
          >
            <button onClick={() => handleRemoveFromCart(item.id)}>
              <CiCircleMinus />
            </button>
          </IconContext.Provider>
          <span className="text-slate-700">{item.quantity}</span>
          <IconContext.Provider
            value={{
              className: "text-2xl fill-slate-500 hover:fill-slate-700",
            }}
          >
            <button p-2 onClick={() => handleAddToCart(item)}>
              <CiCirclePlus />
            </button>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
