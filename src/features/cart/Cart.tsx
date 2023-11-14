import { useAppSelector } from "../../store/hooks";
import CartItem from "./CartItem";

interface CartProps {
  onClose: () => void;
}

export default function Cart({ onClose }: CartProps) {
  const cartItems = useAppSelector((state) => state.cart.items);

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

        <p>
          Cart Total: <strong>$</strong>
        </p>
      </div>
      <button
        onClick={onClose}
        className="mt-2 rounded-full border border-orange-400 px-5 py-1"
      >
        Close
      </button>
    </div>
  );
}
