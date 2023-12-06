import { useAppSelector } from "../../../../store/hooks";
import { useNavigate } from "react-router-dom";
import CartItem from "../../../cart/CartItem";
import CheckoutButton from "../../../../ui/CheckoutButton";
import Button from "../../../../ui/Button";

export default function MyCart() {
  const user = useAppSelector((state) => state.auth.user);
  const cartItems = useAppSelector((state) => state.cart.items);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen items-center justify-center overflow-scroll">
      {cartItems.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center">
          <p className="pb-4 text-2xl font-light dark:text-white">
            <span className="dark:text-cyan-500">
              {user?.user_metadata.firstName}
            </span>
            , your cart is empty!
          </p>
          <Button
            title="Start shopping"
            onClick={() => navigate("/products")}
          />
        </div>
      ) : (
        <div className="flex h-5/6 w-1/2 flex-col items-center justify-center">
          <div className="w-full">
            <h3 className="flex w-full items-center justify-start border-b border-gray-300 pb-5 font-normal dark:border-gray-500 dark:text-cyan-500">
              MY CART
            </h3>
            {cartItems.length > 0 && (
              <ul className="mt-2">
                {cartItems.map((item) => {
                  return (
                    <li
                      className="flex items-center justify-between"
                      key={item.id}
                    >
                      <CartItem {...item} />
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div className="mt-8 flex w-full items-center justify-end">
            <CheckoutButton title="Proceed to Checkout" />
          </div>
        </div>
      )}
    </div>
  );
}
