import { useAppSelector } from "../../store/hooks";
import DeliveryMethod from "../../ui/DeliveryMethod";
import CartItem from "../cart/CartItem";

export default function CartDetails() {
  const { items: cartItems, shipping } = useAppSelector((state) => state.cart);

  const totalPriceItems = cartItems.reduce(
    (value, item) => value + item.price * item.quantity,
    0,
  );
  const formattedTotalPriceItems = totalPriceItems.toFixed(2);
  const totalPriceWithShipping = totalPriceItems + shipping;
  const formattedTotalPriceWithShipping = totalPriceWithShipping.toFixed(2);

  return (
    <aside className="flex w-1/2 flex-col">
      <div>
        <div className="mt-5">
          <h3 className="text-lg font-medium text-gray-400">Pay UkExpress</h3>
          <span className="text-xl font-normal text-slate-800 dark:text-cyan-500">
            £<span className="text-3xl">{formattedTotalPriceWithShipping}</span>
          </span>
        </div>

        {/* {cartItems.length === 0 && (
          <p className="text-slate-600 dark:text-gray-400">No items in cart!</p>
        )} */}

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
      <div className="my-6 flex items-center justify-center gap-4">
        <DeliveryMethod type="standard" />
        <DeliveryMethod type="express" />
      </div>

      <div>
        <p className="flex items-center justify-between font-medium dark:text-white">
          Subtotal:{" "}
          <span className="text-sm dark:text-cyan-500">
            £<span className="text-base">{formattedTotalPriceItems}</span>
          </span>
        </p>
        <hr className="my-4 w-full border dark:border-gray-500" />
        <p className="flex items-center justify-between text-sm text-slate-400">
          Shipping: <span>£{shipping}</span>
        </p>
        <hr className="my-4 w-full border dark:border-gray-500" />
        <p className="flex items-center justify-between text-lg font-medium dark:text-white">
          Total due:{" "}
          <strong className="text-base font-medium dark:text-cyan-500">
            £<span className="text-xl">{formattedTotalPriceWithShipping}</span>
          </strong>
        </p>
      </div>
    </aside>
  );
}
