import { useAppDispatch } from "../store/hooks";
import { closeToast } from "../features/cart/cartSlice";
import { Toast } from "flowbite-react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsCartDashFill } from "react-icons/bs";

interface PushNotificationProps {
  type: string;
}

export default function PushNotification({ type }: PushNotificationProps) {
  const dispatch = useAppDispatch();

  if (type === "add-product") {
    return (
      <div className="fixed right-40 top-32 ">
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-lime-300 text-lg text-lime-600 dark:bg-cyan-700 dark:text-cyan-200">
            <BsFillCartPlusFill />
          </div>
          <div className="mx-3 text-base">Product added!</div>
          <Toast.Toggle onClick={() => dispatch(closeToast())} />
        </Toast>
      </div>
    );
  } else {
    return (
      <div className="fixed right-40 top-32 ">
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-rose-500 text-lg text-rose-200 dark:bg-cyan-700 dark:text-cyan-200">
            <BsCartDashFill />
          </div>
          <div className="mx-3 text-base">Product deleted!</div>
          <Toast.Toggle onClick={() => dispatch(closeToast())} />
        </Toast>
      </div>
    );
  }
}
