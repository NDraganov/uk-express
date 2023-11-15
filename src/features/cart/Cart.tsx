import { useAppSelector } from "../../store/hooks";
import CartItem from "./CartItem";

interface CartProps {
  onClose: () => void;
}

export default function Cart({ onClose }: CartProps) {
  const cartItems = useAppSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (value, item) => value + item.price * item.quantity,
    0,
  );
  const formattedTotalPrice = totalPrice.toFixed(2);

  return (
    <div className=" absolute right-1/4 top-1/2 w-2/4 rounded-md border border-orange-400 bg-slate-100 p-4 text-black">
      <div>
        <h3 className="text-xl font-semibold">Your cart</h3>

        {cartItems.length === 0 && <p>No items in cart!</p>}

        {cartItems.length > 0 && (
          <ul className="mb-2 mt-2">
            {cartItems.map((item) => {
              return (
                <li className="justify-betwee flex items-center" key={item.id}>
                  <CartItem {...item} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p>
          Total: <strong>£ {formattedTotalPrice}</strong>
        </p>
        <button
          onClick={onClose}
          className="rounded-full border border-orange-400 px-5 py-1"
        >
          Close
        </button>
      </div>
    </div>
  );
}
