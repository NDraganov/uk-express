import { useAppSelector } from "../../store/hooks";

export default function OrderSummary() {
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
    <section className="w-full">
      <div className="border border-slate-300 rounded-md p-4 text-slate-700">
        <h3 className="font-semibold">ORDER SUMMARY</h3>
        <p className="flex items-center justify-between my-1">
          {cartItems.length} items <span>£{formattedTotalPriceItems}</span>
        </p>
        <p className="flex items-center justify-between my-1">
          Subtotal <span>£{formattedTotalPriceItems}</span>
        </p>
        <p className="flex items-center justify-between my-1">
          Shipping <span>£{shipping}</span>
        </p>

        <p className="flex items-center justify-between my-1 text-slate-900 font-medium">
          Total <span>£{formattedTotalPriceWithShipping}</span>{" "}
        </p>
      </div>
    </section>
  );
}
