import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeCart } from "./cartSlice";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import CheckoutButton from "../../ui/CheckoutButton";

export default function CartModal() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const totalPrice = cartItems.reduce(
    (value, item) => value + item.price * item.quantity,
    0,
  );

  const formattedTotalPrice = totalPrice.toFixed(2);

  function handleCloseCart() {
    dispatch(closeCart());
  }

  return (
    <div className="absolute right-6 top-24 z-10 w-2/4 rounded-md border border-slate-300 bg-white p-4  text-black shadow-md dark:bg-slate-800 dark:text-gray-400">
      <div>
        <h3 className="text-xl font-medium dark:text-gray-300">Your cart</h3>

        {cartItems.length === 0 && <p>No items in cart!</p>}

        {cartItems.length > 0 && (
          <ul className="mb-2 mt-2">
            {cartItems.map((item) => {
              return (
                <li className="flex items-center justify-between" key={item.id}>
                  <CartItem {...item} />
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p>
          Total due:{" "}
          <strong className="dark:text-gray-300">£{formattedTotalPrice}</strong>
        </p>
        <div className="flex items-center gap-4">
          <Button title="Close" onClick={handleCloseCart} />
          <CheckoutButton onClose={handleCloseCart} />
        </div>
      </div>
    </div>
  );
}
