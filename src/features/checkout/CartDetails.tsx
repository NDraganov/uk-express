import { useAppSelector } from "../../store/hooks";
import DeliveryMethod from "../../ui/DeliveryMethod";
import CartItem from "../cart/CartItem";

export default function CartDetails() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const shipping = useAppSelector((state) => state.cart.shipping);

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
          <h3 className="text-lg font-medium text-slate-400">Pay UkExpress</h3>
          <span className="text-3xl font-normal text-slate-800">
            £{formattedTotalPriceWithShipping}
          </span>
        </div>

        {cartItems.length === 0 && (
          <p className="text-slate-600">No items in cart!</p>
        )}

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
        <p className="flex items-center justify-between font-medium text-slate-600">
          Subtotal:{" "}
          <span className="text-slate-800">£{formattedTotalPriceItems}</span>
        </p>
        <hr className="my-4 w-full border" />
        <p className="flex items-center justify-between text-slate-400">
          Shipping: <span>£{shipping}</span>
        </p>
        <hr className="my-4 w-full border" />
        <p className="flex items-center justify-between text-lg font-medium text-slate-600">
          Total due:{" "}
          <strong className="text-xl font-medium text-slate-800">
            £ {formattedTotalPriceWithShipping}
          </strong>
        </p>
      </div>
    </aside>
  );
}
