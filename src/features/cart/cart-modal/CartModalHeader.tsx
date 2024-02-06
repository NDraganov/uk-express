import { useAppDispatch } from "../../../store/hooks";
import { closeCart } from "../cartSlice";
import Icon from "../../../ui/Icon";
import { AiOutlineClose } from "react-icons/ai";

export default function CartModalHeader() {
  const dispatch = useAppDispatch();

  return (
    <div className="flex w-full items-start justify-between dark:border-gray-500">
      <p className="pb-2 text-lg font-medium dark:text-white">My Cart</p>
      <button onClick={() => dispatch(closeCart())} title="Close cart">
        <Icon
          value={{
            className:
              "text-lg fill-black hover:fill-orange-500 dark:fill-white dark:hover:fill-cyan-300",
          }}
        >
          <AiOutlineClose />
        </Icon>
      </button>
    </div>
  );
}
