import { useAppSelector } from "../store/hooks";
import { NavLink } from "react-router-dom";
import CartItem from "../features/cart/CartItem";

export default function CartPage() {
  const cartItems = useAppSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (value, item) => value + item.price * item.quantity,
    0,
  );

  const formattedTotalPrice = totalPrice.toFixed(2);

  return (
    <main>
      <div className="flex flex-col mx-96 mt-10">
        <div>
          <h3 className="text-xl font-semibold">Your cart</h3>

          {cartItems.length === 0 && <p>No items in cart!</p>}

          {cartItems.length > 0 && (
            <ul className="mb-2 mt-2">
              {cartItems.map((item) => {
                return (
                  <li
                    className="justify-between flex items-center"
                    key={item.id}
                  >
                    <CartItem {...item} />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div className="flex items-center justify-between">
          <p>
            Total:{" "}
            <strong className="text-orange-500">£ {formattedTotalPrice}</strong>
          </p>
          <button className="rounded-full mt-2  border border-orange-500 px-5 py-1 mb-2 hover:bg-orange-500 hover:text-black">
            <NavLink to="/cart/checkout">Checkout</NavLink>
          </button>
        </div>
      </div>
    </main>
  );
}
