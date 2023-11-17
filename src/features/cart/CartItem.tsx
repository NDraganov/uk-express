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
    <div className="mb-2 flex w-full items-center justify-between">
      <div>
        <span>{item.title}</span>
        <span className="font-semibold text-orange-500">
          {" "}
          (£ {formattedSumPrice})
        </span>
      </div>
      <div className="flex gap-3">
        <IconContext.Provider
          value={{ className: "text-2xl hover:fill-orange-500" }}
        >
          <button onClick={() => handleRemoveFromCart(item.id)}>
            <CiCircleMinus />
          </button>
        </IconContext.Provider>
        <span className="text-orange-500">{item.quantity}</span>
        <IconContext.Provider
          value={{ className: "text-2xl hover:fill-orange-500" }}
        >
          <button p-2 onClick={() => handleAddToCart(item)}>
            <CiCirclePlus />
          </button>
        </IconContext.Provider>
      </div>
    </div>
  );
}
