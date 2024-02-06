import { useAppSelector } from "../../../store/hooks";
import CartItem from "./CartItem";

export default function CartItemsList() {
  const { items: cartItems, isProcessed } = useAppSelector(
    (state) => state.cart,
  );
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  return (
    <div className="w-full">
      {cartItems.length === 0 || isProcessed ? (
        <p className="pt-4 text-gray-400">
          {isAuthenticated
            ? `${user?.user_metadata.firstName}, your cart is empty!`
            : "Looks like you haven’t added any items to the cart yet."}
        </p>
      ) : (
        <ul
          className={`no-scrollbar max-h-[35rem] overflow-y-scroll p-1 ${
            isProcessed ? "hidden" : ""
          } ${
            cartItems.length > 1
              ? "border-gray-300 last:border-b dark:border-gray-500"
              : ""
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
