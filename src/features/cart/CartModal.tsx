import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeCart } from "./cartSlice";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import CheckoutButton from "../../ui/CheckoutButton";

export default function CartModal() {
  const { items: cartItems, isProcessed } = useAppSelector(
    (state) => state.cart,
  );
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const totalPrice = cartItems.reduce(
    (value, item) => value + item.price * item.quantity,
    0,
  );

  const formattedTotalPrice = totalPrice.toFixed(2);

  return (
    <div className="absolute right-1 top-24 z-10 mx-3 rounded-md border border-slate-300 bg-white p-4 text-black shadow-md dark:border-gray-500  dark:bg-slate-800 dark:text-gray-400 sm:right-6 sm:w-1/3">
      <div>
        <h3 className="pb-2 text-lg font-medium dark:text-white">My Cart</h3>

        {cartItems.length === 0 && (
          <p className="pt-4 text-red-600 dark:text-orange-500">
            {isAuthenticated
              ? `${user?.user_metadata.firstName}, your cart is empty!`
              : "Your cart is empty!"}
          </p>
        )}
        {isProcessed && (
          <p className="pt-4 text-red-600 dark:text-orange-500">
            {isAuthenticated
              ? `${user?.user_metadata.firstName}, your cart is empty!`
              : "Your cart is empty!"}
          </p>
        )}

        {cartItems.length > 0 && (
          <ul className={`mt-2 ${isProcessed ? "hidden" : ""}`}>
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
          <strong className="dark:text-gray-300">
            £{isProcessed ? "0" : formattedTotalPrice}
          </strong>
        </p>
        <div className="flex items-center gap-4">
          <Button title="Close" onClick={() => dispatch(closeCart())} />
          <CheckoutButton title="Proceed to Checkout" />
        </div>
      </div>
    </div>
  );
}
