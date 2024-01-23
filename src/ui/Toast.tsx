import Icon from "./Icon";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsCartDashFill } from "react-icons/bs";

interface ToastProps {
  type: string;
}

export default function Toast({ type }: ToastProps) {
  return (
    <div className="fixed right-10 top-20 z-10 h-12 w-60 rounded-md bg-white shadow-md dark:bg-slate-800 dark:shadow-gray-500 sm:right-20 sm:top-20">
      <div className="flex h-full items-center justify-between p-2">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 dark:bg-slate-700">
            <Icon
              value={{
                className: `text-2xl ${
                  type === "add" ? "fill-lime-500" : "fill-rose-500"
                }`,
              }}
            >
              {type === "add" && <BsFillCartPlusFill />}
              {type === "delete" && <BsCartDashFill />}
            </Icon>
          </div>
          <div className="dark:text-cyan-500">
            {type === "add" && <p>Product added!</p>}
            {type === "delete" && <p>Product deleted!</p>}
          </div>
        </div>
        <div>
          <Icon
            value={{
              className:
                "hover:fill-orange-500 hover:cursor-pointer dark:hover:fill-white",
            }}
          >
            <AiOutlineClose />
          </Icon>
        </div>
      </div>
    </div>
  );
}
