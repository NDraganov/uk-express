import { useAppDispatch } from "../store/hooks";
import { closeToast } from "../features/cart/cartSlice";
import { Toast } from "flowbite-react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export default function PushNotification() {
  const dispatch = useAppDispatch();
  return (
    <div className="fixed right-40 top-32 ">
      <Toast>
        <div>
          <MdOutlineAddShoppingCart />
        </div>
        <div className="text-lg text-red-600">Product added to cart!</div>
        <Toast.Toggle onClick={() => dispatch(closeToast())} />
      </Toast>
    </div>
  );
}
