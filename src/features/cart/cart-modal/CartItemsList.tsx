import { useAppSelector } from "../../../store/hooks";
import CartItem from "./CartItem";

export default function CartItemsList() {
  const { items: cartItems, isProcessed } = useAppSelector(
    (state) => state.cart,
  );
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  return (
    <div>
      {cartItems.length === 0 || isProcessed ? (
        <p className="text-gray-400">
          {isAuthenticated
            ? `${user?.user_metadata.firstName}, your cart is empty!`
            : "Looks like you haven’t added any items to the cart yet."}
        </p>
      ) : (
        <ul
          className={`no-scrollbar mt-2 max-h-52 overflow-scroll rounded-md border border-slate-300 p-1 dark:border-gray-500 dark:bg-slate-800 ${
            isProcessed ? "hidden" : ""
          }`}
        >
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
  );
}
