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

  const totalPriceItemsWithShipping = totalPriceItems + shipping;

  const formattedTotalPrice = totalPriceItemsWithShipping.toFixed(2);

  return (
    <aside className="flex flex-col w-1/2">
      <div>
        <div className="mt-5">
          <h3 className="text-lg font-medium text-slate-400">Pay UkExpress</h3>
          <span className="text-3xl font-normal text-slate-800">
            £{formattedTotalPrice}
          </span>
        </div>

        {cartItems.length === 0 && (
          <p className="text-slate-600">No items in cart!</p>
        )}

        {cartItems.length > 0 && (
          <ul className="mb-2 mt-2">
            {cartItems.map((item) => {
              return (
                <li className="justify-between flex items-center" key={item.id}>
                  <CartItem {...item} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="flex items-center justify-center gap-4 my-6">
        <DeliveryMethod type="standard" />
        <DeliveryMethod type="express" />
      </div>
      <div>
        <p className="text-slate-400 flex items-center justify-between">
          Shipping: <span>£{shipping}</span>
        </p>
        <hr className="border w-full my-4" />
        <p className="text-slate-600 font-medium flex items-center justify-between">
          Total due:{" "}
          <strong className="text-slate-800 text-xl font-medium">
            £ {formattedTotalPrice}
          </strong>
        </p>
      </div>
    </aside>
  );
}
