import { useAppDispatch } from "../store/hooks";
import { closeToast } from "../features/cart/cartSlice";
import { Toast } from "flowbite-react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export default function PushNotification() {
  const dispatch = useAppDispatch();
  return (
    <div className="fixed right-40 top-32 ">
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-lime-300 text-lg text-lime-600 dark:bg-cyan-700 dark:text-cyan-200">
          <MdOutlineAddShoppingCart />
        </div>
        <div className="mx-3 text-base">Product added to cart!</div>
        <Toast.Toggle onClick={() => dispatch(closeToast())} />
      </Toast>
    </div>
  );
}
